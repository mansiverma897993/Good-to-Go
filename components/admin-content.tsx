"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Plus, Edit, Trash2, Eye, Search } from "lucide-react"
import { useProjects } from "@/hooks/use-projects"
import { usePrograms } from "@/hooks/use-programs"

interface AdminContentProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  archived: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
}

export function AdminContent({ activeTab, onTabChange }: AdminContentProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const { projects, isLoading: projectsLoading } = useProjects()
  const { programs, isLoading: programsLoading } = usePrograms()

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-border p-6">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your projects and programs</p>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <Tabs value={activeTab} onValueChange={onTabChange}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Total Projects</p>
                <p className="text-3xl font-bold">{projects.length}</p>
              </Card>
              <Card className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Total Programs</p>
                <p className="text-3xl font-bold">{programs.length}</p>
              </Card>
              <Card className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Active Contributors</p>
                <p className="text-3xl font-bold">{projects.reduce((acc, p) => acc + p.contributors, 0)}</p>
              </Card>
              <Card className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Total Issues</p>
                <p className="text-3xl font-bold">{projects.reduce((acc, p) => acc + p.forks, 0)}</p>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-sm">New projects indexed</p>
                    <p className="text-xs text-muted-foreground">{projects.length} projects available</p>
                  </div>
                  <Badge variant="outline">System</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Programs loaded</p>
                    <p className="text-xs text-muted-foreground">{programs.length} programs indexed</p>
                  </div>
                  <Badge variant="outline">System</Badge>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Project
              </Button>
            </div>

            <div className="space-y-3">
              {projectsLoading
                ? Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-20 w-full" />)
                : projects.map((project) => (
                    <Card key={project.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold">{project.name}</h3>
                            <Badge className="bg-green-100 text-green-800">active</Badge>
                          </div>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span>{project.contributors} contributors</span>
                            <span>{project.forks} forks</span>
                            <span>{project.stars} stars</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
            </div>
          </TabsContent>

          <TabsContent value="programs" className="space-y-4">
            <div className="flex gap-3 mb-6">
              <Button className="gap-2 ml-auto">
                <Plus className="w-4 h-4" />
                Add Program
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programsLoading
                ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)
                : programs.map((program) => (
                    <Card key={program.id} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{program.name}</h3>
                          <Badge variant="secondary" className="mt-2">
                            {program.type}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-3">{program.participants} participants</p>
                        <Button variant="outline" className="w-full bg-transparent" size="sm">
                          Manage Program
                        </Button>
                      </div>
                    </Card>
                  ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
