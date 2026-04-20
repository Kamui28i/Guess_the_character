import { NextRequest, NextResponse } from "next/server";
import { getDb, diffRank, PlayerScoreRow } from "@/lib/db";

export async function GET() {
  try {
    const db = getDb();

    const rows = db.prepare(`
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
    `).all();

    return NextResponse.json(rows);
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

    const db = getDb();
    const dr = diffRank(difficulty);

    // Upsert: only overwrite if new run is strictly better (higher difficulty, or same diff + higher score)
    db.prepare(`
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
    `).run(user_id, clue_mode, difficulty, dr, score, streak ?? 0);

    const row = db
      .prepare("SELECT * FROM player_scores WHERE user_id = ? AND clue_mode = ?")
      .get(user_id, clue_mode) as PlayerScoreRow;

    return NextResponse.json(row);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save score" }, { status: 500 });
  }
}
