import { addContribution, getUserContributions } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("user_id")

    if (!userId) {
      return NextResponse.json({ error: "user_id is required" }, { status: 400 })
    }

    const contributions = await getUserContributions(userId)
    return NextResponse.json(contributions)
  } catch (error) {
    console.error("Error fetching contributions:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { user_id, project_id, contribution_type, status } = await request.json()

    if (!user_id || !project_id || !contribution_type) {
      return NextResponse.json({ error: "user_id, project_id, and contribution_type are required" }, { status: 400 })
    }

    const contribution = await addContribution(user_id, project_id, {
      contribution_type,
      status: status || "Pending",
    })

    return NextResponse.json(contribution, { status: 201 })
  } catch (error) {
    console.error("Error creating contribution:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
