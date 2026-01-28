"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { usePrograms } from "@/hooks/use-programs"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem, Floating } from "@/components/animations"
import { Calendar, Users, Trophy } from "lucide-react"

const programColors: Record<string, string> = {
  GSOC: "bg-blue-100 text-blue-900",
  SWOC: "bg-cyan-100 text-cyan-900",
  Hacktoberfest: "bg-orange-100 text-orange-900",
  GSSOC: "bg-pink-100 text-pink-900",
  "Summer of Bitcoin": "bg-yellow-100 text-yellow-900",
  Outreachy: "bg-purple-100 text-purple-900",
}

const programDescriptions: Record<string, string> = {
  GSOC: "Google Summer of Code - A global program focused on bringing more student developers into open source software development",
  SWOC: "Script Winter of Code - An open source initiative to encourage developers to contribute to open source projects",
  Hacktoberfest: "Digital Ocean Hacktoberfest - A month-long celebration of open source software run by Digital Ocean",
  GSSOC: "Girl Script Summer of Code - A program encouraging women to participate in open source development",
  "Summer of Bitcoin": "An educational summer program focused on Bitcoin and cryptocurrency open source projects",
  Outreachy: "Outreachy - Provides internships to work in open source and free software",
}

export function Programs() {
  const { programs, isLoading } = usePrograms()

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">🏆 Featured Programs</h2>
            <p className="text-lg text-foreground/60">Join these incredible open source initiatives and make a real impact</p>
            <p className="text-base text-foreground/50 mt-2">Build your portfolio while contributing to projects used by millions worldwide</p>
            <p className="text-base text-foreground/50">Get mentorship, recognition, and potentially earn rewards through these prestigious programs</p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full rounded-lg" />
                  </div>
                ))
              : programs.map((program, index) => (
                  <StaggerItem key={program.id}>
                    <Floating delay={index * 0.1}>
                      <Card className="glow-border bg-gradient-to-br from-white to-primary/5 dark:from-slate-900 dark:to-primary/10 hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-primary/10 hover:border-primary/30">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between mb-3 gap-2">
                            <Badge className={`${programColors[program.type] || "bg-gray-100 text-gray-900"} border-0 text-xs font-semibold`}>
                              {program.type}
                            </Badge>
                            <Trophy className="w-4 h-4 text-amber-500" />
                          </div>
                          <CardTitle className="text-lg font-bold text-foreground mb-2">{program.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-grow gap-3">
                          {/* Description with fallback */}
                          <p className="text-foreground/70 text-sm leading-relaxed">
                            {programDescriptions[program.type] || program.description}
                          </p>
                          
                          {/* Program Stats */}
                          <div className="space-y-2 py-3 border-y border-primary/10">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span className="text-foreground/60">
                                {new Date(program.start_date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} - {new Date(program.end_date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="w-4 h-4 text-primary" />
                              <span className="text-foreground/60 font-medium">
                                {program.participants.toLocaleString()} developers
                              </span>
                            </div>
                          </div>

                          {/* Call to Action */}
                          <Link href={`/programs/${program.id}`} className="w-full mt-auto">
                            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold transition-all duration-300 transform hover:scale-105">
                              View Projects →
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </Floating>
                  </StaggerItem>
                ))}
          </div>
        </StaggerContainer>

        {/* Additional Info */}
        <FadeIn delay={0.3}>
          <div className="mt-8 pt-8 border-t border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">✨ Beginner Friendly</div>
                <p className="text-foreground/60">Programs designed for developers new to open source</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">💰 Opportunities</div>
                <p className="text-foreground/60">Earn while learning from industry-leading organizations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">🌍 Global Community</div>
                <p className="text-foreground/60">Connect with thousands of developers worldwide</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
