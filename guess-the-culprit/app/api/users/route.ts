import { NextRequest, NextResponse } from "next/server";
import { getDb, UserRow } from "@/lib/db";

// POST /api/users  { username }
// → creates user if new, returns { id, username, created }
// → if already exists returns the same shape with created: false
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

    const db = getDb();

    // Try insert
    try {
      const info = db
        .prepare("INSERT INTO users (username) VALUES (?)")
        .run(clean);
      return NextResponse.json({ id: info.lastInsertRowid, username: clean, created: true });
    } catch {
      // UNIQUE constraint → user exists, just return it
      const row = db
        .prepare("SELECT * FROM users WHERE username = ? COLLATE NOCASE")
        .get(clean) as UserRow;
      if (!row) throw new Error("unexpected");
      return NextResponse.json({ id: row.id, username: row.username, created: false });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
