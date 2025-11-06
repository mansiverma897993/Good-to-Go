"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Clock, User, ArrowRight } from "lucide-react"
import { useGuides } from "@/hooks/use-guides"
import Link from "next/link"

interface Guide {
  id: string
  title: string
  description: string
  category: string
  difficulty: string
  readTime: number
  author: string
  updated: string
  content: string
}

interface GuidesListProps {
  category?: string
}

const guides: Guide[] = [
  {
    id: "1",
    title: "Your First Open Source Contribution",
    description: "A beginner-friendly guide to making your first pull request to an open source project.",
    category: "Getting Started",
    difficulty: "Beginner",
    readTime: 12,
    author: "Sarah Chen",
    updated: "2025-01-15",
    content: "Learn how to find issues, fork repositories, and make meaningful contributions...",
  },
  {
    id: "2",
    title: "Understanding Git & GitHub Workflows",
    description: "Deep dive into git commands and GitHub workflows every contributor should know.",
    category: "Git & GitHub",
    difficulty: "Beginner",
    readTime: 18,
    author: "Marcus Williams",
    updated: "2025-01-10",
    content: "Understand branches, commits, merges, and collaborative workflows...",
  },
  {
    id: "3",
    title: "Code Review Best Practices",
    description: "Master the art of giving and receiving constructive code reviews.",
    category: "Best Practices",
    difficulty: "Intermediate",
    readTime: 15,
    author: "Elena Rodriguez",
    updated: "2025-01-08",
    content: "Learn how to write meaningful reviews and improve code quality...",
  },
  {
    id: "4",
    title: "Working with Open Source Communities",
    description: "Build relationships and communicate effectively in open source projects.",
    category: "Contributing",
    difficulty: "Intermediate",
    readTime: 14,
    author: "James Park",
    updated: "2025-01-05",
    content: "Navigate community norms, communication channels, and collaboration patterns...",
  },
  {
    id: "5",
    title: "Setting Up Your Development Environment",
    description: "Configure your local machine for contributing to various project types.",
    category: "Getting Started",
    difficulty: "Beginner",
    readTime: 20,
    author: "Alex Kumar",
    updated: "2025-01-03",
    content: "Step-by-step setup guides for Node.js, Python, Go, and more projects...",
  },
  {
    id: "6",
    title: "Advanced Git Techniques",
    description: "Master rebasing, cherry-picking, and other advanced git workflows.",
    category: "Git & GitHub",
    difficulty: "Advanced",
    readTime: 25,
    author: "David Lee",
    updated: "2024-12-28",
    content: "Learn professional-grade git strategies used by maintainers...",
  },
]

export function GuidesList({ category }: GuidesListProps) {
  const { guides, isLoading } = useGuides(category)

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{guides.length} guides available</p>
      </div>

      <div className="space-y-4">
        {guides.map((guide) => (
          <Card key={guide.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{guide.title}</h3>
                  <Badge>{guide.difficulty}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-4 pb-4 border-b border-border">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{guide.readTime} min read</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{guide.author}</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {guide.category}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{guide.content}</p>

            <Link href={`/guides/${guide.id}`}>
              <Button variant="ghost" className="gap-2 text-primary">
                Read Guide
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      {guides.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No guides found in this category.</p>
        </Card>
      )}
    </div>
  )
}
