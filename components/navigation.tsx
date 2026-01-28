"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GtgLogo } from "@/components/gtg-logo"
import { motion } from "framer-motion"

export function Navigation() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background via-primary/10 to-background/90 backdrop-blur-lg border-b border-primary/30 shadow-xl shadow-primary/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
            <GtgLogo />
            <span className="gradient-text">gtg</span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300">
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/projects" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300">
              Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/explore" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300">
              Explore
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/learning" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300">
              Learn
            </Link>
          </motion.div>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/explore">🚀 Start Exploring</Link>
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  )
}
