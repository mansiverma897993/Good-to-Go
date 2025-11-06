import { getAllGuides } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const allGuides = await getAllGuides()
    const guide = allGuides.find((g) => g.id === params.id)

    if (!guide) {
      return NextResponse.json({ error: "Guide not found" }, { status: 404 })
    }

    return NextResponse.json(guide)
  } catch (error) {
    console.error("Error fetching guide:", error)
    return NextResponse.json({ error: "Failed to fetch guide" }, { status: 500 })
  }
}
