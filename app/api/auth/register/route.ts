import { createUser, getUserByEmail } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, name, password, skills } = await request.json()

    // Validate input
    if (!email || !name || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    // Create user
    const userData = {
      email,
      name,
      bio: "",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      skills: skills || [],
      interests: [],
      contributions_count: 0,
    }

    const user = await createUser(userData)

    // Return user (in production, create JWT token here)
    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
