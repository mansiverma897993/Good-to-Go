"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, BookOpen, Target, Settings } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import { useUserBookmarks, useUserContributions } from "@/hooks/use-user"

export function ProfileContent() {
  const [activeTab, setActiveTab] = useState("activity")
  const { user: authUser } = useAuth()
  const { bookmarks, isLoading: bookmarksLoading } = useUserBookmarks(authUser?.id || "")
  const { contributions, isLoading: contributionsLoading } = useUserContributions(authUser?.id || "")

  if (!authUser) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Please sign in to view profile details</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="contributions">Contributions</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          </TabsList>

          <TabsContent value="activity" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {contributions.slice(0, 5).map((contrib, idx) => (
                  <div key={idx} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        contrib.status === "Merged"
                          ? "bg-green-500"
                          : contrib.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-primary"
                      } mt-2 flex-shrink-0`}
                    />
                    <div>
                      <p className="font-medium text-sm">
                        {contrib.contribution_type} in <span className="text-primary">Project</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {contrib.status} · {new Date(contrib.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
                {contributions.length === 0 && <p className="text-sm text-muted-foreground">No recent activity yet</p>}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="contributions" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Contribution Statistics</h3>
              {contributionsLoading ? (
                <Skeleton className="h-32 w-full" />
              ) : (
                <>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{contributions.length}</p>
                      <p className="text-xs text-muted-foreground mt-1">Total</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">
                        {contributions.filter((c) => c.status === "Merged").length}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Merged</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-500">
                        {contributions.filter((c) => c.contribution_type === "Pull Request").length}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">PRs</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium text-sm">Contribution Types</p>
                      <p className="text-sm text-muted-foreground">
                        {Array.from(new Set(contributions.map((c) => c.contribution_type))).join(", ") || "None yet"}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="bookmarks" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Saved Resources</h3>
              {bookmarksLoading ? (
                <Skeleton className="h-32 w-full" />
              ) : bookmarks.length > 0 ? (
                <div className="space-y-3">
                  {bookmarks.map((bookmark) => (
                    <div
                      key={bookmark.id}
                      className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-sm">{bookmark.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">Issue · Open Source</p>
                        </div>
                        <Heart className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No bookmarks yet</p>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {authUser.skills && authUser.skills.length > 0 ? (
              authUser.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)
            ) : (
              <p className="text-xs text-muted-foreground">No skills added yet</p>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Interests</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {authUser.interests && authUser.interests.length > 0 ? (
              authUser.interests.map((interest) => <Badge key={interest}>{interest}</Badge>)
            ) : (
              <p className="text-xs text-muted-foreground">No interests added yet</p>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Preferences</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between">
              <span>Email notifications</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </li>
            <li className="flex items-center justify-between">
              <span>Show profile publicly</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
