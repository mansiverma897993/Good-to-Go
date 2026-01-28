import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4 text-foreground">About gtg</h3>
            <p className="text-sm text-foreground/60">
              Your one-stop destination for open source opportunities and learning resources.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/discover" className="text-foreground/60 hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-foreground/60 hover:text-primary">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/issues" className="text-foreground/60 hover:text-primary">
                  Issues
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guide" className="text-foreground/60 hover:text-primary">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/git-guide" className="text-foreground/60 hover:text-primary">
                  Git Commands
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-foreground/60 hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60 gap-4">
          <div>
            <p>&copy; 2025 gtg - Good To Go. All rights reserved.</p>
            <p className="mt-2 text-xs text-foreground/50">💜 Made by <span className="font-semibold text-primary">MAN$I VERMA</span></p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
