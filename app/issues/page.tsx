"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { issueService } from "@/lib/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink } from "lucide-react"

interface Issue {
  _id: string;
  title: string;
  description: string;
  difficulty: string;
  status: string;
  labels: string[];
  comments_count: number;
  reactions_count: number;
  required_skills: string[];
  project_id: any;
}

export default function IssuesPage() {
  const [issues, setIssues] = useState<Issue[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [difficulty, setDifficulty] = useState("")

  useEffect(() => {
    loadIssues()
  }, [difficulty])

  const loadIssues = async () => {
    try {
      setLoading(true)
      const filters = difficulty ? { difficulty } : {}
      const data = await issueService.getAll(filters)
      setIssues(data)
      setError(null)
    } catch (err: any) {
      setError(err.message || "Failed to load issues")
      console.error("Error loading issues:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (query: string) => {
    setSearch(query)
    if (query.length > 2) {
      try {
        const data = await issueService.search(query)
        setIssues(data)
      } catch (err) {
        console.error("Search error:", err)
      }
    } else if (query.length === 0) {
      loadIssues()
    }
  }

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Good First Issue":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Bug":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "Feature":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Documentation":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "Help Wanted":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800"
      case "In Progress":
        return "bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800"
      case "Closed":
        return "bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-800"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <FadeIn>
          <section className="px-6 py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold mb-4">Issues</h1>
              <p className="text-xl text-foreground/60">
                Find and work on open issues from great projects
              </p>
            </div>
          </section>
        </FadeIn>

        <section className="px-6 py-12 max-w-6xl mx-auto">
          {/* Search and Filters */}
          <FadeIn delay={0.2}>
            <div className="mb-8 space-y-4">
              <Input
                placeholder="Search issues..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full"
              />
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={difficulty === "" ? "default" : "outline"}
                  onClick={() => setDifficulty("")}
                >
                  All Types
                </Button>
                <Button
                  variant={difficulty === "Good First Issue" ? "default" : "outline"}
                  onClick={() => setDifficulty("Good First Issue")}
                >
                  Good First Issue
                </Button>
                <Button
                  variant={difficulty === "Bug" ? "default" : "outline"}
                  onClick={() => setDifficulty("Bug")}
                >
                  Bug
                </Button>
                <Button
                  variant={difficulty === "Feature" ? "default" : "outline"}
                  onClick={() => setDifficulty("Feature")}
                >
                  Feature
                </Button>
                <Button
                  variant={difficulty === "Documentation" ? "default" : "outline"}
                  onClick={() => setDifficulty("Documentation")}
                >
                  Documentation
                </Button>
              </div>
            </div>
          </FadeIn>

          {error && (
            <FadeIn>
              <Card className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
                <CardContent className="pt-6">
                  <p className="text-red-700 dark:text-red-300">{error}</p>
                </CardContent>
              </Card>
            </FadeIn>
          )}

          {loading ? (
            <div className="text-center py-20">
              <p className="text-foreground/60">Loading issues...</p>
            </div>
          ) : issues.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground/60">No issues found</p>
            </div>
          ) : (
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid gap-4">
                {issues.map((issue) => (
                  <StaggerItem key={issue._id}>
                    <Card className={`hover:shadow-lg transition-shadow ${getStatusColor(issue.status)}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">
                              {issue.title}
                            </CardTitle>
                            <p className="text-foreground/60 text-sm mb-3">
                              {issue.description}
                            </p>
                          </div>
                          <Badge className={getDifficultyColor(issue.difficulty)}>
                            {issue.difficulty}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-3">
                          {/* Labels */}
                          {issue.labels.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {issue.labels.map((label) => (
                                <Badge key={label} variant="secondary" className="text-xs">
                                  {label}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {/* Skills */}
                          {issue.required_skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {issue.required_skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {/* Metadata */}
                          <div className="flex gap-4 text-xs text-foreground/60 pt-2">
                            <span>Status: {issue.status}</span>
                            <span>💬 {issue.comments_count} comments</span>
                            <span>😊 {issue.reactions_count} reactions</span>
                          </div>

                          {/* Project */}
                          {issue.project_id && (
                            <div className="text-xs text-foreground/60">
                              Project: <span className="font-medium">{issue.project_id.name}</span>
                            </div>
                          )}
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
