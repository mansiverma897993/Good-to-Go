"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface ProjectFiltersProps {
  onSearchChange?: (search: string) => void
  onCategoryChange?: (category: string) => void
}

export function ProjectFilters({ onSearchChange, onCategoryChange }: ProjectFiltersProps) {
  const [categories, setCategories] = useState<string[]>([])
  const [difficulty, setDifficulty] = useState<string[]>([])

  const categoryOptions = ["Frontend", "Backend", "Full Stack", "DevOps", "Security", "Mobile"]
  const difficultyOptions = ["Beginner", "Intermediate", "Advanced"]

  const toggleCategory = (category: string) => {
    const updated = categories.includes(category) ? categories.filter((c) => c !== category) : [...categories, category]
    setCategories(updated)
    // Only use first selected category for filtering
    onCategoryChange?.(updated[0] || "")
  }

  const toggleFilter = (value: string, state: string[], setState: (values: string[]) => void) => {
    setState(state.includes(value) ? state.filter((v) => v !== value) : [...state, value])
  }

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categoryOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`cat-${option}`}
                checked={categories.includes(option)}
                onCheckedChange={() => toggleCategory(option)}
              />
              <label htmlFor={`cat-${option}`} className="text-sm cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-3">Difficulty</h3>
        <div className="space-y-2">
          {difficultyOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`diff-${option}`}
                checked={difficulty.includes(option)}
                onCheckedChange={() => toggleFilter(option, difficulty, setDifficulty)}
              />
              <label htmlFor={`diff-${option}`} className="text-sm cursor-pointer">
                {option}
              </label>
            </div>
          ))}
        </div>
      </Card>

      <Button variant="outline" className="w-full bg-transparent">
        Clear Filters
      </Button>
    </div>
  )
}
