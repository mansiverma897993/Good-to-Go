"use client"

import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import type { Guide } from "@/lib/types"

export default function GuidePage() {
  const params = useParams()
  const router = useRouter()
  const guideId = params.id as string
  const [guide, setGuide] = useState<Guide | null>(null)

  useEffect(() => {
    const fetchGuide = async () => {
      const res = await fetch(`/api/guides/${guideId}`)
      if (res.ok) {
        const data = await res.json()
        setGuide(data)
      }
    }
    fetchGuide()
  }, [guideId])

  if (!guide) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 text-center py-20">
          <p className="text-muted-foreground">Loading guide...</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <Button variant="ghost" className="mb-8 gap-2" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Button>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-8">
              <Badge className="mb-4">{guide.category}</Badge>
              <h1 className="text-4xl font-bold gradient-text mb-4">{guide.title}</h1>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pb-6 border-b">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{guide.read_time} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By {guide.author}</span>
                </div>
                <Badge variant="outline">{guide.difficulty}</Badge>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              {guide.id === "git-github" && (
                <>
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Understanding Git & GitHub Workflows</h2>
                    <p className="text-foreground/80 mb-4">
                      Git and GitHub are essential tools for any open source contributor. This guide covers everything
                      you need to know to work effectively with version control.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">What is Git?</h3>
                    <p className="text-foreground/80 mb-4">
                      Git is a distributed version control system that tracks changes in your code. It allows multiple
                      developers to work on the same project without conflicts.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Essential Git Commands</h3>
                    <div className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                      <pre className="text-sm">
                        <code>{`# Clone a repository
git clone https://github.com/username/repository.git

# Navigate to directory
cd repository

# Check git status
git status

# Create a new branch
git checkout -b feature/your-feature-name

# Or create and switch to new branch
git switch -c feature/your-feature-name

# Add changes to staging area
git add .
git add specific-file.js

# Commit changes with message
git commit -m "feat: add new feature"
git commit -m "fix: resolve bug in auth"

# View commit history
git log
git log --oneline

# Push branch to remote
git push origin feature/your-feature-name

# Pull latest changes
git pull origin main
git pull upstream main

# Fetch without merging
git fetch origin
git fetch upstream

# Merge branches
git merge feature/your-feature-name

# Rebase for clean history
git rebase main
git rebase -i HEAD~3

# View differences
git diff
git diff main..feature/your-feature-name

# Undo changes
git reset HEAD file.js
git checkout -- file.js
git revert commit-hash`}</code>
                      </pre>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 mt-6">GitHub Workflow for Contributing</h3>

                    <h4 className="text-lg font-semibold mb-2 mt-4">1. Fork the Repository</h4>
                    <p className="text-foreground/80 mb-2">Click the "Fork" button on the GitHub project page.</p>
                    <div className="bg-muted p-3 rounded mb-4">
                      <code className="text-sm">Your fork URL: https://github.com/YOUR_USERNAME/project.git</code>
                    </div>

                    <h4 className="text-lg font-semibold mb-2 mt-4">2. Clone Your Fork</h4>
                    <div className="bg-muted p-3 rounded mb-4">
                      <pre className="text-sm">
                        <code>{`git clone https://github.com/YOUR_USERNAME/project.git
cd project`}</code>
                      </pre>
                    </div>

                    <h4 className="text-lg font-semibold mb-2 mt-4">3. Add Upstream Remote</h4>
                    <p className="text-foreground/80 mb-2">Keep your fork synced with the original repository.</p>
                    <div className="bg-muted p-3 rounded mb-4">
                      <pre className="text-sm">
                        <code>{`git remote add upstream https://github.com/ORIGINAL_OWNER/project.git
git remote -v`}</code>
                      </pre>
                    </div>

                    <h4 className="text-lg font-semibold mb-2 mt-4">4. Create Feature Branch</h4>
                    <div className="bg-muted p-3 rounded mb-4">
                      <pre className="text-sm">
                        <code>{`git checkout main
git pull upstream main
git checkout -b fix/issue-123`}</code>
                      </pre>
                    </div>

                    <h4 className="text-lg font-semibold mb-2 mt-4">5. Make Changes & Commit</h4>
                    <div className="bg-muted p-3 rounded mb-4">
                      <pre className="text-sm">
                        <code>{`git add .
git commit -m "fix: resolve issue #123"
git commit -m "feat: add support for xyz"
git commit -m "docs: update README with new section"`}</code>
                      </pre>
                    </div>

                    <h4 className="text-lg font-semibold mb-2 mt-4">6. Push to Your Fork</h4>
                    <div className="bg-muted p-3 rounded mb-4">
                      <pre className="text-sm">
                        <code>{`git push origin fix/issue-123`}</code>
                      </pre>
                    </div>

                    <h4 className="text-lg font-semibold mb-2 mt-4">7. Create Pull Request</h4>
                    <p className="text-foreground/80 mb-2">
                      Go to the original repository on GitHub and click "Compare & pull request". Fill in a descriptive
                      title and description.
                    </p>

                    <h4 className="text-lg font-semibold mb-2 mt-4">8. Sync with Upstream</h4>
                    <p className="text-foreground/80 mb-2">If PR gets behind main:</p>
                    <div className="bg-muted p-3 rounded mb-4">
                      <pre className="text-sm">
                        <code>{`git fetch upstream
git rebase upstream/main
git push origin fix/issue-123 --force-with-lease`}</code>
                      </pre>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Common Commit Message Patterns</h3>
                    <div className="bg-muted p-4 rounded mb-4">
                      <pre className="text-sm">
                        <code>{`feat: add new feature
fix: fix a bug
docs: update documentation
style: code style changes (no logic change)
refactor: refactor existing code
perf: improve performance
test: add or update tests
chore: dependency updates
ci: CI/CD configuration changes`}</code>
                      </pre>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Best Practices</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li>Create a new branch for each feature/fix</li>
                      <li>Keep commits small and focused</li>
                      <li>Write clear commit messages</li>
                      <li>Sync with upstream before creating PR</li>
                      <li>Never force push to shared branches</li>
                      <li>Review your own code before submitting PR</li>
                      <li>Respond to code review feedback promptly</li>
                    </ul>
                  </section>
                </>
              )}

              {guide.id === "first-contribution" && (
                <>
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Your First Open Source Contribution</h2>
                    <p className="text-foreground/80 mb-4">
                      Making your first open source contribution can seem intimidating, but with the right guidance,
                      you'll be contributing in no time!
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Step 1: Find a Project</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                      <li>Look for projects with "good-first-issue" label</li>
                      <li>Check repository README for contribution guidelines</li>
                      <li>Start with projects in languages you know</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Step 2: Understand the Project</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                      <li>Read the README thoroughly</li>
                      <li>Check the CONTRIBUTING.md file</li>
                      <li>Review existing issues and PRs</li>
                      <li>Run the project locally</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Step 3: Pick an Issue</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                      <li>Start with beginner-friendly issues</li>
                      <li>Comment on the issue to express interest</li>
                      <li>Ask clarifying questions if needed</li>
                      <li>Check if anyone is already working on it</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Step 4: Set Up Your Environment</h3>
                    <div className="bg-muted p-3 rounded mb-4">
                      <pre className="text-sm">
                        <code>{`# Fork and clone
git clone https://github.com/YOUR_USERNAME/project.git
cd project

# Install dependencies (check docs for your project)
npm install  # for Node.js projects
pip install -r requirements.txt  # for Python
go mod download  # for Go

# Run tests
npm test
python -m pytest`}</code>
                      </pre>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Step 5: Create Your Branch</h3>
                    <div className="bg-muted p-3 rounded mb-4">
                      <pre className="text-sm">
                        <code>{`git checkout -b fix/issue-description
# or
git switch -c fix/issue-description`}</code>
                      </pre>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Step 6: Make Your Changes</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                      <li>Make small, focused changes</li>
                      <li>Test your changes thoroughly</li>
                      <li>Follow project coding style</li>
                      <li>Add tests if applicable</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Step 7: Commit & Push</h3>
                    <div className="bg-muted p-3 rounded mb-4">
                      <pre className="text-sm">
                        <code>{`git add .
git commit -m "fix: resolve issue #123"
git push origin fix/issue-description`}</code>
                      </pre>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Step 8: Submit Pull Request</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                      <li>Provide clear description of changes</li>
                      <li>Link to the issue you fixed</li>
                      <li>Add screenshots if relevant</li>
                      <li>Check CI/CD results</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Step 9: Respond to Feedback</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                      <li>Read reviews carefully</li>
                      <li>Ask for clarification if needed</li>
                      <li>Make requested changes</li>
                      <li>Push updates to same branch</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Congratulations!</h3>
                    <p className="text-foreground/80">
                      Once your PR is merged, you've made your first open source contribution! 🎉
                    </p>
                  </section>
                </>
              )}

              {!["git-github", "first-contribution"].includes(guide.id) && (
                <div className="space-y-4">
                  <p className="text-foreground/80">{guide.content}</p>
                  <p className="text-sm text-muted-foreground">
                    This guide contains comprehensive information about {guide.title.toLowerCase()}. Read carefully and
                    follow the examples to get the most out of it.
                  </p>
                </div>
              )}
            </div>
          </article>

          <div className="mt-12 pt-8 border-t">
            <Button onClick={() => router.push("/learning")} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to All Guides
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
