"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem, FloatingBackground, Floating } from "@/components/animations"

export function Hero() {
  return (
    <section className="relative pt-32 pb-8 px-6 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
      {/* Animated Background */}
      <FloatingBackground />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn delay={0.1}>
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/20 transition-colors duration-300">
            <span className="text-sm font-medium text-primary">✨ Open Source Made Easy</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Find Your First <span className="gradient-text animate-pulse">Open Source</span> Contribution
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl text-foreground/60 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Discover GSOC, SWOC, Hacktoberfest, and 100+ other opportunities in one place. Filter by skills, find issues matching your level, and learn how to contribute.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/explore">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                🚀 Start Exploring
              </Button>
            </Link>
            <Link href="/learning">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 text-primary w-full sm:w-auto bg-transparent hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
              >
                📚 Learn Contribution Guide
              </Button>
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <StaggerItem>
              <Floating delay={0}>
                <div className="glass-effect p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-foreground/60 mt-2">Open Source Projects</div>
                </div>
              </Floating>
            </StaggerItem>
            <StaggerItem>
              <Floating delay={0.3}>
                <div className="glass-effect p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10K+</div>
                  <div className="text-sm text-foreground/60 mt-2">Good First Issues</div>
                </div>
              </Floating>
            </StaggerItem>
            <StaggerItem>
              <Floating delay={0.6}>
                <div className="glass-effect p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">100+</div>
                  <div className="text-sm text-foreground/60 mt-2">Learning Resources</div>
                </div>
              </Floating>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
