"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Folder, BookOpen, Settings, LogOut } from "lucide-react"
import { useAuth } from "@/context/auth-context"

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  badge?: number
}

interface AdminSidebarProps {
  activeNav: string
  onNavChange: (nav: string) => void
}

export function AdminSidebar({ activeNav, onNavChange }: AdminSidebarProps) {
  const { logout } = useAuth()

  const navItems: NavItem[] = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <Folder className="w-5 h-5" /> },
    { id: "programs", label: "Programs", icon: <BookOpen className="w-5 h-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ]

  return (
    <div className="w-64 border-r border-border bg-card/50 p-6 flex flex-col h-[calc(100vh-4rem)]">
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">Admin Panel</h2>
        <p className="text-xs text-muted-foreground">Manage projects & programs</p>
      </div>

      <nav className="space-y-2 flex-1">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeNav === item.id ? "default" : "ghost"}
            className="w-full justify-start gap-3"
            onClick={() => onNavChange(item.id)}
          >
            {item.icon}
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <Badge variant="secondary" className="text-xs">
                {item.badge}
              </Badge>
            )}
          </Button>
        ))}
      </nav>

      <Button
        variant="outline"
        className="w-full justify-start gap-3 text-red-500 hover:text-red-600 bg-transparent"
        onClick={logout}
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </Button>
    </div>
  )
}
