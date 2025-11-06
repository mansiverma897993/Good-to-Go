// Core TypeScript types for the gtg application
export interface User {
  id: string
  email: string
  name: string
  bio?: string
  avatar?: string
  skills: string[]
  interests: string[]
  github_username?: string
  profile_url?: string
  contributions_count: number
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  name: string
  description: string
  url: string
  github_url: string
  language: string[]
  stars: number
  forks: number
  contributors: number
  difficulty_level: "Beginner" | "Intermediate" | "Advanced"
  category: string
  image_url?: string
  is_featured: boolean
  program_id?: string
  created_at: string
  updated_at: string
}

export interface Issue {
  id: string
  project_id: string
  title: string
  description: string
  url: string
  labels: string[]
  difficulty: "Good First Issue" | "Bug" | "Feature" | "Documentation" | "Help Wanted"
  status: "Open" | "In Progress" | "Closed"
  comments_count: number
  reactions_count: number
  required_skills?: string[]
  created_at: string
  updated_at: string
}

export interface Program {
  id: string
  name: string
  description: string
  type: "GSOC" | "SWOC" | "Hacktoberfest" | "GSSOC" | "Summer of Bitcoin" | "Outreachy"
  start_date: string
  end_date: string
  participants: number
  image_url?: string
  url: string
  created_at: string
}

export interface Guide {
  id: string
  title: string
  content: string
  category: "Getting Started" | "Git & GitHub" | "Contributing" | "Best Practices"
  read_time: number
  author: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  created_at: string
  updated_at: string
}

export interface UserBookmark {
  id: string
  user_id: string
  issue_id: string
  created_at: string
}

export interface UserContribution {
  id: string
  user_id: string
  project_id: string
  issue_id?: string
  contribution_type: "Pull Request" | "Issue" | "Comment"
  status: "Pending" | "Completed" | "Merged"
  created_at: string
}
