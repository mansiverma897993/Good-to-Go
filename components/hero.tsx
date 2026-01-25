import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={0.1}>
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">Open Source Made Easy</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Find Your First <span className="gradient-text">Open Source</span> Contribution
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl text-foreground/60 mb-8 text-balance max-w-2xl mx-auto">
            Discover GSOC, SWOC, Hacktoberfest, and 100+ other opportunities in one place. Filter by skills, find issues
            matching your level, and learn how to contribute.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/explore">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                Start Exploring
              </Button>
            </Link>
            <Link href="/guides">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 text-primary w-full sm:w-auto bg-transparent"
              >
                Learn Contribution Guide
              </Button>
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <StaggerItem>
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-foreground/60">Open Source Projects</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-foreground/60">Good First Issues</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-foreground/60">Learning Resources</div>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
