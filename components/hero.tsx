import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
          <span className="text-sm font-medium text-primary">Open Source Made Easy</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Find Your First <span className="gradient-text">Open Source</span> Contribution
        </h1>

        <p className="text-xl text-foreground/60 mb-8 text-balance max-w-2xl mx-auto">
          Discover GSOC, SWOC, Hacktoberfest, and 100+ other opportunities in one place. Filter by skills, find issues
          matching your level, and learn how to contribute.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/discover">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              Start Exploring
            </Button>
          </Link>
          <Link href="/learn">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 text-primary w-full sm:w-auto bg-transparent"
            >
              Learn Contribution Guide
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          <div className="glass-effect p-4 rounded-lg">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-foreground/60">Open Source Projects</div>
          </div>
          <div className="glass-effect p-4 rounded-lg">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-sm text-foreground/60">Good First Issues</div>
          </div>
          <div className="glass-effect p-4 rounded-lg">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-foreground/60">Learning Resources</div>
          </div>
        </div>
      </div>
    </section>
  )
}
