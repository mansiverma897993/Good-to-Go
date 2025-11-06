import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary/80 to-accent text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-8 text-white/90">
          Join thousands of developers finding their perfect open source opportunity on gtg
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/explore">
            <Button size="lg" className="bg-white hover:bg-white/90 text-primary w-full sm:w-auto font-semibold">
              Start Exploring
            </Button>
          </Link>
          <Link href="/learning">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
            >
              Learn Contribution Guide
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
