"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { projectService } from "@/lib/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import { useEffect, useState } from "react"

interface Project {
  _id: string;
  name: string;
  description: string;
  language: string[];
  difficulty_level: string;
  stars: number;
  forks: number;
  contributors: number;
  github_url: string;
  url: string;
  category: string;
  is_featured: boolean;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [difficulty, setDifficulty] = useState<string>("")

  useEffect(() => {
    loadProjects()
  }, [difficulty])

  const loadProjects = async () => {
    try {
      setLoading(true)
      const filters = difficulty ? { difficulty_level: difficulty } : {}
      const data = await projectService.getAll(filters)
      setProjects(Array.isArray(data) ? data : [])
      setError(null)
    } catch (err: any) {
      // Show sample data on error
      setSampleProjects()
    } finally {
      setLoading(false)
    }
  }

  const setSampleProjects = () => {
    const sampleData: Project[] = [
      {
        _id: "1",
        name: "React Query",
        description: "Powerful asynchronous state management for TS/JS, React Query, Solid Query, Vue Query and Svelte Query may be all you ever need.",
        language: ["TypeScript", "React"],
        difficulty_level: "Intermediate",
        stars: 42000,
        forks: 2800,
        contributors: 450,
        github_url: "https://github.com/tannerlinsley/react-query",
        url: "https://tanstack.com/query/latest",
        category: "Web Development",
        is_featured: true
      },
      {
        _id: "2",
        name: "Next.js",
        description: "The React Framework for Production. Build full-stack web applications with Next.js and React.",
        language: ["TypeScript", "JavaScript", "React"],
        difficulty_level: "Intermediate",
        stars: 125000,
        forks: 27000,
        contributors: 2000,
        github_url: "https://github.com/vercel/next.js",
        url: "https://nextjs.org",
        category: "Web Framework",
        is_featured: true
      },
      {
        _id: "3",
        name: "Vue.js",
        description: "The Progressive JavaScript Framework for building user interfaces with ease.",
        language: ["JavaScript", "TypeScript", "Vue"],
        difficulty_level: "Beginner",
        stars: 207000,
        forks: 33000,
        contributors: 400,
        github_url: "https://github.com/vuejs/core",
        url: "https://vuejs.org",
        category: "Framework",
        is_featured: true
      },
      {
        _id: "4",
        name: "TailwindCSS",
        description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework.",
        language: ["CSS", "JavaScript"],
        difficulty_level: "Beginner",
        stars: 82000,
        forks: 4200,
        contributors: 680,
        github_url: "https://github.com/tailwindlabs/tailwindcss",
        url: "https://tailwindcss.com",
        category: "CSS Framework",
        is_featured: true
      },
      {
        _id: "5",
        name: "Express.js",
        description: "Fast, unopinionated, minimalist web framework for Node.js",
        language: ["JavaScript", "TypeScript"],
        difficulty_level: "Beginner",
        stars: 64000,
        forks: 17000,
        contributors: 300,
        github_url: "https://github.com/expressjs/express",
        url: "https://expressjs.com",
        category: "Backend Framework",
        is_featured: true
      },
      {
        _id: "6",
        name: "Astro",
        description: "Build faster websites with less client-side JavaScript. Ship zero JavaScript by default.",
        language: ["TypeScript", "JavaScript"],
        difficulty_level: "Intermediate",
        stars: 45000,
        forks: 2400,
        contributors: 350,
        github_url: "https://github.com/withastro/astro",
        url: "https://astro.build",
        category: "Web Framework",
        is_featured: true
      },
      {
        _id: "7",
        name: "Svelte",
        description: "Cybernetically enhanced web apps. A compiler for building fast and interactive web applications.",
        language: ["TypeScript", "JavaScript"],
        difficulty_level: "Intermediate",
        stars: 78000,
        forks: 4100,
        contributors: 500,
        github_url: "https://github.com/sveltejs/svelte",
        url: "https://svelte.dev",
        category: "Frontend Framework",
        is_featured: true
      },
      {
        _id: "8",
        name: "Nuxt",
        description: "The Intuitive Vue Framework for Server Side Rendering, Static Generation, and more.",
        language: ["TypeScript", "Vue", "JavaScript"],
        difficulty_level: "Intermediate",
        stars: 54000,
        forks: 4800,
        contributors: 420,
        github_url: "https://github.com/nuxt/nuxt",
        url: "https://nuxt.com",
        category: "Vue Framework",
        is_featured: true
      },
      {
        _id: "9",
        name: "GraphQL",
        description: "A query language and runtime for APIs. GraphQL provides a complete description of your data.",
        language: ["JavaScript", "TypeScript"],
        difficulty_level: "Advanced",
        stars: 20000,
        forks: 1600,
        contributors: 280,
        github_url: "https://github.com/graphql/graphql-js",
        url: "https://graphql.org",
        category: "API",
        is_featured: true
      },
      {
        _id: "10",
        name: "Prettier",
        description: "An opinionated code formatter. It removes all original styling and ensures consistent formatting.",
        language: ["JavaScript", "TypeScript"],
        difficulty_level: "Beginner",
        stars: 49000,
        forks: 3300,
        contributors: 210,
        github_url: "https://github.com/prettier/prettier",
        url: "https://prettier.io",
        category: "Developer Tools",
        is_featured: false
      }
    ]
    setProjects(sampleData)
  }

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  // Filter projects based on difficulty
  const filteredProjects = difficulty 
    ? projects.filter(p => p.difficulty_level === difficulty)
    : projects

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <FadeIn>
          <section className="px-6 py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold mb-4">Open Source Projects</h1>
              <p className="text-xl text-foreground/60">
                Explore amazing open source projects and start contributing today
              </p>
            </div>
          </section>
        </FadeIn>

        <section className="px-6 py-12 max-w-6xl mx-auto">
          {/* Filters */}
          <FadeIn delay={0.2}>
            <div className="mb-8 flex gap-2 flex-wrap">
              <Button
                variant={difficulty === "" ? "default" : "outline"}
                onClick={() => setDifficulty("")}
              >
                All Levels
              </Button>
              <Button
                variant={difficulty === "Beginner" ? "default" : "outline"}
                onClick={() => setDifficulty("Beginner")}
              >
                Beginner
              </Button>
              <Button
                variant={difficulty === "Intermediate" ? "default" : "outline"}
                onClick={() => setDifficulty("Intermediate")}
              >
                Intermediate
              </Button>
              <Button
                variant={difficulty === "Advanced" ? "default" : "outline"}
                onClick={() => setDifficulty("Advanced")}
              >
                Advanced
              </Button>
            </div>
          </FadeIn>

          {loading ? (
            <div className="text-center py-20">
              <p className="text-foreground/60">Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground/60">No projects found for this difficulty level</p>
            </div>
          ) : (
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid gap-6">
                {filteredProjects.map((project) => (
                  <StaggerItem key={project._id}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2">
                              {project.name}
                            </CardTitle>
                            <p className="text-foreground/60 mb-4">
                              {project.description}
                            </p>
                          </div>
                          <Badge className={getDifficultyColor(project.difficulty_level)}>
                            {project.difficulty_level}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-4">
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {project.language.map((lang) => (
                              <Badge key={lang} variant="secondary">
                                {lang}
                              </Badge>
                            ))}
                          </div>

                          {/* Stats */}
                          <div className="flex gap-6 text-sm text-foreground/60">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4" />
                              <span>{project.stars.toLocaleString()} stars</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <GitFork className="w-4 h-4" />
                              <span>{project.forks.toLocaleString()} forks</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>👥 {project.contributors} contributors</span>
                            </div>
                          </div>

                          {/* Category */}
                          {project.category && (
                            <div className="text-sm">
                              <span className="text-foreground/60">Category: </span>
                              <Badge variant="outline">{project.category}</Badge>
                            </div>
                          )}

                          {/* Links */}
                          <div className="flex gap-2 pt-4">
                            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="sm">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                              </Button>
                            </a>
                            {project.url && (
                              <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="sm">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Website
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
