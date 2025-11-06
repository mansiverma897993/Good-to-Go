"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { usePrograms } from "@/hooks/use-programs"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const programColors: Record<string, string> = {
  GSOC: "bg-blue-100 text-blue-900",
  SWOC: "bg-cyan-100 text-cyan-900",
  Hacktoberfest: "bg-orange-100 text-orange-900",
  GSSOC: "bg-pink-100 text-pink-900",
  "Summer of Bitcoin": "bg-yellow-100 text-yellow-900",
  Outreachy: "bg-purple-100 text-purple-900",
}

export function Programs() {
  const { programs, isLoading } = usePrograms()

  return (
    <section className="py-20 px-6 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Programs</h2>
          <p className="text-lg text-foreground/60">Join these incredible open source initiatives</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-32 w-full" />
                </div>
              ))
            : programs.map((program) => (
                <Card key={program.id} className="glow-border bg-white hover:shadow-lg transition flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={`${programColors[program.type] || "bg-gray-100 text-gray-900"} border-0`}>
                        {program.type}
                      </Badge>
                      <span className="text-xs text-foreground/50">
                        {new Date(program.start_date).toLocaleDateString()} -{" "}
                        {new Date(program.end_date).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-foreground/75">{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-foreground/60 text-sm mb-3">{program.description}</p>
                    <p className="text-xs text-primary font-semibold mb-4">
                      {program.participants.toLocaleString()} participants
                    </p>
                    <Link href={`/programs/${program.id}`} className="w-full mt-auto">
                      <Button className="w-full bg-transparent" variant="outline">
                        View Projects
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  )
}
