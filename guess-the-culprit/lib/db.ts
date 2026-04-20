import { createClient, Client } from "@libsql/client";
import path from "path";
import fs from "fs";

const DIFF_RANK: Record<string, number> = { easy: 1, medium: 2, hard: 3 };
export function diffRank(d: string): number {
  return DIFF_RANK[d] ?? 0;
}

let _client: Client | null = null;
let _initPromise: Promise<void> | null = null;

function makeClient(): Client {
  const remoteUrl = process.env.TURSO_DATABASE_URL;

  if (remoteUrl) {
    return createClient({
      url: remoteUrl,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  }

  // Local dev fallback — plain SQLite file
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  return createClient({ url: `file:${path.join(dataDir, "scores.db")}` });
}

async function initSchema(client: Client): Promise<void> {
  await client.batch(
    [
      {
        sql: `CREATE TABLE IF NOT EXISTS users (
          id          INTEGER PRIMARY KEY AUTOINCREMENT,
          username    TEXT    NOT NULL UNIQUE COLLATE NOCASE,
          created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
        )`,
        args: [],
      },
      {
        sql: `CREATE TABLE IF NOT EXISTS player_scores (
          id          INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id     INTEGER NOT NULL REFERENCES users(id),
          clue_mode   TEXT    NOT NULL,
          difficulty  TEXT    NOT NULL,
          diff_rank   INTEGER NOT NULL,
          score       INTEGER NOT NULL,
          streak      INTEGER NOT NULL DEFAULT 0,
          updated_at  TEXT    NOT NULL DEFAULT (datetime('now')),
          UNIQUE(user_id, clue_mode)
        )`,
        args: [],
      },
      {
        sql: `CREATE TABLE IF NOT EXISTS scores (
          id          INTEGER PRIMARY KEY AUTOINCREMENT,
          name        TEXT    NOT NULL,
          score       INTEGER NOT NULL,
          difficulty  TEXT    NOT NULL,
          clue_mode   TEXT    NOT NULL,
          streak      INTEGER NOT NULL DEFAULT 0,
          created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
        )`,
        args: [],
      },
    ],
    "write"
  );
}

export async function getDb(): Promise<Client> {
  if (!_client) _client = makeClient();
  if (!_initPromise) {
    _initPromise = initSchema(_client).catch((err) => {
      _initPromise = null; // allow retry on transient errors
      throw err;
    });
  }
  await _initPromise;
  return _client;
}

// ── Row types ────────────────────────────────────────────────────────────────

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
