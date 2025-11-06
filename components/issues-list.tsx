"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { MessageCircle, GitPullRequest, Star } from "lucide-react"
import { useIssues } from "@/hooks/use-issues"

interface IssuesListProps {
  search?: string
  difficulty?: string
  labels?: string[]
}

interface Issue {
  id: string
  title: string
  description: string
  project: string
  labels: string[]
  difficulty: string
  comments_count: number
  reactions_count: number
  url: string
  created_at: string
}

const difficultyColors: Record<string, string> = {
  "Good First Issue": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Bug: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  Feature: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Documentation: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Help Wanted": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
}

export function IssuesList({ search, difficulty, labels }: IssuesListProps) {
  const { issues, isLoading } = useIssues(
    search,
    difficulty,
    labels?.[0], // Use first label for filtering
  )

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Showing {issues.length} issues</p>
      </div>

      <div className="space-y-3">
        {issues.map((issue) => (
          <Card key={issue.id} className="p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-base leading-tight">{issue.title}</h3>
                  <Badge className={difficultyColors[issue.difficulty] || "bg-gray-100 text-gray-800"}>
                    {issue.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{issue.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="text-xs">
                Issue
              </Badge>
              {issue.labels.map((label) => (
                <Badge key={label} variant="secondary" className="text-xs">
                  {label}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{issue.comments_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{issue.reactions_count}</span>
                </div>
                <span>{new Date(issue.created_at).toLocaleDateString()}</span>
              </div>
              <Button asChild variant="default" size="sm">
                <a href={issue.url} target="_blank" rel="noopener noreferrer">
                  <GitPullRequest className="w-4 h-4 mr-1" />
                  View
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {issues.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No issues found. Try adjusting your filters.</p>
        </Card>
      )}
    </div>
  )
}
