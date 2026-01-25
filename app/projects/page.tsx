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
        name: "First Timers Only",
        description: "A list of issues marked as beginner-friendly across all open source projects. Perfect for finding your first contribution.",
        language: ["JavaScript", "Python"],
        difficulty_level: "Beginner",
        stars: 8500,
        forks: 1200,
        contributors: 450,
        github_url: "https://github.com/firsttimersonly/first-timers-only",
        url: "https://www.firsttimersonly.com/",
        category: "Learning",
        is_featured: true
      },
      {
        _id: "2",
        name: "Awesome First PR Opportunities",
        description: "A curated list of projects with good issues for new contributors. Find projects actively welcoming beginners.",
        language: ["JavaScript", "Markdown"],
        difficulty_level: "Beginner",
        stars: 5200,
        forks: 800,
        contributors: 320,
        github_url: "https://github.com/MunGell/awesome-for-beginners",
        url: "https://github.com/MunGell/awesome-for-beginners",
        category: "Resources",
        is_featured: true
      },
      {
        _id: "3",
        name: "freeCodeCamp",
        description: "Learn to code for free. Contribute to tutorials, fix bugs, improve documentation. Large welcoming community.",
        language: ["JavaScript", "React", "Python"],
        difficulty_level: "Beginner",
        stars: 401000,
        forks: 38000,
        contributors: 5000,
        github_url: "https://github.com/freeCodeCamp/freeCodeCamp",
        url: "https://www.freecodecamp.org/",
        category: "Education",
        is_featured: true
      },
      {
        _id: "4",
        name: "React",
        description: "A JavaScript library for building user interfaces with reusable components. Massive open source project.",
        language: ["JavaScript", "JSX"],
        difficulty_level: "Intermediate",
        stars: 225000,
        forks: 46000,
        contributors: 1500,
        github_url: "https://github.com/facebook/react",
        url: "https://react.dev/",
        category: "Framework",
        is_featured: true
      },
      {
        _id: "5",
        name: "Vue.js",
        description: "Progressive JavaScript framework for building interactive user interfaces. Friendly community for contributors.",
        language: ["JavaScript", "TypeScript", "Vue"],
        difficulty_level: "Beginner",
        stars: 207000,
        forks: 33000,
        contributors: 400,
        github_url: "https://github.com/vuejs/core",
        url: "https://vuejs.org/",
        category: "Framework",
        is_featured: true
      },
      {
        _id: "6",
        name: "Supabase",
        description: "Open source Firebase alternative. Build backends, databases, and auth. Great for learning full-stack.",
        language: ["TypeScript", "JavaScript", "PostgreSQL"],
        difficulty_level: "Intermediate",
        stars: 70000,
        forks: 5200,
        contributors: 650,
        github_url: "https://github.com/supabase/supabase",
        url: "https://supabase.com/",
        category: "Backend",
        is_featured: true
      },
      {
        _id: "7",
        name: "Astro",
        description: "Build faster websites with less JavaScript. Modern framework with excellent documentation for contributors.",
        language: ["TypeScript", "JavaScript"],
        difficulty_level: "Intermediate",
        stars: 47000,
        forks: 2400,
        contributors: 350,
        github_url: "https://github.com/withastro/astro",
        url: "https://astro.build/",
        category: "Framework",
        is_featured: true
      },
      {
        _id: "8",
        name: "Next.js",
        description: "React framework for production. Full-stack capabilities with amazing community support.",
        language: ["TypeScript", "JavaScript", "React"],
        difficulty_level: "Intermediate",
        stars: 125000,
        forks: 27000,
        contributors: 2000,
        github_url: "https://github.com/vercel/next.js",
        url: "https://nextjs.org/",
        category: "Framework",
        is_featured: true
      },
      {
        _id: "9",
        name: "Svelte",
        description: "Cybernetically enhanced web apps. Modern approach to frontend development with great documentation.",
        language: ["TypeScript", "JavaScript"],
        difficulty_level: "Intermediate",
        stars: 78000,
        forks: 4100,
        contributors: 500,
        github_url: "https://github.com/sveltejs/svelte",
        url: "https://svelte.dev/",
        category: "Framework",
        is_featured: true
      },
      {
        _id: "10",
        name: "TailwindCSS",
        description: "Utility-first CSS framework. Build modern designs without leaving HTML. Active contributor community.",
        language: ["CSS", "JavaScript", "TypeScript"],
        difficulty_level: "Beginner",
        stars: 82000,
        forks: 4200,
        contributors: 680,
        github_url: "https://github.com/tailwindlabs/tailwindcss",
        url: "https://tailwindcss.com/",
        category: "CSS Framework",
        is_featured: true
      },
      {
        _id: "11",
        name: "Open Source Food Delivery",
        description: "Open source food delivery platform. Full-stack project perfect for learning real-world development.",
        language: ["JavaScript", "React", "Node.js"],
        difficulty_level: "Intermediate",
        stars: 12000,
        forks: 3400,
        contributors: 250,
        github_url: "https://github.com/prateekbhatt/fooddelivery",
        url: "https://github.com/prateekbhatt/fooddelivery",
        category: "Full Stack",
        is_featured: false
      },
      {
        _id: "12",
        name: "Node.js",
        description: "JavaScript runtime built on Chrome's V8. Huge project with many beginner-friendly issues.",
        language: ["JavaScript", "C++"],
        difficulty_level: "Intermediate",
        stars: 106000,
        forks: 29000,
        contributors: 2500,
        github_url: "https://github.com/nodejs/node",
        url: "https://nodejs.org/",
        category: "Runtime",
        is_featured: true
      },
      {
        _id: "13",
        name: "MongoDB",
        description: "NoSQL database. Large project with documentation and testing opportunities for new contributors.",
        language: ["JavaScript", "C++", "Python"],
        difficulty_level: "Advanced",
        stars: 26000,
        forks: 6800,
        contributors: 800,
        github_url: "https://github.com/mongodb/mongo",
        url: "https://www.mongodb.com/",
        category: "Database",
        is_featured: true
      },
      {
        _id: "14",
        name: "VS Code",
        description: "Code editor by Microsoft. Well-documented project with clear contribution guidelines.",
        language: ["TypeScript", "JavaScript"],
        difficulty_level: "Intermediate",
        stars: 160000,
        forks: 28000,
        contributors: 2200,
        github_url: "https://github.com/microsoft/vscode",
        url: "https://code.visualstudio.com/",
        category: "Editor",
        is_featured: true
      },
      {
        _id: "15",
        name: "Prettier",
        description: "Code formatter. Simple and focused project. Great for understanding how tools work.",
        language: ["JavaScript", "TypeScript"],
        difficulty_level: "Beginner",
        stars: 49000,
        forks: 3300,
        contributors: 210,
        github_url: "https://github.com/prettier/prettier",
        url: "https://prettier.io/",
        category: "Developer Tools",
        is_featured: false
      },
      {
        _id: "16",
        name: "ESLint",
        description: "Find and fix problems in JavaScript. Well-maintained with clear issues for beginners.",
        language: ["JavaScript"],
        difficulty_level: "Beginner",
        stars: 25000,
        forks: 4500,
        contributors: 420,
        github_url: "https://github.com/eslint/eslint",
        url: "https://eslint.org/",
        category: "Linting",
        is_featured: true
      },
      {
        _id: "17",
        name: "Webpack",
        description: "Module bundler for JavaScript. Important tool with good documentation for new contributors.",
        language: ["JavaScript", "TypeScript"],
        difficulty_level: "Intermediate",
        stars: 64000,
        forks: 8900,
        contributors: 800,
        github_url: "https://github.com/webpack/webpack",
        url: "https://webpack.js.org/",
        category: "Build Tool",
        is_featured: true
      },
      {
        _id: "18",
        name: "Bootstrap",
        description: "Popular CSS framework. Huge community with many contribution opportunities.",
        language: ["CSS", "JavaScript", "HTML"],
        difficulty_level: "Beginner",
        stars: 169000,
        forks: 79000,
        contributors: 1200,
        github_url: "https://github.com/twbs/bootstrap",
        url: "https://getbootstrap.com/",
        category: "CSS Framework",
        is_featured: true
      },
      {
        _id: "19",
        name: "Kubernetes",
        description: "Container orchestration platform. Large scale project with many contribution levels.",
        language: ["Go", "JavaScript"],
        difficulty_level: "Advanced",
        stars: 108000,
        forks: 39000,
        contributors: 4000,
        github_url: "https://github.com/kubernetes/kubernetes",
        url: "https://kubernetes.io/",
        category: "DevOps",
        is_featured: true
      },
      {
        _id: "20",
        name: "Docker",
        description: "Containerization platform. Widely used in industry. Good learning opportunities.",
        language: ["Go", "Shell"],
        difficulty_level: "Intermediate",
        stars: 69000,
        forks: 19000,
        contributors: 1200,
        github_url: "https://github.com/moby/moby",
        url: "https://www.docker.com/",
        category: "DevOps",
        is_featured: true
      },
      {
        _id: "21",
        name: "GraphQL",
        description: "Query language for APIs. Specification-driven project with clear contribution paths.",
        language: ["JavaScript", "TypeScript"],
        difficulty_level: "Advanced",
        stars: 20000,
        forks: 1600,
        contributors: 280,
        github_url: "https://github.com/graphql/graphql-js",
        url: "https://graphql.org/",
        category: "API",
        is_featured: true
      },
      {
        _id: "22",
        name: "Material-UI",
        description: "React component library. Large project with many component contribution opportunities.",
        language: ["TypeScript", "JavaScript", "React"],
        difficulty_level: "Intermediate",
        stars: 92000,
        forks: 30000,
        contributors: 2500,
        github_url: "https://github.com/mui/material-ui",
        url: "https://mui.com/",
        category: "UI Library",
        is_featured: true
      },
      {
        _id: "23",
        name: "Nuxt.js",
        description: "Vue framework for production. Great documentation and welcoming community for contributors.",
        language: ["TypeScript", "JavaScript", "Vue"],
        difficulty_level: "Intermediate",
        stars: 54000,
        forks: 4800,
        contributors: 420,
        github_url: "https://github.com/nuxt/nuxt",
        url: "https://nuxt.com/",
        category: "Framework",
        is_featured: true
      },
      {
        _id: "24",
        name: "Apache Spark",
        description: "Unified analytics engine for big data. Large project with scalable contributions.",
        language: ["Scala", "Python", "Java"],
        difficulty_level: "Advanced",
        stars: 39000,
        forks: 14000,
        contributors: 1800,
        github_url: "https://github.com/apache/spark",
        url: "https://spark.apache.org/",
        category: "Big Data",
        is_featured: true
      }
    ]
    
    const filtered = difficulty 
      ? sampleData.filter(p => p.difficulty_level === difficulty)
      : sampleData
    setProjects(filtered)
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
