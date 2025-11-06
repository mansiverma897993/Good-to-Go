"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"

export function NavBar() {
  const { user, logout } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl gradient-text">
          gtg
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-sm hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/learning" className="text-sm hover:text-primary transition-colors">
            Learn
          </Link>
          <Link href="/issues" className="text-sm hover:text-primary transition-colors">
            Issues
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link href="/profile">Profile</Link>
              </Button>
              <Button variant="outline" size="sm" onClick={logout} className="bg-transparent">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/auth/register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
