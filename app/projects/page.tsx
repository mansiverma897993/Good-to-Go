"use client"

import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"
import { ProjectFilters } from "@/components/project-filters"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ProjectsPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-2">Discover Projects</h1>
            <p className="text-muted-foreground">
              Explore open source projects, funding opportunities, and learning resources
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <ProjectFilters onSearchChange={setSearch} onCategoryChange={setCategory} />
            <div className="lg:col-span-3">
              <ProjectGrid search={search} category={category} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
