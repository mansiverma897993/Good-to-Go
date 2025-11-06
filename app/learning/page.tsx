"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { LearningCategories } from "@/components/learning-categories"
import { GuidesList } from "@/components/guides-list"
import { Footer } from "@/components/footer"

export default function LearningPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-2">Learning Resources</h1>
            <p className="text-muted-foreground text-lg">
              Master open source contribution through comprehensive guides and documentation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <LearningCategories onCategoryChange={setSelectedCategory} />
            <div className="lg:col-span-3">
              <GuidesList category={selectedCategory} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
