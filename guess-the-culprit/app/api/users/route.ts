import { NextRequest, NextResponse } from "next/server";
import { getDb, UserRow } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { username } = await req.json();
    if (!username || typeof username !== "string") {
      return NextResponse.json({ error: "Username required" }, { status: 400 });
    }

    const clean = username.trim();
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(clean)) {
      return NextResponse.json(
        { error: "Username must be 3–20 characters (letters, numbers, _)" },
        { status: 400 }
      );
    }

    const db = await getDb();

    try {
      const result = await db.execute({
        sql: "INSERT INTO users (username) VALUES (?)",
        args: [clean],
      });
      return NextResponse.json({
        id: Number(result.lastInsertRowid),
        username: clean,
        created: true,
      });
    } catch {
      // UNIQUE constraint → user already exists
      const result = await db.execute({
        sql: "SELECT * FROM users WHERE username = ?",
        args: [clean],
      });
      const row = result.rows[0] as unknown as UserRow;
      if (!row) throw new Error("unexpected missing user");
      return NextResponse.json({ id: row.id, username: row.username, created: false });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
