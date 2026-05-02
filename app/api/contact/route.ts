import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"

const connectionString = process.env.DATABASE_URL

declare global {
  // eslint-disable-next-line no-var
  var pgPool: Pool | undefined
}

const pool = global.pgPool ?? (connectionString ? new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
}) : undefined)

if (pool) {
  global.pgPool = pool
}

const tableName = "contact_messages"

async function ensureTable() {
  if (!pool) {
    throw new Error("DATABASE_URL is not configured")
  }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please complete all required fields (name, email, message)." }, { status: 400 })
    }

    await ensureTable()

    if (!pool) {
      return NextResponse.json({ error: "Database not configured. Please set DATABASE_URL." }, { status: 500 })
    }

    const result = await pool.query(
      `INSERT INTO ${tableName} (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [name, email, phone || "", subject || "Contact Form Inquiry", message],
    )

    return NextResponse.json({ success: true, id: result.rows[0].id }, { status: 201 })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Unable to save message. Please try again later." }, { status: 500 })
  }
}
