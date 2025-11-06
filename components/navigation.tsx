"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GtgLogo } from "@/components/gtg-logo"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
          <GtgLogo />
          <span className="gradient-text">gtg</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-sm hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/explore" className="text-sm hover:text-primary transition-colors">
            Explore
          </Link>
          <Link href="/learning" className="text-sm hover:text-primary transition-colors">
            Learn
          </Link>
          <Link href="/issues" className="text-sm hover:text-primary transition-colors">
            Issues
          </Link>
        </div>

        <Button asChild variant="default">
          <Link href="/explore">Start Exploring</Link>
        </Button>
      </div>
    </nav>
  )
}
