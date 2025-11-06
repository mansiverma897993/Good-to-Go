import { getProjectsByProgram, getProjectsBySkills } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { searchParams } = new URL(request.url)
    const programId = params.id
    const skillsParam = searchParams.get("skills")

    let projects

    if (skillsParam) {
      const skills = skillsParam.split(",").filter(Boolean)
      projects = await getProjectsBySkills(skills)
    } else {
      projects = await getProjectsByProgram(programId)
    }

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
