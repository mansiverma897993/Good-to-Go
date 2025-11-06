import { getProgramById } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const program = await getProgramById(params.id)
    if (!program) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 })
    }
    return NextResponse.json(program)
  } catch (error) {
    console.error("Error fetching program:", error)
    return NextResponse.json({ error: "Failed to fetch program" }, { status: 500 })
  }
}
