import { addBookmark, removeBookmark, getUserBookmarks } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("user_id")

    if (!userId) {
      return NextResponse.json({ error: "user_id is required" }, { status: 400 })
    }

    const bookmarks = await getUserBookmarks(userId)
    return NextResponse.json(bookmarks)
  } catch (error) {
    console.error("Error fetching bookmarks:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { user_id, issue_id } = await request.json()

    if (!user_id || !issue_id) {
      return NextResponse.json({ error: "user_id and issue_id are required" }, { status: 400 })
    }

    const bookmark = await addBookmark(user_id, issue_id)
    return NextResponse.json(bookmark, { status: 201 })
  } catch (error) {
    console.error("Error creating bookmark:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("user_id")
    const issueId = searchParams.get("issue_id")

    if (!userId || !issueId) {
      return NextResponse.json({ error: "user_id and issue_id are required" }, { status: 400 })
    }

    await removeBookmark(userId, issueId)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error removing bookmark:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
