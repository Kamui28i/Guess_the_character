import { NextRequest, NextResponse } from "next/server";
import { getDb, diffRank, PlayerScoreRow } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb();

    const result = await db.execute(`
      WITH totals AS (
        SELECT
          u.id           AS user_id,
          u.username,
          SUM(ps.score)  AS total_score,
          COUNT(ps.id)   AS modes_completed
        FROM users u
        JOIN player_scores ps ON ps.user_id = u.id
        GROUP BY u.id, u.username
      ),
      ranked AS (
        SELECT *, DENSE_RANK() OVER (ORDER BY total_score DESC) AS rank
        FROM totals
      )
      SELECT * FROM ranked WHERE rank <= 10
      ORDER BY rank, username
    `);

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch scores" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { user_id, clue_mode, difficulty, score, streak } = body;

    if (!user_id || !clue_mode || !difficulty || typeof score !== "number") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const db = await getDb();
    const dr = diffRank(difficulty);

    await db.execute({
      sql: `
        INSERT INTO player_scores (user_id, clue_mode, difficulty, diff_rank, score, streak)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(user_id, clue_mode) DO UPDATE SET
          difficulty = CASE WHEN excluded.diff_rank > diff_rank THEN excluded.difficulty ELSE difficulty END,
          diff_rank  = CASE WHEN excluded.diff_rank > diff_rank THEN excluded.diff_rank  ELSE diff_rank  END,
          score = CASE
                    WHEN excluded.diff_rank > diff_rank THEN excluded.score
                    WHEN excluded.diff_rank = diff_rank AND excluded.score > score THEN excluded.score
                    ELSE score
                  END,
          streak = CASE
                     WHEN excluded.diff_rank > diff_rank THEN excluded.streak
                     WHEN excluded.diff_rank = diff_rank AND excluded.score > score THEN excluded.streak
                     ELSE streak
                   END,
          updated_at = CASE
                         WHEN excluded.diff_rank > diff_rank
                              OR (excluded.diff_rank = diff_rank AND excluded.score > score)
                           THEN datetime('now')
                         ELSE updated_at
                       END
      `,
      args: [user_id, clue_mode, difficulty, dr, score, streak ?? 0],
    });

    const rowResult = await db.execute({
      sql: "SELECT * FROM player_scores WHERE user_id = ? AND clue_mode = ?",
      args: [user_id, clue_mode],
    });

    return NextResponse.json(rowResult.rows[0] as unknown as PlayerScoreRow);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save score" }, { status: 500 });
  }
}
