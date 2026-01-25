'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface Guide {
  _id: string;
  title: string;
  content: string;
  category: string;
  difficulty: string;
  author: string;
  read_time: number;
  createdAt: string;
}

interface GuideDetailModalProps {
  guide: Guide | null;
  isOpen: boolean;
  onClose: () => void;
}

const getDetailedContent = (title: string): string => {
  const contentMap: { [key: string]: string } = {
    'Getting Started with Git': `# Getting Started with Git

Git is a distributed version control system that allows you to track changes in your code and collaborate with other developers.

## Installation

First, download and install Git from https://git-scm.com/

### Configure Git
After installation, configure your Git identity:
\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
\`\`\`

## Basic Concepts

### Repository
A repository is a directory that contains your project files and Git's version control information.

### Commit
A commit is a snapshot of your code at a specific point in time with a message describing the changes.

### Branch
A branch is a separate line of development. The default branch is usually 'main' or 'master'.

## Essential Commands

### Initialize a Repository
\`\`\`bash
git init
\`\`\`

### Clone a Repository
\`\`\`bash
git clone <repository-url>
\`\`\`

### Check Status
\`\`\`bash
git status
\`\`\`

### Stage Changes
\`\`\`bash
git add .           # Stage all changes
git add filename    # Stage specific file
\`\`\`

### Commit Changes
\`\`\`bash
git commit -m "Your commit message here"
\`\`\`

### Push to Remote
\`\`\`bash
git push origin main
\`\`\`

### Pull from Remote
\`\`\`bash
git pull origin main
\`\`\`

## Next Steps
Practice these commands with a simple project to get comfortable with Git's workflow.`,

    'Understanding Git Branching': `# Understanding Git Branching

Branches are one of Git's most powerful features. They allow you to work on features independently without affecting the main codebase.

## Why Use Branches?

- Develop features in isolation
- Fix bugs independently
- Collaborate safely
- Maintain code stability

## Creating and Switching Branches

### Create a New Branch
\`\`\`bash
git branch feature-name
\`\`\`

### Switch to a Branch
\`\`\`bash
git checkout feature-name
\`\`\`

### Create and Switch in One Command
\`\`\`bash
git checkout -b feature-name
\`\`\`

## List Branches

### Local Branches
\`\`\`bash
git branch
\`\`\`

### Remote Branches
\`\`\`bash
git branch -r
\`\`\`

### All Branches
\`\`\`bash
git branch -a
\`\`\`

## Merging Branches

### Merge a Branch into Current Branch
\`\`\`bash
git merge branch-name
\`\`\`

### Delete a Branch
\`\`\`bash
git branch -d branch-name
\`\`\`

## Branching Strategies

### Git Flow
- main: Production-ready code
- develop: Development branch
- feature/: Feature branches
- release/: Release branches
- hotfix/: Bug fix branches

### GitHub Flow (Simpler)
- main: Always deployable
- feature branches: Created from main
- Pull requests: For review
- Merge to main: After approval

## Handling Merge Conflicts

When merging branches with conflicting changes:

1. Git will mark the conflicts
2. Edit the files to resolve conflicts
3. Stage the resolved files
4. Commit the merge

\`\`\`bash
git add conflicted-file.js
git commit -m "Resolve merge conflict"
\`\`\`

## Best Practices

- Use descriptive branch names
- Delete merged branches
- Keep branches focused on single features
- Pull frequently to avoid conflicts`,

    'Fork, Clone, and Pull Request Guide': `# Fork, Clone, and Pull Request Guide

This is the standard workflow for contributing to open source projects on GitHub.

## Step 1: Fork the Repository

1. Go to the project's GitHub page
2. Click the "Fork" button in the top-right corner
3. GitHub creates a copy of the repository under your account

## Step 2: Clone Your Fork

Clone the forked repository to your local machine:

\`\`\`bash
git clone https://github.com/YOUR-USERNAME/project-name.git
cd project-name
\`\`\`

## Step 3: Add Upstream Remote

Keep your fork synchronized with the original repository:

\`\`\`bash
git remote add upstream https://github.com/ORIGINAL-OWNER/project-name.git
\`\`\`

## Step 4: Create a Feature Branch

\`\`\`bash
git checkout -b fix/issue-description
# or
git checkout -b feature/new-feature
\`\`\`

## Step 5: Make Your Changes

- Edit the files as needed
- Test your changes thoroughly
- Follow the project's coding standards

## Step 6: Stage and Commit

\`\`\`bash
git add .
git commit -m "Fix: Brief description of changes"
\`\`\`

Use conventional commit types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Code style changes
- refactor: Code refactoring
- test: Tests
- chore: Build/dependency changes

## Step 7: Update Your Fork

Before pushing, sync with the latest upstream changes:

\`\`\`bash
git fetch upstream
git rebase upstream/main
\`\`\`

## Step 8: Push to Your Fork

\`\`\`bash
git push origin fix/issue-description
\`\`\`

## Step 9: Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Ensure the base branch is the original repo's main
4. Write a clear PR title and description
5. Click "Create pull request"

## Pull Request Template

\`\`\`
## Description
Brief description of your changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change

## Testing
How did you test this?

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for clarity
- [ ] No new warnings generated
- [ ] Tests pass locally
\`\`\`

## After Submission

- Address review feedback promptly
- Make additional commits if needed
- Don't force push without discussing with reviewers
- Thank reviewers for their time

## Common Issues

### Merge Conflicts
If there are conflicts, update your branch:

\`\`\`bash
git fetch upstream
git rebase upstream/main
# Resolve conflicts
git add .
git rebase --continue
git push -f origin your-branch
\`\`\`

### Accidental Commits to Main
\`\`\`bash
git reset HEAD~1
git checkout -b correct-branch
git commit -m "Your changes"
\`\`\``,

    'How to Make Your First Open Source Contribution': `# How to Make Your First Open Source Contribution

Contributing to open source can be intimidating, but it doesn't have to be. Here's a friendly step-by-step guide.

## Step 1: Find a Project

### Where to Look
- GitHub Trending
- First Timers Only
- Good First Issues labels
- Awesome lists for your tech stack
- Projects you already use

### What to Look For
- Clear README and contribution guidelines
- Active maintainers
- Friendly community
- Issues labeled "good first issue" or "beginner-friendly"

## Step 2: Understand the Project

- Read the README thoroughly
- Check the project's CONTRIBUTING.md
- Review the Code of Conduct
- Look at recent issues and pull requests
- Understand the project's tech stack

## Step 3: Set Up Your Environment

- Fork the repository
- Clone to your machine
- Install dependencies (usually npm install or yarn install)
- Run the project locally
- Ensure tests pass: npm test or yarn test

## Step 4: Find an Issue to Work On

- Start with "good first issue" labels
- Read the issue description carefully
- Check if anyone is already working on it
- Comment expressing your interest

## Step 5: Understand the Problem

- Ask clarifying questions in the issue
- Research related code
- Check existing solutions in similar projects
- Plan your approach before coding

## Step 6: Create Your Feature Branch

\`\`\`bash
git checkout -b fix/issue-123
\`\`\`

## Step 7: Make Your Changes

- Write clean, readable code
- Follow the project's style guide
- Add comments where necessary
- Keep changes focused on the issue
- Avoid unrelated changes

## Step 8: Test Your Work

- Run all tests: npm test
- Test manually if needed
- Fix any failing tests
- Add new tests if applicable

## Step 9: Commit with Good Messages

\`\`\`bash
git add .
git commit -m "fix: resolve memory leak in cache module

- Clear cache before processing new data
- Add timeout for cache invalidation
- Fixes #123"
\`\`\`

## Step 10: Push and Create PR

\`\`\`bash
git push origin fix/issue-123
\`\`\`

Then create a pull request on GitHub.

## Step 11: Respond to Review

- Read feedback carefully
- Ask for clarification if needed
- Make requested changes
- Push updates (don't force push)
- Be open to suggestions

## Step 12: Celebrate!

Once your PR is merged, congratulate yourself! You're now an open source contributor.

## Tips for Success

1. **Start small**: Fix typos, improve docs, add tests
2. **Be respectful**: Remember people volunteer here
3. **Be patient**: Reviews take time
4. **Be clear**: Write good commit messages and PR descriptions
5. **Be responsive**: Reply to feedback promptly
6. **Be humble**: Accept criticism gracefully

## Common Concerns

### What if my PR is rejected?
That's okay! It's not personal. Learn from the feedback and try another issue.

### What if I get stuck?
Ask for help in the issue or PR. Most communities are welcoming to beginners.

### What if I can't finish the task?
Communicate early. Let maintainers know you're stepping back so someone else can help.

Remember: Every expert was once a beginner. Your first contribution matters!`,

    'Git Commits: Writing Better Messages': `# Git Commits: Writing Better Messages

A good commit message is essential for code maintenance and understanding project history.

## Why Commit Messages Matter

- Help developers understand why changes were made
- Make git history searchable and useful
- Enable better code review
- Facilitate debugging and bisecting
- Document the project's evolution

## The Structure of a Good Commit

### Format
\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

### Example
\`\`\`
feat(auth): add password reset functionality

Implement email-based password reset feature:
- Add reset token generation
- Add token validation and expiry
- Add email notification service
- Add tests for reset flow

Fixes #456
Related-to #789
Breaking-change: Password reset requires email verification
\`\`\`

## Conventional Commits

### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting)
- **refactor**: Code changes without feature/fix
- **perf**: Performance improvements
- **test**: Test additions/modifications
- **chore**: Build, dependency, or tooling changes

### Scope (Optional)
The scope specifies what part of the codebase is affected:
- auth
- api
- ui
- database
- etc.

## Writing the Subject Line

### Rules
1. Use imperative mood ("add feature", not "added feature")
2. Don't capitalize first letter
3. No period at the end
4. Limit to 50 characters
5. Be specific and concise

### Good Examples
- fix: handle null pointer exception in parser
- feat: add user authentication endpoint
- docs: update setup instructions in README
- refactor: simplify authentication logic

### Bad Examples
- Fixed bug
- Updated stuff
- Changes
- WIP (Work In Progress)

## Writing the Body

### Guidelines
- Explain WHAT and WHY, not HOW
- Wrap at 72 characters
- Use bullet points for multiple changes
- Separate paragraphs with blank lines
- Reference related issues

### Example
\`\`\`
Implement user profile API endpoint

The profile endpoint allows users to retrieve and update
their personal information. This is required for the
user settings page implementation.

Changes:
- Add GET /api/users/:id endpoint
- Add PUT /api/users/:id endpoint
- Add profile validation schema
- Add authorization middleware

Note: Password changes are handled separately by
the password reset endpoint.
\`\`\`

## Footer References

### Close Issues
\`\`\`
Closes #123
Fixes #456
Resolves #789
\`\`\`

### Related Issues
\`\`\`
Related-to #111
Part-of #222
\`\`\`

### Breaking Changes
\`\`\`
Breaking-change: API response format changed
The /api/users endpoint now returns paginated results
\`\`\`

## Tools for Better Commits

### Commit Templates
\`\`\`bash
git config commit.template ~/.gitmessage
\`\`\`

### Interactive Staging
\`\`\`bash
git add -p  # Review changes before staging
\`\`\`

### Amend Last Commit
\`\`\`bash
git commit --amend --no-edit
\`\`\`

## Best Practices

1. **Commit frequently**: Small, logical commits are better
2. **One feature per commit**: Makes reverting easier
3. **Write in present tense**: "add feature", not "added feature"
4. **Review before committing**: Use git diff to check changes
5. **No secrets in commits**: Never commit passwords or API keys

## Quick Reference

✅ DO:
- Write clear, descriptive messages
- Use conventional commit format
- Reference related issues
- Explain the "why"
- Keep commits focused

❌ DON'T:
- Use vague messages like "update"
- Mix multiple features in one commit
- Include unrelated changes
- Forget to explain why
- Commit incomplete work`,

    'Code Review: Giving and Receiving Feedback': `# Code Review: Giving and Receiving Feedback

Code review is a crucial part of collaborative development. Learning to give and receive feedback is essential.

## The Purpose of Code Review

- Catch bugs before they reach production
- Share knowledge across the team
- Maintain code quality standards
- Prevent security vulnerabilities
- Mentor junior developers

## Giving Constructive Feedback

### Be Respectful
- Remember there's a person behind the code
- Focus on the code, not the person
- Assume good intentions
- Be encouraging and supportive

### Be Specific
- Point out exactly what needs to change
- Explain why it's an issue
- Provide examples or alternatives
- Include relevant documentation links

### Examples of Good Reviews

#### Finding a Bug
\`\`\`
Great catch on the edge case! I noticed that the
validation doesn't handle null values. Could you
add a check at the beginning of the function?

Example:
if (!input || input.length === 0) {
  return null;
}

This will prevent the error on line 45.
\`\`\`

#### Suggesting Improvement
\`\`\`
Nice implementation! For better performance,
consider using Set instead of Array for lookups.

Current: users.includes(userId)  // O(n)
Better: userSet.has(userId)      // O(1)

See https://example.com/performance-guide
\`\`\`

#### Approving with Comments
\`\`\`
Looks good! Just a couple of minor suggestions:

1. Add a comment explaining the algorithm
2. Consider extracting the helper function

These are optional, but would improve maintainability.
\`\`\`

## What to Review

### Critical Issues
- Security vulnerabilities
- Performance problems
- Breaking API changes
- Logic errors

### Code Quality
- Readability and clarity
- Design patterns
- DRY principle
- Test coverage
- Error handling

### Style and Consistency
- Code style adherence
- Naming conventions
- Documentation
- Comments

## Receiving Feedback

### Stay Open-Minded
- View feedback as help, not criticism
- Ask clarifying questions
- Consider alternative approaches
- Thank reviewers for their time

### Responding to Criticism
- Don't get defensive
- Explain your reasoning if needed
- Be willing to change your mind
- Learn from the feedback

### Addressing Changes
- Make requested changes promptly
- Discuss if you disagree respectfully
- Re-request review after changes
- Ask for explanation if unclear

## Common Review Comments

### Readability
"This variable name is ambiguous. Could you use something more descriptive?"

### Performance
"This has O(n²) complexity. Consider using a Set for lookups."

### Testing
"Could you add a test for the edge case where x is null?"

### Documentation
"This function does X, Y, and Z. Could you add a JSDoc comment?"

### Security
"Be careful here - this input should be sanitized before use."

## Creating Code Review Checklist

- [ ] Code follows style guide
- [ ] No console.log/debug statements
- [ ] Functions have documentation
- [ ] Edge cases are handled
- [ ] Tests pass locally
- [ ] No security vulnerabilities
- [ ] Performance is acceptable
- [ ] No hardcoded values
- [ ] Error messages are helpful
- [ ] Related issues are referenced

## Tools

- GitHub: Built-in review on PR
- GitLab: Merge request reviews
- Gerrit: Advanced code review system
- Review tools: Crucible, SmartBear, etc.

## Best Practices

✅ DO:
- Be specific and constructive
- Explain the why
- Ask questions instead of commands
- Acknowledge good work
- Review in a timely manner

❌ DON'T:
- Make personal attacks
- Be vague
- Nitpick everything
- Use harsh language
- Delay reviews indefinitely`,

    'Understanding Pull Requests': `# Understanding Pull Requests

Pull Requests (PRs) are the core mechanism for collaborative code review and integration.

## What is a Pull Request?

A Pull Request is a request to merge changes from one branch into another. It enables:
- Code review before merging
- Discussion about changes
- Testing before integration
- Documentation of decisions

## Creating a Pull Request

### Before You Start
1. Create a feature branch
2. Make focused, logical commits
3. Test your changes thoroughly
4. Ensure code follows project standards
5. Write meaningful commit messages

### The PR Process

1. **Push your branch**: Push to your fork
2. **Go to GitHub**: Navigate to your fork
3. **Compare branches**: Select your branch
4. **Create PR**: Click "Create Pull Request"
5. **Fill in details**: Title, description, linked issues
6. **Submit**: Click "Create Pull Request"

## Writing a Good PR Description

### Template
\`\`\`
## Description
Brief explanation of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation

## Related Issues
Fixes #123
Related to #456

## Changes Made
- Specific change 1
- Specific change 2
- Specific change 3

## Testing
How was this tested?
- Unit tests added
- Manual testing done on [browser/environment]

## Screenshots (if applicable)
Include before/after screenshots

## Checklist
- [ ] Code follows style guide
- [ ] Self-review completed
- [ ] Comments added
- [ ] No new warnings
- [ ] Tests pass
- [ ] No breaking changes
\`\`\`

## During Review

### Responding to Comments
- Address feedback promptly
- Ask for clarification if needed
- Make requested changes
- Push new commits
- Re-request review

### Making Changes
- Don't force push (unless specifically asked)
- Each commit should be meaningful
- Keep related changes together
- Reference the issue being discussed

### Disagreeing Respectfully
- Explain your perspective calmly
- Provide data or examples
- Ask for more explanation
- Involve a project maintainer if stuck

## Handling Merge Conflicts

When your branch conflicts with the target:

\`\`\`bash
git fetch origin
git rebase origin/main
# Resolve conflicts in editor
git add .
git rebase --continue
git push origin your-branch
\`\`\`

## Approval and Merging

### Types of Approvals
- **Approved**: Ready to merge
- **Changes Requested**: Needs revision
- **Commented**: Just feedback

### Merge Strategies
- **Create a Merge Commit**: Preserves history
- **Squash and Merge**: Combines commits
- **Rebase and Merge**: Clean history

### Who Can Merge?
- Project maintainers
- Designated reviewers
- Authorized contributors

## After Merging

- Delete your feature branch
- Check if deployment succeeded
- Verify changes in production
- Monitor for issues

## Best Practices

✅ DO:
- Keep PRs focused and small
- Write clear titles and descriptions
- Link related issues
- Test before submitting
- Respond promptly to feedback
- Thank reviewers

❌ DON'T:
- Mix multiple features in one PR
- Leave PRs open indefinitely
- Ignore review comments
- Force push without discussion
- Change PRs after approval
- Merge your own PRs (usually)

## Common PR Issues

### PR Too Large
Split into smaller, focused PRs that build on each other.

### Unclear Changes
Improve the PR description and add comments in the code.

### Missing Tests
Add tests for new functionality.

### Style Violations
Run linter and formatter before submitting.

## PR Etiquette

- **Be patient**: Reviews take time
- **Be grateful**: Thank reviewers
- **Be professional**: Keep it constructive
- **Be responsive**: Address feedback promptly
- **Be open**: Consider different perspectives`,

    'Best Practices': `# Open Source Best Practices

Master these practices to become an excellent open source contributor.

## Code Quality

### Write Clean Code
- Use meaningful variable names
- Keep functions small and focused
- Follow DRY principle
- Avoid deep nesting
- Use design patterns appropriately

### Add Tests
- Write unit tests
- Test edge cases
- Aim for high coverage
- Test error conditions
- Mock external dependencies

### Document Your Code
- Add JSDoc comments
- Explain complex logic
- Include usage examples
- Update README if needed
- Keep docs in sync

## Commit Best Practices

### Small, Logical Commits
- One feature per commit
- Revert-friendly
- Focused on single purpose
- Reviewable in one go

### Good Commit Messages
- Follow conventional commits
- Explain the why
- Reference issues
- Use present tense

## Pull Request Excellence

### PR Size
- Keep PRs under 400 lines
- Too large = hard to review
- Split large features
- Stack PRs if needed

### PR Description
- Explain motivation
- List changes clearly
- Reference issues
- Add screenshots if UI change

## Community Engagement

### Communication
- Be respectful always
- Ask before major changes
- Discuss in issues first
- Document decisions

### Helping Others
- Mentor new contributors
- Answer questions kindly
- Share knowledge
- Review others' PRs

## Project Maintenance

### If You're a Maintainer
- Respond promptly to issues
- Provide clear guidelines
- Be welcoming to newcomers
- Keep documentation updated
- Maintain code quality

## Security

### Secure Coding
- Validate all inputs
- Sanitize outputs
- Never hardcode secrets
- Use security headers
- Keep dependencies updated

### Responsible Disclosure
- Report security issues privately
- Give maintainers time to fix
- Don't exploit vulnerabilities publicly
- Follow project's security policy`,

    'Setting Up Your Development Environment': `# Setting Up Your Development Environment

Get your development environment ready for open source contributions.

## Install Git

### Windows
1. Download from https://git-scm.com/download/win
2. Run the installer
3. Accept defaults or customize as needed

### macOS
\`\`\`bash
brew install git
\`\`\`

### Linux (Ubuntu/Debian)
\`\`\`bash
sudo apt-get install git
\`\`\`

## Configure Git

### Set Your Identity
\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
\`\`\`

### Configure SSH (Optional but Recommended)
\`\`\`bash
ssh-keygen -t ed25519 -C "your@email.com"
# Press Enter to accept defaults
cat ~/.ssh/id_ed25519.pub  # Copy this
\`\`\`

Add the key to GitHub:
1. Go to GitHub Settings
2. SSH and GPG keys
3. New SSH key
4. Paste the copied key

### Verify SSH Connection
\`\`\`bash
ssh -T git@github.com
\`\`\`

## Set Up Your IDE

### Recommended IDEs
- **VS Code**: Lightweight, great extensions
- **WebStorm**: Full-featured JS IDE
- **Sublime Text**: Fast and customizable
- **Vim/Neovim**: Lightweight, powerful

### VS Code Extensions
- ESLint: Code quality
- Prettier: Code formatting
- GitLens: Git integration
- Thunder Client: API testing
- Live Server: Local server

## Install Node.js and npm

### Windows
Download from https://nodejs.org and run installer

### macOS
\`\`\`bash
brew install node
\`\`\`

### Linux
\`\`\`bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
\`\`\`

### Verify Installation
\`\`\`bash
node --version
npm --version
\`\`\`

## Clone Your First Repository

\`\`\`bash
# Clone a project
git clone https://github.com/username/project.git
cd project

# Install dependencies
npm install

# Check it works
npm test
npm start
\`\`\`

## Create GitHub Account

1. Go to https://github.com
2. Sign up (free tier is fine)
3. Complete profile
4. Add profile picture
5. Verify email

## Basic Workflow

1. **Clone repository**
\`\`\`bash
git clone <repo-url>
cd <project>
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Create feature branch**
\`\`\`bash
git checkout -b feature/new-feature
\`\`\`

4. **Make changes**
Edit files, test locally

5. **Commit changes**
\`\`\`bash
git add .
git commit -m "feat: add new feature"
\`\`\`

6. **Push to fork**
\`\`\`bash
git push origin feature/new-feature
\`\`\`

7. **Create pull request**
Go to GitHub and create PR

## Useful Terminal Commands

\`\`\`bash
# Navigation
cd folder/path      # Change directory
ls                  # List files
pwd                 # Print working directory

# File Operations
mkdir new-folder    # Create folder
touch file.txt      # Create file
rm file.txt         # Delete file
cp file.txt copy.txt # Copy file
mv file.txt new.txt # Move/rename file

# Git
git status          # Check status
git log             # View commit history
git diff            # View changes
git branch          # List branches
git help <command>  # Get help
\`\`\`

## Troubleshooting

### Permission Denied
\`\`\`bash
# For SSH issues
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
\`\`\`

### npm Install Issues
\`\`\`bash
# Clear cache
npm cache clean --force
npm install
\`\`\`

### Git Configuration Issues
\`\`\`bash
# Reset to defaults
git config --global --list
git config --global --unset user.name
git config --global user.name "Your Name"
\`\`\`

You're now ready to start contributing!`,
  };

  return contentMap[title] || title;
};

export function GuideDetailModal({ guide, isOpen, onClose }: GuideDetailModalProps) {
  if (!guide) return null;

  const detailedContent = getDetailedContent(guide.title);
  const isMarkdown = detailedContent.includes('#');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-4">{guide.title}</DialogTitle>
              <div className="flex gap-2 flex-wrap mb-4">
                <Badge variant="outline">{guide.category}</Badge>
                <Badge>{guide.difficulty}</Badge>
                <span className="text-xs text-foreground/60">📖 {guide.read_time} min read</span>
                <span className="text-xs text-foreground/60">By {guide.author}</span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6 prose dark:prose-invert max-w-none">
          {isMarkdown ? (
            <div className="space-y-4 text-sm leading-relaxed whitespace-pre-wrap font-mono">
              {detailedContent}
            </div>
          ) : (
            <p>{detailedContent}</p>
          )}
        </div>

        <div className="mt-8 pt-4 border-t flex justify-between items-center">
          <div className="flex gap-2">
            <Badge variant="secondary">Open Source</Badge>
            <Badge variant="secondary">Learning</Badge>
          </div>
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
