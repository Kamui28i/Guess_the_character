import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "scores.db");

let _db: Database.Database | null = null;

const DIFF_RANK: Record<string, number> = { easy: 1, medium: 2, hard: 3 };
export function diffRank(d: string): number {
  return DIFF_RANK[d] ?? 0;
}

export function getDb(): Database.Database {
  if (_db) return _db;

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  _db = new Database(DB_PATH);

  _db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      username    TEXT    NOT NULL UNIQUE COLLATE NOCASE,
      created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS player_scores (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id     INTEGER NOT NULL REFERENCES users(id),
      clue_mode   TEXT    NOT NULL,
      difficulty  TEXT    NOT NULL,
      diff_rank   INTEGER NOT NULL,
      score       INTEGER NOT NULL,
      streak      INTEGER NOT NULL DEFAULT 0,
      updated_at  TEXT    NOT NULL DEFAULT (datetime('now')),
      UNIQUE(user_id, clue_mode)
    );

    -- keep old table for backward compat
    CREATE TABLE IF NOT EXISTS scores (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      name        TEXT    NOT NULL,
      score       INTEGER NOT NULL,
      difficulty  TEXT    NOT NULL,
      clue_mode   TEXT    NOT NULL,
      streak      INTEGER NOT NULL DEFAULT 0,
      created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
    );
  `);

  return _db;
}

export interface UserRow {
  id: number;
  username: string;
  created_at: string;
}

export interface PlayerScoreRow {
  id: number;
  user_id: number;
  clue_mode: string;
  difficulty: string;
  diff_rank: number;
  score: number;
  streak: number;
  updated_at: string;
}

export interface LeaderboardRow {
  rank: number;
  username: string;
  total_score: number;
  modes_completed: number;
}

export interface ScoreRow {
  id: number;
  name: string;
  score: number;
  difficulty: string;
  clue_mode: string;
  streak: number;
  created_at: string;
}
