"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { ChevronRight, Book, Code, Users, Lightbulb } from "lucide-react"

interface GuideItem {
  id: string
  title: string
  description: string
  category: string
  readTime: number
  icon: React.ReactNode
  content: string
}

const guides: GuideItem[] = [
  {
    id: "1",
    title: "What is Open Source?",
    description: "Understand the basics of open source software and why contributing matters.",
    category: "Getting Started",
    readTime: 5,
    icon: <Lightbulb className="w-6 h-6" />,
    content: `# What is Open Source?

Open source software is software that anyone can inspect, modify, and distribute.

## Why It Matters

- **Transparency**: Code is visible to everyone
- **Community**: Thousands of developers contribute
- **Freedom**: Users can modify software for their needs
- **Learning**: Great way to improve your skills

## Famous Open Source Projects

- Linux: Operating system
- Firefox: Web browser
- VLC: Media player
- Python: Programming language
- WordPress: Website builder

## How You Benefit

1. **Learn from real code**
2. **Build your portfolio**
3. **Meet other developers**
4. **Get recognized for contributions**
5. **Improve the software you use**

## How to Get Started

1. Find a project you like
2. Read the documentation
3. Look for "good first issue" labels
4. Start small
5. Ask for help when needed
`
  },
  {
    id: "2",
    title: "Getting Started with Git",
    description: "Learn the basics of Git version control system.",
    category: "Git & GitHub",
    readTime: 8,
    icon: <Code className="w-6 h-6" />,
    content: `# Getting Started with Git

Git is a version control system that tracks changes in files.

## Installation

### Windows
- Download from https://git-scm.com/download/win
- Run installer and follow prompts

### macOS
\`\`\`bash
brew install git
\`\`\`

### Linux
\`\`\`bash
sudo apt-get install git
\`\`\`

## First Setup

After installation:
\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
\`\`\`

## Basic Concepts

**Repository**: Folder containing your project
**Commit**: Snapshot of your code
**Branch**: Separate version of your code
**Remote**: Online copy of your repository

## Essential Commands

### Create a repository
\`\`\`bash
git init
\`\`\`

### Clone existing repository
\`\`\`bash
git clone https://github.com/user/project.git
\`\`\`

### Check status
\`\`\`bash
git status
\`\`\`

### Stage changes
\`\`\`bash
git add .
\`\`\`

### Commit changes
\`\`\`bash
git commit -m "Your message here"
\`\`\`

### Push to GitHub
\`\`\`bash
git push origin main
\`\`\`

### Pull latest changes
\`\`\`bash
git pull origin main
\`\`\`

## Next Steps

Practice these commands with a simple project!
`
  },
  {
    id: "3",
    title: "GitHub & Creating Your Account",
    description: "Set up GitHub account and learn the platform.",
    category: "Git & GitHub",
    readTime: 6,
    icon: <Users className="w-6 h-6" />,
    content: `# GitHub & Creating Your Account

GitHub is the most popular platform for hosting Git repositories.

## Create Your Account

1. Go to https://github.com
2. Click "Sign up"
3. Enter email and password
4. Verify email
5. Choose free plan
6. Complete profile

## Profile Setup

- **Add profile picture**: Make yourself recognizable
- **Write bio**: Tell people about yourself
- **Add location**: Optional but helpful
- **Add company**: Optional

## Your GitHub Profile

Your profile shows:
- Repositories you've created
- Contributions you've made
- Stars and followers
- Activity graph

## Important Sections

### Repositories
Projects you've created or forked

### Contributions Graph
Shows your activity level

### Followers
People following your profile

## Getting Help

- GitHub Docs: https://docs.github.com
- Discussions: Talk to community
- Issues: Ask questions

## Security

- Enable 2-factor authentication
- Never share your password
- Use SSH keys for authentication
`
  },
  {
    id: "4",
    title: "Fork, Clone, and Branch",
    description: "Learn the workflow for contributing to projects.",
    category: "Git & GitHub",
    readTime: 10,
    icon: <Code className="w-6 h-6" />,
    content: `# Fork, Clone, and Branch Workflow

This is the standard workflow for contributing to open source.

## Step 1: Fork the Repository

A fork is your personal copy of someone else's repository.

1. Go to the project on GitHub
2. Click "Fork" button (top right)
3. GitHub creates a copy under your account
4. You can now make changes safely

## Step 2: Clone Your Fork

Get the code to your computer:

\`\`\`bash
git clone https://github.com/YOUR-USERNAME/project-name.git
cd project-name
\`\`\`

## Step 3: Add Upstream Remote

Keep your fork updated with original:

\`\`\`bash
git remote add upstream https://github.com/ORIGINAL-OWNER/project.git
\`\`\`

## Step 4: Create a Branch

Create a new branch for your work:

\`\`\`bash
git checkout -b feature/my-new-feature
\`\`\`

Branch naming:
- \`feature/\` for new features
- \`fix/\` for bug fixes
- \`docs/\` for documentation

## Step 5: Make Changes

Edit files as needed:

\`\`\`bash
# Check what changed
git status

# See changes
git diff
\`\`\`

## Step 6: Commit Your Work

\`\`\`bash
git add .
git commit -m "feat: add my new feature"
\`\`\`

## Step 7: Push to Your Fork

\`\`\`bash
git push origin feature/my-new-feature
\`\`\`

## Step 8: Create Pull Request

1. Go to original repository
2. You'll see a "Compare & Pull Request" button
3. Click it
4. Write description
5. Click "Create Pull Request"

## Step 9: Respond to Feedback

- Read reviewer comments
- Make requested changes
- Push new commits
- Reviewers will re-check

## Common Commands

\`\`\`bash
# Update your branch
git fetch upstream
git rebase upstream/main

# List branches
git branch -a

# Switch branch
git checkout main

# Delete branch
git branch -d feature/name
\`\`\`
`
  },
  {
    id: "5",
    title: "Finding Your First Issue",
    description: "How to find beginner-friendly issues to work on.",
    category: "Getting Started",
    readTime: 7,
    icon: <Lightbulb className="w-6 h-6" />,
    content: `# Finding Your First Issue

Starting with the right issue makes all the difference!

## Where to Look for Issues

### GitHub Issue Labels

Projects use labels to categorize issues:
- \`good first issue\`: Perfect for beginners
- \`beginner-friendly\`: Welcoming to new contributors
- \`help wanted\`: Project needs help
- \`documentation\`: Help with docs
- \`easy\`: Simple to fix

### Popular Resources

1. **First Timers Only**
   - Website: https://www.firsttimersonly.com/
   - Curated beginner issues

2. **Awesome For Beginners**
   - GitHub: awesome-for-beginners
   - List of projects welcoming beginners

3. **Good First Issue**
   - Website: goodfirstissue.dev
   - Aggregates beginner issues

4. **Up For Grabs**
   - Website: up-for-grabs.net
   - Issues looking for contributors

## Choosing Your First Issue

### Criteria

✅ **Good Issues:**
- Clear description
- Not too complex
- Has helpful comments
- Project has good docs
- Maintainers respond quickly

❌ **Avoid:**
- Vague descriptions
- No discussion in comments
- Abandoned projects
- No documentation

### Questions to Ask

- Can I understand the problem?
- Do I have the required skills?
- Is documentation available?
- Are maintainers responsive?
- What's the expected timeline?

## Reading the Issue

1. **Title**: What needs to be done
2. **Description**: Details about problem
3. **Comments**: Discussion and hints
4. **Links**: Related issues or PRs

## Claiming an Issue

Comment on the issue:
\`\`\`
Hi! I'd like to work on this issue. 
Is anyone already working on it?
\`\`\`

Wait for response before starting.

## Researching

1. Read project README
2. Look at code related to issue
3. Check similar issues
4. Ask questions if unclear
5. Look at contributing guide

## Getting Help

Don't be afraid to ask:
- Comment on the issue
- Ask for clarification
- Ask for hints
- Most maintainers love helping beginners!
`
  },
  {
    id: "6",
    title: "Understanding Issues and PRs",
    description: "Learn about issues and pull requests in detail.",
    category: "Contributing",
    readTime: 9,
    icon: <Book className="w-6 h-6" />,
    content: `# Understanding Issues and Pull Requests

Issues and Pull Requests are how open source works.

## What is an Issue?

An issue is a discussion about the project.

### Types of Issues

1. **Bug Report**: Something broken
   - What happened
   - What should happen
   - Steps to reproduce

2. **Feature Request**: New functionality
   - What you want
   - Why you want it
   - Examples

3. **Question**: Ask for help
   - Community helps
   - Gets converted to docs if useful

4. **Enhancement**: Improvement to existing feature

### Creating an Issue

1. Check existing issues first
2. Click "New Issue"
3. Choose template if available
4. Fill in details
5. Click "Submit"

## What is a Pull Request (PR)?

A PR is a request to merge your changes.

### PR Workflow

1. Fork repository
2. Create branch
3. Make changes
4. Push to fork
5. Create PR
6. Discuss with maintainers
7. Make requested changes
8. PR gets merged!

### PR Contents

- **Title**: What changes
- **Description**: Why and what
- **Files changed**: See all edits
- **Commits**: History of changes

### PR Discussion

- Maintainers review code
- Leave feedback
- Ask for improvements
- You respond and update
- Eventually merged or closed

## Good PR Practices

✅ DO:
- Keep PRs small and focused
- Write clear description
- Reference related issues
- Test your code
- Follow project guidelines
- Respond to feedback promptly

❌ DON'T:
- Mix multiple features
- Force push without discussion
- Ignore feedback
- Leave PRs open indefinitely
- Commit broken code

## Review Process

1. **Request Review**: Ask for feedback
2. **Wait**: Reviewers are busy
3. **Read Feedback**: Understand comments
4. **Make Changes**: Push new commits
5. **Re-request Review**: After changes
6. **Approved**: Ready to merge
7. **Merged**: You did it!

## Common PR Comments

- "Could you add a test for this?"
- "This could be simplified by..."
- "Please update the documentation"
- "Thanks for the contribution!"
- "Can you explain this logic?"

## Responding Professionally

- Thank reviewers
- Ask for clarification
- Explain your decisions
- Be open to suggestions
- Learn from feedback
`
  },
  {
    id: "7",
    title: "Writing Good Commit Messages",
    description: "Master the art of clear, meaningful commit messages.",
    category: "Best Practices",
    readTime: 8,
    icon: <Code className="w-6 h-6" />,
    content: `# Writing Good Commit Messages

Good commit messages make code history readable and useful.

## Why It Matters

- Help developers understand changes
- Make git history searchable
- Enable better code review
- Facilitate debugging
- Document decisions

## The Anatomy of a Good Commit

### Format

\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

## Commit Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation
- **style**: Formatting changes
- **refactor**: Code restructuring
- **test**: Test additions
- **chore**: Build/dependency changes

## Examples

### Good Commits

\`\`\`
fix(auth): fix null pointer exception in login

Previously, if user input was empty, the login function
would crash. Now it properly validates input.

Fixes #123
\`\`\`

\`\`\`
feat(api): add user authentication endpoint

- Create POST /api/login endpoint
- Add password validation
- Return JWT token on success
- Add unit tests

Related-to #456
\`\`\`

\`\`\`
docs(readme): update installation instructions

Updated for Node.js 18 compatibility
\`\`\`

### Bad Commits

❌ "update"
❌ "fix stuff"
❌ "WIP"
❌ "asdf"

## Subject Line Rules

1. Use imperative mood: "add feature" not "added feature"
2. Don't capitalize first letter
3. No period at the end
4. Limit to 50 characters
5. Be specific

## Body Guidelines

- Explain WHAT and WHY, not HOW
- Wrap at 72 characters
- Separate paragraphs with blank lines
- Use bullet points for multiple changes

## Footer References

\`\`\`
Fixes #123
Related-to #456
Closes #789
Breaking-change: API format changed
\`\`\`

## Git Workflow

\`\`\`bash
# Stage changes
git add .

# Commit with message
git commit -m "fix: resolve memory leak in cache"

# View commit history
git log --oneline

# Amend last commit
git commit --amend
\`\`\`

## Tips

1. **Commit often**: Small, logical commits
2. **Review before committing**: Use git diff
3. **One feature per commit**: Easier to revert
4. **Use present tense**: "add feature" not "added"
5. **Be consistent**: Follow project style

## Practice

Try writing commits for:
- Adding a new function
- Fixing a bug
- Updating documentation
- Refactoring code
`
  },
  {
    id: "8",
    title: "Code Review Best Practices",
    description: "Learn how to review code and receive feedback gracefully.",
    category: "Best Practices",
    readTime: 9,
    icon: <Users className="w-6 h-6" />,
    content: `# Code Review Best Practices

Code review is essential for quality and learning.

## Giving Good Feedback

### Be Respectful

- Focus on the code, not the person
- Assume good intentions
- Be constructive and helpful
- Celebrate good work

### Be Specific

Instead of: "This is wrong"
Say: "This could cause issues with null values. Consider adding a check like..."

### Feedback Examples

✅ Good:
\`\`\`
Great work on the validation! I noticed that the 
function doesn't handle null inputs. Could you add 
a check at the beginning like:

if (!input) {
  return null;
}

This will prevent the error on line 45.
\`\`\`

❌ Bad:
\`\`\`
This is bad code.
\`\`\`

## What to Review

### Critical Issues
- Security vulnerabilities
- Logic errors
- Breaking changes
- Performance problems

### Code Quality
- Readability
- Following patterns
- Naming conventions
- Documentation
- Test coverage

### Best Practices
- DRY principle (Don't Repeat Yourself)
- SOLID principles
- Design patterns
- Error handling

## Receiving Feedback

### Stay Open-Minded

- View feedback as help
- Ask for clarification
- Learn from suggestions
- Thank reviewers

### Responding to Comments

Good response:
\`\`\`
Good catch! I hadn't considered that edge case.
Let me update the code to handle it. Thanks for
the review!
\`\`\`

Bad response:
\`\`\`
You're wrong. It works fine.
\`\`\`

### Making Changes

1. **Don't force push**: Let reviewers see history
2. **Push new commits**: After requested changes
3. **Re-request review**: After changes
4. **Ask for clarification**: If unsure

## Review Checklist

- [ ] Code is readable
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No console.log statements
- [ ] Error handling present
- [ ] Performance is good
- [ ] Security is considered
- [ ] Follows project style

## Communication

### Helpful Phrases

- "Could you explain...?"
- "I might be missing something, but..."
- "Great approach! Consider also..."
- "Thanks for addressing my feedback!"
- "I agree, let's do that."

### Avoid

- "That's stupid"
- "Obviously"
- "This will never work"
- Personal attacks
- Passive aggressive comments

## Learning from Reviews

1. Keep track of feedback
2. Understand the reasoning
3. Apply lessons to next PR
4. Get better each time
5. Eventually become a reviewer!

## Being Reviewed

Remember:
- Everyone starts somewhere
- Feedback is not personal
- You're learning together
- Reviewers are helping you
- Each review makes you better
`
  },
  {
    id: "9",
    title: "Setting Up Your Development Environment",
    description: "Configure everything you need to contribute.",
    category: "Getting Started",
    readTime: 10,
    icon: <Code className="w-6 h-6" />,
    content: `# Setting Up Your Development Environment

Get everything ready for open source contributions.

## Required Software

### Git
1. Download: https://git-scm.com/
2. Install following defaults
3. Configure:
   \`\`\`bash
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   \`\`\`

### Node.js (for JavaScript projects)
1. Download: https://nodejs.org/
2. Install LTS version
3. Verify:
   \`\`\`bash
   node --version
   npm --version
   \`\`\`

### Python (for Python projects)
1. Download: https://python.org/
2. Add to PATH during installation
3. Verify:
   \`\`\`bash
   python --version
   pip --version
   \`\`\`

## Choose an IDE

### VS Code (Recommended)
- Download: https://code.visualstudio.com/
- Lightweight and free
- Great extensions
- Popular in community

### WebStorm
- Full-featured IDE
- JetBrains product
- Paid but powerful

### Sublime Text
- Fast and lightweight
- Highly customizable

### Vim/Neovim
- Powerful but steep learning curve

## VS Code Setup

### Recommended Extensions

1. **ESLint**: JavaScript linting
2. **Prettier**: Code formatting
3. **GitLens**: Git integration
4. **Thunder Client**: API testing
5. **Python**: Python support
6. **Live Server**: Local web server

### Installation

1. Go to Extensions
2. Search for extension name
3. Click Install
4. Done!

## SSH Setup (Optional but Recommended)

Generate SSH key:
\`\`\`bash
ssh-keygen -t ed25519 -C "your@email.com"
# Press Enter to accept default location
\`\`\`

Add to GitHub:
1. Copy public key:
   \`\`\`bash
   cat ~/.ssh/id_ed25519.pub
   \`\`\`
2. Go to GitHub Settings
3. SSH and GPG keys
4. New SSH key
5. Paste the key

Test:
\`\`\`bash
ssh -T git@github.com
\`\`\`

## Project Setup

### Clone Repository
\`\`\`bash
git clone https://github.com/username/project.git
cd project
\`\`\`

### Install Dependencies
\`\`\`bash
npm install      # for Node.js
pip install -r requirements.txt  # for Python
\`\`\`

### Explore the Project
- Read README.md
- Check CONTRIBUTING.md
- Look at directory structure
- Find main files

## Common Folders

- \`src/\`: Source code
- \`test/\`: Test files
- \`docs/\`: Documentation
- \`examples/\`: Example code
- \`config/\`: Configuration files

## Verify Everything Works

\`\`\`bash
# Run tests
npm test

# Run project
npm start

# Check linting
npm run lint
\`\`\`

## Terminal Commands Reference

\`\`\`bash
# Navigation
cd folder          # Go to folder
ls                 # List files
pwd                # Show current path
mkdir newfolder    # Create folder

# Files
touch file.txt     # Create file
rm file.txt        # Delete file
cp file.txt copy.txt  # Copy file
mv file.txt new.txt   # Rename file

# Git
git status         # Check status
git add .          # Stage changes
git commit -m ""   # Commit
git push           # Upload changes
git pull           # Download changes
\`\`\`

## Troubleshooting

### Permission Denied (SSH)
\`\`\`bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
\`\`\`

### npm Install Issues
\`\`\`bash
npm cache clean --force
npm install
\`\`\`

### Python Issues
\`\`\`bash
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\\Scripts\\activate  # Windows
pip install -r requirements.txt
\`\`\`

You're now ready to start contributing!
`
  },
  {
    id: "10",
    title: "Contributing to Real Projects",
    description: "Your complete guide from start to finish.",
    category: "Contributing",
    readTime: 15,
    icon: <Users className="w-6 h-6" />,
    content: `# Contributing to Real Projects

Complete walkthrough of your first contribution.

## Step 1: Find a Project (15 minutes)

Choose based on:
- Interests
- Programming language
- Beginner-friendly label
- Active community
- Good documentation

Websites:
- firsttimersonly.com
- goodfirstissue.dev
- awesome-for-beginners
- github.com explore

## Step 2: Set Up Locally (30 minutes)

\`\`\`bash
# Fork on GitHub first!

# Clone your fork
git clone https://github.com/YOUR-USERNAME/project.git
cd project

# Add upstream
git remote add upstream https://github.com/ORIGINAL/project.git

# Install dependencies
npm install

# Verify it runs
npm test
npm start
\`\`\`

## Step 3: Find an Issue (30 minutes)

Look for:
- "good first issue" label
- Clear description
- Not claimed by someone
- Related to your interests

Comment:
\`\`\`
Hi! I'd like to work on this issue. 
Is anyone already working on it?
\`\`\`

Read:
- Issue description
- Comments from others
- Related PRs
- Project guidelines

## Step 4: Set Up Your Branch (5 minutes)

\`\`\`bash
# Update your fork
git fetch upstream
git rebase upstream/main

# Create feature branch
git checkout -b fix/issue-123
\`\`\`

## Step 5: Make Changes (1-2 hours)

- Understand the problem
- Read relevant code
- Make minimal changes
- Test thoroughly
- Follow project style

## Step 6: Test Your Changes (30 minutes)

\`\`\`bash
# Run tests
npm test

# Check code style
npm run lint

# Manual testing
npm start

# Test the specific feature
\`\`\`

## Step 7: Commit and Push (15 minutes)

\`\`\`bash
# Check changes
git status
git diff

# Stage changes
git add .

# Commit with good message
git commit -m "fix: resolve issue #123

- Brief description of fix
- Another detail if needed

Fixes #123"

# Push to your fork
git push origin fix/issue-123
\`\`\`

## Step 8: Create Pull Request (10 minutes)

1. Go to original repository
2. See "Compare & pull request" button
3. Click it
4. Fill in:
   - Title (clear and concise)
   - Description (explain what/why)
   - Reference the issue
5. Click "Create Pull Request"

## Step 9: Handle Feedback (varies)

Once submitted:
1. Maintainers will review
2. Leave comments
3. You'll get notifications
4. Make requested changes
5. Push new commits
6. Repeat until approved

How to respond:
\`\`\`bash
# Make changes
# Stage and commit
git add .
git commit -m "Address review feedback"

# Push new commit (don't force push!)
git push origin fix/issue-123
\`\`\`

## Step 10: Merge and Celebrate! 🎉

Once approved:
1. Maintainer merges PR
2. Your code is in the project!
3. Delete your branch:
   \`\`\`bash
   git checkout main
   git branch -d fix/issue-123
   \`\`\`

## Timeline

- **Day 1**: Find project, fork, clone
- **Day 1-2**: Understand the issue
- **Day 2-3**: Make changes
- **Day 3**: Create PR
- **Day 3-5**: Handle feedback
- **Day 5+**: Merged!

## Common Challenges

### "I don't understand the code"
- Read documentation
- Look for similar code
- Ask in comments
- Look at tests
- Be patient

### "Tests are failing"
- Read error messages
- Check what changed
- Look at git diff
- Ask for help
- Debug step by step

### "Feedback seems harsh"
- It's not personal
- They want to help
- Learn from it
- Thank them anyway
- Improve next time

### "They didn't merge my PR"
- Projects are busy
- PR might have conflicts
- Requirements changed
- Politely ask for status
- Try another issue

## Tips for Success

✅ **DO:**
- Start small
- Read contributing guide
- Test thoroughly
- Respond to feedback
- Be patient
- Be respectful
- Ask questions
- Thank maintainers

❌ **DON'T:**
- Make huge changes
- Ignore guidelines
- Force push without discussion
- Be demanding
- Disappear after PR
- Take criticism personally
- Give up

## Your First PR Checklist

- [ ] Read project CONTRIBUTING.md
- [ ] Forked and cloned repository
- [ ] Found a good first issue
- [ ] Set up feature branch
- [ ] Made focused changes
- [ ] Tests pass locally
- [ ] Followed project style
- [ ] Wrote good commit message
- [ ] Created PR with description
- [ ] Responded to feedback

## Congratulations!

You're now an open source contributor! 🎊

Next steps:
1. Try more issues
2. Help other newcomers
3. Become a maintainer
4. Start your own project!

Remember: Everyone started where you are. Keep learning!
`
  },
]

const categories = ["Getting Started", "Git & GitHub", "Contributing", "Best Practices"]

export default function LearningPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Getting Started")
  const [selectedGuide, setSelectedGuide] = useState<GuideItem | null>(null)

  const filteredGuides = selectedCategory
    ? guides.filter((g) => g.category === selectedCategory)
    : guides

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        <FadeIn>
          <section className="px-6 py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold mb-4">Learning Resources</h1>
              <p className="text-xl text-foreground/60">
                Master open source contribution through comprehensive guides and documentation
              </p>
            </div>
          </section>
        </FadeIn>

        <section className="px-6 py-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Categories */}
            <FadeIn>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Categories</h2>
                <p className="text-sm text-foreground/60 mb-6">Select a learning path</p>

                <div className="space-y-3">
                  {categories.map((category) => {
                    const categoryGuideCount = guides.filter((g) => g.category === category).length
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                          selectedCategory === category
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <h3 className="font-semibold mb-1">{category}</h3>
                        <p className="text-sm text-foreground/60">{categoryGuideCount} guides</p>
                      </button>
                    )
                  })}
                </div>
              </div>
            </FadeIn>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{selectedCategory}</h2>
                  <p className="text-foreground/60">{filteredGuides.length} guides available</p>
                </div>
              </FadeIn>

              <StaggerContainer staggerDelay={0.1}>
                <div className="grid gap-6">
                  {filteredGuides.length === 0 ? (
                    <FadeIn>
                      <Card>
                        <CardContent className="pt-6 text-center py-12">
                          <p className="text-foreground/60">No guides found in this category.</p>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ) : (
                    filteredGuides.map((guide) => (
                      <StaggerItem key={guide.id}>
                        <Card
                          onClick={() => setSelectedGuide(guide)}
                          className="hover:shadow-lg transition-shadow cursor-pointer hover:border-primary/50"
                        >
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <div className="text-primary mt-1">{guide.icon}</div>
                              <div className="flex-1">
                                <CardTitle className="text-xl mb-2">{guide.title}</CardTitle>
                                <p className="text-foreground/60 text-sm mb-4">{guide.description}</p>
                                <div className="flex items-center justify-between">
                                  <Badge variant="secondary">📖 {guide.readTime} min read</Badge>
                                  <Button variant="ghost" size="sm">
                                    <ChevronRight className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      </StaggerItem>
                    ))
                  )}
                </div>
              </StaggerContainer>
            </div>
          </div>
        </section>
      </div>

      {/* Modal for detailed content */}
      {selectedGuide && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGuide(null)}
        >
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto w-full" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-4">{selectedGuide.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge>{selectedGuide.category}</Badge>
                    <Badge variant="secondary">📖 {selectedGuide.readTime} min</Badge>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="text-2xl text-foreground/60 hover:text-foreground"
                >
                  ×
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap font-serif text-sm leading-relaxed">
                {selectedGuide.content}
              </div>
              <div className="mt-8 pt-6 border-t flex justify-end gap-2">
                <Button onClick={() => setSelectedGuide(null)} variant="outline">
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </main>
  )
}
