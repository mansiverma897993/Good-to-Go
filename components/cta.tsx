import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn, PulseAnimation, FloatingBackground } from "@/components/animations"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-primary via-primary/80 to-accent text-primary-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <FloatingBackground />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-32 -right-32 w-64 h-64 bg-white/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn delay={0.1}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              🚀 Ready to Start Your Journey?
            </h2>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.p
            className="text-lg mb-10 text-white/90 max-w-xl mx-auto leading-relaxed"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Join thousands of developers finding their perfect open source opportunity on <span className="font-bold">gtg</span>. Start contributing, building portfolio, and making a real impact in the developer community today!
          </motion.p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PulseAnimation delay={0}>
              <Link href="/explore">
                <Button size="lg" className="bg-white hover:bg-white/90 text-primary w-full sm:w-auto font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  ✨ Start Exploring
                </Button>
              </Link>
            </PulseAnimation>
            <Link href="/learning">
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/20 w-full sm:w-auto bg-transparent font-semibold transition-all duration-300 transform hover:scale-105"
              >
                📚 Learn How to Contribute
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* Stats Animation */}
        <FadeIn delay={0.4}>
          <motion.div
            className="mt-12 pt-8 border-t border-white/20"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div className="flex flex-col sm:flex-row justify-around gap-6 sm:gap-0">
              <div>
                <motion.div
                  className="text-3xl font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: 0 }}
                >
                  5000+
                </motion.div>
                <div className="text-white/80 text-sm mt-1">Active Contributors</div>
              </div>
              <div>
                <motion.div
                  className="text-3xl font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: 0.2 }}
                >
                  500+
                </motion.div>
                <div className="text-white/80 text-sm mt-1">Projects Listed</div>
              </div>
              <div>
                <motion.div
                  className="text-3xl font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: 0.4 }}
                >
                  100+
                </motion.div>
                <div className="text-white/80 text-sm mt-1">Learning Guides</div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
