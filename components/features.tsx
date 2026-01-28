import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Filter, BookOpen, GitBranch, Search, MapPin } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

const features = [
  {
    icon: MapPin,
    title: "Aggregated Opportunities",
    description: "GSOC, SWOC, Hacktoberfest, GSSOC, Summer of Bitcoin and 50+ more programs in one place",
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Filter by skills, difficulty level (Good First Issue, Bug, Feature), and tech stack",
  },
  {
    icon: Search,
    title: "Issue Discovery",
    description: "Find open issues that match your expertise and learning goals instantly",
  },
  {
    icon: BookOpen,
    title: "Learning Guides",
    description: "Complete documentation and guides on Git, GitHub, and open source contribution",
  },
  {
    icon: GitBranch,
    title: "Git Commands",
    description: "Step-by-step Git and GitHub commands with real examples for beginners",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with other contributors and mentors in the open source community",
  },
]

export function Features() {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Everything You Need</h2>
            <p className="text-lg text-foreground/60">All the tools and resources to start your open source journey</p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <StaggerItem key={idx}>
                  <div className="relative group">
                    {/* Animated border wrapper */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur animate-pulse"></div>
                    
                    <Card className="relative bg-white dark:bg-slate-900 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <CardHeader>
                        <Icon className="w-8 h-8 text-primary mb-2" />
                        <CardTitle className="text-foreground">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/60">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </StaggerItem>
              )
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
