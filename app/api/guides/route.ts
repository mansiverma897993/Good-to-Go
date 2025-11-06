import { getAllGuides, getGuidesByCategory } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    let guides

    if (category) {
      guides = await getGuidesByCategory(category)
    } else {
      guides = await getAllGuides()
    }

    return NextResponse.json(guides)
  } catch (error) {
    console.error("Error fetching guides:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
