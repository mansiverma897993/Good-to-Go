"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminContent } from "@/components/admin-content"
import { Footer } from "@/components/footer"
import { useAuth } from "@/context/auth-context"
import { Card } from "@/components/ui/card"

export default function AdminPage() {
  const [activeNav, setActiveNav] = useState("dashboard")
  const [activeTab, setActiveTab] = useState("dashboard")
  const { user } = useAuth()

  if (!user) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 flex items-center justify-center px-4">
          <Card className="p-8 text-center max-w-md">
            <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
            <p className="text-muted-foreground">Please sign in to access the admin dashboard.</p>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 flex min-h-screen">
        <AdminSidebar activeNav={activeNav} onNavChange={setActiveNav} />
        <div className="flex-1">
          <AdminContent activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
