"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Users, Lightbulb } from "lucide-react"

interface Category {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  count: number
}

interface LearningCategoriesProps {
  onCategoryChange?: (category: string) => void
}

const categories: Category[] = [
  {
    id: "Getting Started",
    name: "Getting Started",
    description: "Begin your open source journey",
    icon: <Lightbulb className="w-5 h-5" />,
    count: 3,
  },
  {
    id: "Git & GitHub",
    name: "Git & GitHub",
    description: "Master version control basics",
    icon: <Code className="w-5 h-5" />,
    count: 3,
  },
  {
    id: "Contributing",
    name: "Contributing",
    description: "Learn to contribute effectively",
    icon: <Users className="w-5 h-5" />,
    count: 2,
  },
  {
    id: "Best Practices",
    name: "Best Practices",
    description: "Follow industry standards",
    icon: <BookOpen className="w-5 h-5" />,
    count: 2,
  },
]

export function LearningCategories({ onCategoryChange }: LearningCategoriesProps) {
  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Categories</h2>
        <p className="text-xs text-muted-foreground">Select a learning path</p>
      </div>

      <div className="space-y-3">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onCategoryChange?.(category.id)}
          >
            <div className="flex items-start gap-3">
              <div className="text-primary mt-1">{category.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{category.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                <p className="text-xs font-medium text-primary mt-2">{category.count} guides</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full bg-transparent">
        View All Guides
      </Button>
    </div>
  )
}
