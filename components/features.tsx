import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Filter, BookOpen, GitBranch, Search, MapPin } from "lucide-react"

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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-lg text-foreground/60">All the tools and resources to start your open source journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="glow-border bg-white">
                <CardHeader>
                  <Icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
