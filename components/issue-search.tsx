"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"

interface IssueSearchProps {
  onSearch?: (query: string) => void
  onDifficultyChange?: (difficulty: string) => void
  onLabelChange?: (labels: string[]) => void
}

export function IssueSearch({ onSearch, onDifficultyChange, onLabelChange }: IssueSearchProps) {
  const [filters, setFilters] = useState({
    query: "",
    labels: [] as string[],
    difficulty: "",
    status: "open",
  })

  const commonLabels = ["Good First Issue", "Help Wanted", "Bug", "Feature", "Documentation"]
  const difficulties = ["Beginner", "Intermediate", "Advanced"]

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, query }))
    onSearch?.(query)
  }

  const handleDifficultyChange = (difficulty: string) => {
    setFilters((prev) => ({ ...prev, difficulty }))
    onDifficultyChange?.(difficulty)
  }

  const handleAddLabel = (label: string) => {
    const updated = filters.labels.includes(label)
      ? filters.labels.filter((l) => l !== label)
      : [...filters.labels, label]
    setFilters((prev) => ({ ...prev, labels: updated }))
    onLabelChange?.(updated)
  }

  const handleClearFilters = () => {
    setFilters({
      query: "",
      labels: [],
      difficulty: "",
      status: "open",
    })
    onSearch?.("")
    onDifficultyChange?.("")
    onLabelChange?.([])
  }

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search issues by title, project, or keyword..."
              className="pl-10 h-11"
              value={filters.query}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Difficulty</label>
              <select
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm"
                value={filters.difficulty}
                onChange={(e) => handleDifficultyChange(e.target.value)}
              >
                <option value="">All Difficulties</option>
                {difficulties.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Labels</label>
            <div className="flex flex-wrap gap-2">
              {commonLabels.map((label) => (
                <Badge
                  key={label}
                  variant={filters.labels.includes(label) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleAddLabel(label)}
                >
                  {label}
                </Badge>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full gap-2 bg-transparent" onClick={handleClearFilters}>
            <X className="w-4 h-4" />
            Clear Filters
          </Button>
        </div>
      </Card>
    </div>
  )
}
