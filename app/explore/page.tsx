"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectGrid } from "@/components/project-grid"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const AVAILABLE_SKILLS = [
  // Programming Languages
  { category: "Languages", name: "JavaScript", value: "javascript" },
  { category: "Languages", name: "TypeScript", value: "typescript" },
  { category: "Languages", name: "Python", value: "python" },
  { category: "Languages", name: "Rust", value: "rust" },
  { category: "Languages", name: "Go", value: "go" },
  { category: "Languages", name: "Java", value: "java" },
  { category: "Languages", name: "C++", value: "cpp" },
  { category: "Languages", name: "C#", value: "csharp" },

  // Frontend
  { category: "Frontend", name: "React", value: "react" },
  { category: "Frontend", name: "Vue.js", value: "vue" },
  { category: "Frontend", name: "Angular", value: "angular" },
  { category: "Frontend", name: "Svelte", value: "svelte" },
  { category: "Frontend", name: "Next.js", value: "nextjs" },
  { category: "Frontend", name: "Web Dev", value: "web-dev" },

  // Backend
  { category: "Backend", name: "Node.js", value: "nodejs" },
  { category: "Backend", name: "Express", value: "express" },
  { category: "Backend", name: "Django", value: "django" },
  { category: "Backend", name: "Flask", value: "flask" },
  { category: "Backend", name: "FastAPI", value: "fastapi" },

  // Database
  { category: "Database", name: "MongoDB", value: "mongodb" },
  { category: "Database", name: "PostgreSQL", value: "postgresql" },
  { category: "Database", name: "MySQL", value: "mysql" },
  { category: "Database", name: "Redis", value: "redis" },

  // Specialized
  { category: "Specialized", name: "Web3 / Blockchain", value: "web3" },
  { category: "Specialized", name: "AR / VR", value: "ar-vr" },
  { category: "Specialized", name: "App Dev", value: "app-dev" },
  { category: "Specialized", name: "ML / AI", value: "ml-ai" },
  { category: "Specialized", name: "DevOps", value: "devops" },
]

export default function ExplorePage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [showProjects, setShowProjects] = useState(false)

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const handleExplore = () => {
    if (selectedSkills.length > 0) {
      setShowProjects(true)
    }
  }

  const skillsByCategory = AVAILABLE_SKILLS.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof AVAILABLE_SKILLS>,
  )

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {!showProjects ? (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold gradient-text mb-4">Find Your Perfect Project</h1>
                <p className="text-lg text-foreground/60">
                  Select your skills and expertise to discover open source projects that match your abilities
                </p>
              </div>

              <Card className="glow-border bg-white">
                <CardHeader>
                  <CardTitle>Choose Your Tech Stack & Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(skillsByCategory).map(([category, skills]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-lg mb-3">{category}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {skills.map((skill) => (
                          <div key={skill.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={skill.value}
                              checked={selectedSkills.includes(skill.value)}
                              onCheckedChange={() => toggleSkill(skill.value)}
                            />
                            <label
                              htmlFor={skill.value}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              {skill.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="pt-6 border-t flex gap-3">
                    <Button onClick={handleExplore} disabled={selectedSkills.length === 0} size="lg" className="flex-1">
                      Show Me Projects ({selectedSkills.length} selected)
                    </Button>
                    {selectedSkills.length > 0 && (
                      <Button variant="outline" onClick={() => setSelectedSkills([])} size="lg">
                        Clear All
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <h3 className="font-semibold mb-2">💡 Tip:</h3>
                <p className="text-foreground/70">
                  You can select multiple skills. We'll show you projects that match at least one of your selected
                  skills. The more specific your selection, the better matches you'll find!
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => {
                    const skillObj = AVAILABLE_SKILLS.find((s) => s.value === skill)
                    return (
                      <Badge key={skill} variant="secondary" className="gap-2">
                        {skillObj?.name}
                        <button onClick={() => toggleSkill(skill)} className="ml-1 hover:opacity-70">
                          ×
                        </button>
                      </Badge>
                    )
                  })}
                </div>
                <Button variant="ghost" onClick={() => setShowProjects(false)}>
                  Change Skills
                </Button>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Projects for Your Skills</h2>
                <ProjectGrid search={selectedSkills.join(",")} category="" />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
