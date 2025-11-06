"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { IssueSearch } from "@/components/issue-search"
import { IssuesList } from "@/components/issues-list"
import { Footer } from "@/components/footer"

export default function IssuesPage() {
  const [search, setSearch] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [labels, setLabels] = useState<string[]>([])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-2">Find Issues to Work On</h1>
            <p className="text-muted-foreground">Search and filter open issues across thousands of projects</p>
          </div>

          <div className="mb-8">
            <IssueSearch onSearch={setSearch} onDifficultyChange={setDifficulty} onLabelChange={setLabels} />
          </div>

          <IssuesList search={search} difficulty={difficulty} labels={labels} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
