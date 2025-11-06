import {
  getAllProjects,
  searchProjects,
  getProjectsByCategory,
  getProjectsBySkills,
  getProjectsByProgram,
} from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const category = searchParams.get("category")
    const skills = searchParams.get("skills")
    const program = searchParams.get("program")

    let projects

    if (skills) {
      const skillsArray = skills.split(",").filter(Boolean)
      projects = await getProjectsBySkills(skillsArray)
    } else if (program) {
      projects = await getProjectsByProgram(program)
    } else if (query) {
      projects = await searchProjects(query)
    } else if (category) {
      projects = await getProjectsByCategory(category)
    } else {
      projects = await getAllProjects()
    }

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
