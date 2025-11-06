"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import useSWR from "swr"
import type { Project } from "@/lib/types"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface ProjectGridProps {
  search?: string
  category?: string
  program?: string
}

export function ProjectGrid({ search = "", category = "", program = "" }: ProjectGridProps) {
  let url = "/api/projects"
  const params = new URLSearchParams()

  if (search && search.includes(",")) {
    // Skills-based search
    params.append("skills", search)
  } else if (search) {
    params.append("q", search)
  }

  if (category) params.append("category", category)
  if (program) params.append("program", program)

  if (params.toString()) {
    url += `?${params.toString()}`
  }

  const { data, error, isLoading } = useSWR<Project[]>(url, fetcher, {
    revalidateOnFocus: false,
  })

  const projects = data || []

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing {projects.length} projects</p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-64 w-full" />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No projects found. Try adjusting your filters or skills.</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <div className="flex gap-2">
                    {project.program_id && (
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        {project.program_id.toUpperCase()}
                      </Badge>
                    )}
                    <Badge variant="secondary">{project.difficulty_level}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.language.map((lang) => (
                  <Badge key={lang} variant="outline" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-border mb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Stars</p>
                  <p className="font-semibold">{(project.stars / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Issues</p>
                  <p className="font-semibold">{project.contributors}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Contributors</p>
                  <p className="font-semibold">{project.forks}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button asChild variant="default" className="flex-1">
                  <a href={`https://github.com/${project.github_url}`} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
