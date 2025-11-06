"use client"

import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectGrid } from "@/components/project-grid"
import { useEffect, useState } from "react"
import type { Program } from "@/lib/types"

export default function ProgramPage() {
  const params = useParams()
  const programId = params.id as string
  const [program, setProgram] = useState<Program | null>(null)

  useEffect(() => {
    const fetchProgram = async () => {
      const res = await fetch(`/api/programs/${programId}`)
      if (res.ok) {
        const data = await res.json()
        setProgram(data)
      }
    }
    fetchProgram()
  }, [programId])

  if (!program) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 text-center py-20">
          <p className="text-muted-foreground">Loading program details...</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={program.image_url || "/placeholder.svg"}
                alt={program.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-4xl font-bold gradient-text mb-2">{program.name}</h1>
                <p className="text-muted-foreground">{program.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Participants</p>
                <p className="text-2xl font-bold">{program.participants.toLocaleString()}</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="text-lg font-semibold">
                  {new Date(program.start_date).toLocaleDateString()} -{" "}
                  {new Date(program.end_date).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Program Type</p>
                <p className="text-lg font-semibold">{program.type}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Projects in {program.name}</h2>
            <ProjectGrid search="" category="" program={programId} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
