"use client"

import { Button } from "@/components/ui/button"
import { Github, Award, Calendar } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import { useUser } from "@/hooks/use-user"

export function ProfileHeader() {
  const { user: authUser } = useAuth()
  const { user } = useUser(authUser?.id || "")

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const displayUser = user || authUser

  if (!displayUser) {
    return (
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground">Please sign in to view your profile</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
          <img
            src={displayUser.avatar || "/placeholder-user.jpg"}
            alt={displayUser.name}
            className="w-24 h-24 rounded-full bg-primary/20 border-4 border-primary"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{displayUser.name}</h1>
            <p className="text-muted-foreground mb-4">{displayUser.bio || "Open source enthusiast"}</p>

            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4" />
                <span>{displayUser.contributions_count} contributions</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Joined {new Date(displayUser.created_at).toLocaleDateString()}</span>
              </div>
            </div>

            {displayUser.github_username && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://github.com/${displayUser.github_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            )}
          </div>

          <Button variant="default" size="lg">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  )
}
