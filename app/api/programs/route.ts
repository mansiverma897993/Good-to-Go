import { getAllPrograms } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const programs = await getAllPrograms()
    return NextResponse.json(programs)
  } catch (error) {
    console.error("Error fetching programs:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
