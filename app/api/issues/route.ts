import { getAllIssues, searchIssues, getIssuesByDifficulty, getIssuesByLabel } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const difficulty = searchParams.get("difficulty")
    const label = searchParams.get("label")

    let issues

    if (query) {
      issues = await searchIssues(query)
    } else if (difficulty) {
      issues = await getIssuesByDifficulty(difficulty)
    } else if (label) {
      issues = await getIssuesByLabel(label)
    } else {
      issues = await getAllIssues()
    }

    return NextResponse.json(issues)
  } catch (error) {
    console.error("Error fetching issues:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
