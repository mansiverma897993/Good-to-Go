// Mock database - Replace with actual DB when ready
import type { User, Project, Issue, Program, Guide, UserBookmark, UserContribution } from "./types"

// In-memory storage for demo
const users: User[] = []
let projects: Project[] = []
let issues: Issue[] = []
let programs: Program[] = []
let guides: Guide[] = []
const bookmarks: UserBookmark[] = []
const contributions: UserContribution[] = []

// Helper to generate IDs
const generateId = () => Math.random().toString(36).substring(2, 11)

// Seed initial data
export function seedDatabase() {
  // Seed projects
  projects = [
    {
      id: generateId(),
      name: "React",
      description: "A JavaScript library for building user interfaces with components",
      url: "https://github.com/facebook/react",
      github_url: "facebook/react",
      language: ["JavaScript", "TypeScript"],
      stars: 200000,
      forks: 42000,
      contributors: 1500,
      difficulty_level: "Intermediate",
      category: "Frontend",
      image_url: "/react-logo.jpg",
      is_featured: true,
      program_id: "gsoc",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: generateId(),
      name: "Vue.js",
      description: "The Progressive JavaScript Framework",
      url: "https://github.com/vuejs/vue",
      github_url: "vuejs/vue",
      language: ["JavaScript", "TypeScript"],
      stars: 207000,
      forks: 33000,
      contributors: 500,
      difficulty_level: "Beginner",
      category: "Frontend",
      image_url: "/vue-logo.jpg",
      is_featured: true,
      program_id: "hacktoberfest",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: generateId(),
      name: "Next.js",
      description: "The React Framework for Production",
      url: "https://github.com/vercel/next.js",
      github_url: "vercel/next.js",
      language: ["TypeScript", "JavaScript"],
      stars: 120000,
      forks: 25000,
      contributors: 800,
      difficulty_level: "Intermediate",
      category: "Full Stack",
      image_url: "/nextjs-logo.jpg",
      is_featured: true,
      program_id: "gssoc",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: generateId(),
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
      url: "https://github.com/nodejs/node",
      github_url: "nodejs/node",
      language: ["JavaScript", "C++"],
      stars: 100000,
      forks: 25000,
      contributors: 2500,
      difficulty_level: "Advanced",
      category: "Backend",
      image_url: "/nodejs-logo.jpg",
      is_featured: true,
      program_id: "swoc",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]

  // Seed issues
  issues = [
    {
      id: generateId(),
      project_id: projects[0].id,
      title: "Add support for lazy loading images",
      description: "Implement lazy loading for images to improve performance",
      url: "https://github.com/facebook/react/issues/1234",
      labels: ["feature", "performance"],
      difficulty: "Good First Issue",
      status: "Open",
      comments_count: 12,
      reactions_count: 45,
      required_skills: ["JavaScript", "React", "Web Dev"],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: generateId(),
      project_id: projects[0].id,
      title: "Fix memory leak in useEffect",
      description: "Memory is not being freed properly in certain scenarios",
      url: "https://github.com/facebook/react/issues/1235",
      labels: ["bug", "memory"],
      difficulty: "Bug",
      status: "Open",
      comments_count: 8,
      reactions_count: 32,
      required_skills: ["JavaScript", "React", "Performance"],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: generateId(),
      project_id: projects[1].id,
      title: "Improve documentation for composables",
      description: "Add more examples to the composables documentation",
      url: "https://github.com/vuejs/vue/issues/1236",
      labels: ["documentation"],
      difficulty: "Documentation",
      status: "Open",
      comments_count: 5,
      reactions_count: 20,
      required_skills: ["JavaScript", "Vue.js", "Documentation"],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: generateId(),
      project_id: projects[2].id,
      title: "Add TypeScript support for API routes",
      description: "Make TypeScript first-class citizen for API routes",
      url: "https://github.com/vercel/next.js/issues/1237",
      labels: ["feature", "typescript"],
      difficulty: "Feature",
      status: "Open",
      comments_count: 15,
      reactions_count: 50,
      required_skills: ["TypeScript", "Node.js", "Web Dev"],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]

  // Seed programs
  programs = [
    {
      id: "gsoc",
      name: "Google Summer of Code",
      description:
        "Google Summer of Code is a global program focused on bringing more student developers into open source software development",
      type: "GSOC",
      start_date: "2024-05-27",
      end_date: "2024-08-26",
      participants: 5000,
      image_url: "/gsoc.jpg",
      url: "https://summerofcode.withgoogle.com",
      created_at: new Date().toISOString(),
    },
    {
      id: "hacktoberfest",
      name: "Hacktoberfest",
      description: "Hacktoberfest is a month-long celebration of open source software",
      type: "Hacktoberfest",
      start_date: "2024-10-01",
      end_date: "2024-10-31",
      participants: 150000,
      image_url: "/hacktoberfest.jpg",
      url: "https://hacktoberfest.com",
      created_at: new Date().toISOString(),
    },
    {
      id: "gssoc",
      name: "GirlScript Summer of Code",
      description: "GirlScript Summer of Code is a 3-month-long Open Source Program",
      type: "GSSOC",
      start_date: "2024-05-01",
      end_date: "2024-07-31",
      participants: 3000,
      image_url: "/gssoc.jpg",
      url: "https://gssoc.girlscript.tech",
      created_at: new Date().toISOString(),
    },
    {
      id: "swoc",
      name: "Social Winter of Code",
      description: "Social Winter of Code is an open source initiative for students and developers",
      type: "SWOC",
      start_date: "2024-12-01",
      end_date: "2025-01-31",
      participants: 2000,
      image_url: "/swoc.jpg",
      url: "https://socialwinterofcode.com",
      created_at: new Date().toISOString(),
    },
    {
      id: "sob",
      name: "Summer of Bitcoin",
      description: "Summer of Bitcoin is an internship program focused on blockchain and cryptocurrency education",
      type: "Summer of Bitcoin",
      start_date: "2024-06-01",
      end_date: "2024-08-31",
      participants: 1500,
      image_url: "/sob.jpg",
      url: "https://www.summerofbitcoin.org",
      created_at: new Date().toISOString(),
    },
    {
      id: "outreachy",
      name: "Outreachy",
      description: "Outreachy provides internships in open source and free software",
      type: "Outreachy",
      start_date: "2024-06-01",
      end_date: "2024-09-01",
      participants: 500,
      image_url: "/outreachy.jpg",
      url: "https://www.outreachy.org",
      created_at: new Date().toISOString(),
    },
  ]

  // Seed guides
  guides = [
    {
      id: "first-contribution",
      title: "Your First Open Source Contribution",
      content: "A beginner-friendly guide to making your first pull request to an open source project.",
      category: "Getting Started",
      read_time: 12,
      author: "Sarah Chen",
      difficulty: "Beginner",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "git-github",
      title: "Understanding Git & GitHub Workflows",
      content: "Deep dive into git commands and GitHub workflows every contributor should know.",
      category: "Git & GitHub",
      read_time: 18,
      author: "Marcus Williams",
      difficulty: "Beginner",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "code-review",
      title: "Code Review Best Practices",
      content: "Master the art of giving and receiving constructive code reviews.",
      category: "Best Practices",
      read_time: 15,
      author: "Elena Rodriguez",
      difficulty: "Intermediate",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "community",
      title: "Working with Open Source Communities",
      content: "Build relationships and communicate effectively in open source projects.",
      category: "Contributing",
      read_time: 14,
      author: "James Park",
      difficulty: "Intermediate",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "setup-env",
      title: "Setting Up Your Development Environment",
      content: "Configure your local machine for contributing to various project types.",
      category: "Getting Started",
      read_time: 20,
      author: "Alex Kumar",
      difficulty: "Beginner",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "advanced-git",
      title: "Advanced Git Techniques",
      content: "Master rebasing, cherry-picking, and other advanced git workflows.",
      category: "Git & GitHub",
      read_time: 25,
      author: "David Lee",
      difficulty: "Advanced",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]
}

// User operations
export async function createUser(userData: Omit<User, "id" | "created_at" | "updated_at">): Promise<User> {
  const user: User = {
    ...userData,
    id: generateId(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
  users.push(user)
  return user
}

export async function getUserById(id: string): Promise<User | null> {
  return users.find((u) => u.id === id) || null
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return users.find((u) => u.email === email) || null
}

export async function updateUser(id: string, updates: Partial<User>): Promise<User | null> {
  const user = users.find((u) => u.id === id)
  if (!user) return null
  const updated = { ...user, ...updates, updated_at: new Date().toISOString() }
  const index = users.indexOf(user)
  users[index] = updated
  return updated
}

// Project operations
export async function getAllProjects(): Promise<Project[]> {
  return projects
}

export async function getProjectById(id: string): Promise<Project | null> {
  return projects.find((p) => p.id === id) || null
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  return projects.filter((p) => p.category === category)
}

export async function searchProjects(query: string): Promise<Project[]> {
  const q = query.toLowerCase()
  return projects.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.language.some((l) => l.toLowerCase().includes(q)),
  )
}

export async function getProjectsByProgram(programId: string): Promise<Project[]> {
  return projects.filter((p) => p.program_id === programId)
}

export async function getProjectsBySkills(skills: string[]): Promise<Project[]> {
  return projects.filter((p) =>
    skills.some((skill) => p.language.some((lang) => lang.toLowerCase().includes(skill.toLowerCase()))),
  )
}

// Issue operations
export async function getIssuesByProjectId(projectId: string): Promise<Issue[]> {
  return issues.filter((i) => i.project_id === projectId)
}

export async function getAllIssues(): Promise<Issue[]> {
  return issues
}

export async function getIssuesByDifficulty(difficulty: string): Promise<Issue[]> {
  return issues.filter((i) => i.difficulty === difficulty)
}

export async function getIssuesByLabel(label: string): Promise<Issue[]> {
  return issues.filter((i) => i.labels.includes(label))
}

export async function searchIssues(query: string): Promise<Issue[]> {
  const q = query.toLowerCase()
  return issues.filter((i) => i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q))
}

export async function getIssuesBySkills(skills: string[]): Promise<Issue[]> {
  return issues.filter((i) =>
    i.required_skills?.some((skill) =>
      skills.some((userSkill) => userSkill.toLowerCase().includes(skill.toLowerCase())),
    ),
  )
}

// Program operations
export async function getAllPrograms(): Promise<Program[]> {
  return programs
}

export async function getProgramById(id: string): Promise<Program | null> {
  return programs.find((p) => p.id === id) || null
}

// Guide operations
export async function getAllGuides(): Promise<Guide[]> {
  return guides
}

export async function getGuidesByCategory(category: string): Promise<Guide[]> {
  return guides.filter((g) => g.category === category)
}

// Bookmark operations
export async function addBookmark(userId: string, issueId: string): Promise<UserBookmark> {
  const bookmark: UserBookmark = {
    id: generateId(),
    user_id: userId,
    issue_id: issueId,
    created_at: new Date().toISOString(),
  }
  bookmarks.push(bookmark)
  return bookmark
}

export async function removeBookmark(userId: string, issueId: string): Promise<boolean> {
  const index = bookmarks.findIndex((b) => b.user_id === userId && b.issue_id === issueId)
  if (index === -1) return false
  bookmarks.splice(index, 1)
  return true
}

export async function getUserBookmarks(userId: string): Promise<Issue[]> {
  const userBookmarkIds = bookmarks.filter((b) => b.user_id === userId).map((b) => b.issue_id)
  return issues.filter((i) => userBookmarkIds.includes(i.id))
}

// Contribution operations
export async function addContribution(
  userId: string,
  projectId: string,
  contributionData: Omit<UserContribution, "id" | "created_at">,
): Promise<UserContribution> {
  const contribution: UserContribution = {
    ...contributionData,
    id: generateId(),
    user_id: userId,
    project_id: projectId,
    created_at: new Date().toISOString(),
  }
  contributions.push(contribution)
  return contribution
}

export async function getUserContributions(userId: string): Promise<UserContribution[]> {
  return contributions.filter((c) => c.user_id === userId)
}
