# gtg (Good To Go) - Open Source Discovery Platform

A comprehensive full-stack web application designed to help students and developers discover and contribute to open source projects with ease. gtg aggregates opportunities from GSOC, SWOC, Hacktoberfest, GSSOC, Summer of Bitcoin, and other programs in one convenient platform.

## Features

- **Project Discovery**: Browse thousands of open source projects with advanced filtering by difficulty, language, and category
- **Issue Search**: Find issues matching your skill level with intelligent filtering (Good First Issue, Bug, Feature, etc.)
- **Learning Resources**: Comprehensive guides on Git, GitHub, and contribution best practices
- **Developer Profile**: Track your contributions and build your open source portfolio
- **Program Aggregation**: Discover internship and contribution opportunities across multiple platforms
- **Bookmarking**: Save projects and issues for later reference
- **Admin Dashboard**: Manage projects and programs platform-wide

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Next.js 16** (App Router)
- **Tailwind CSS v4** with semantic design tokens
- **SWR** for data fetching and caching
- **shadcn/ui** components

### Backend
- **Node.js** with TypeScript
- **Next.js API Routes** for RESTful endpoints
- **In-memory database** for demo (easily replaceable with PostgreSQL/MongoDB)

### Authentication & State
- **Context API** for authentication and user management
- **LocalStorage** for session persistence

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/gtg.git
cd gtg
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open http://localhost:3000 in your browser

## Project Structure

\`\`\`
gtg/
├── app/
│   ├── layout.tsx              # Root layout with AuthProvider
│   ├── page.tsx                # Landing page
│   ├── projects/               # Project discovery page
│   ├── issues/                 # Issue search page
│   ├── learning/               # Learning resources
│   ├── profile/                # User profile
│   ├── admin/                  # Admin dashboard
│   └── api/                    # API routes
│       ├── auth/               # Authentication endpoints
│       ├── projects/           # Project endpoints
│       ├── issues/             # Issue endpoints
│       ├── guides/             # Guide endpoints
│       ├── programs/           # Program endpoints
│       ├── user/               # User profile endpoints
│       ├── bookmarks/          # Bookmark management
│       └── contributions/      # Contribution tracking
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── navigation.tsx          # Main navigation
│   ├── project-*.tsx           # Project-related components
│   ├── issue-*.tsx             # Issue-related components
│   ├── profile-*.tsx           # Profile-related components
│   ├── admin-*.tsx             # Admin-related components
│   └── ...
├── hooks/
│   ├── use-projects.ts         # Projects data fetching
│   ├── use-issues.ts           # Issues data fetching
│   ├── use-guides.ts           # Guides data fetching
│   ├── use-programs.ts         # Programs data fetching
│   └── use-user.ts             # User data fetching
├── context/
│   └── auth-context.tsx        # Authentication context
├── lib/
│   ├── types.ts                # TypeScript type definitions
│   └── db.ts                   # Database operations
└── styles/
    └── globals.css             # Global styles

\`\`\`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login user

### Projects
- `GET /api/projects` - List all projects
- `GET /api/projects?q=search` - Search projects
- `GET /api/projects?category=Frontend` - Filter by category

### Issues
- `GET /api/issues` - List all issues
- `GET /api/issues?q=search` - Search issues
- `GET /api/issues?difficulty=Beginner` - Filter by difficulty
- `GET /api/issues?label=Bug` - Filter by label

### User
- `GET /api/user/[id]` - Get user profile
- `PUT /api/user/[id]` - Update user profile
- `GET /api/bookmarks?user_id=[id]` - Get user bookmarks
- `POST /api/bookmarks` - Add bookmark
- `DELETE /api/bookmarks?user_id=[id]&issue_id=[id]` - Remove bookmark
- `GET /api/contributions?user_id=[id]` - Get user contributions
- `POST /api/contributions` - Log contribution

### Guides
- `GET /api/guides` - List all guides
- `GET /api/guides?category=Getting%20Started` - Filter by category

### Programs
- `GET /api/programs` - List all programs

## Database Schema

### Users
- id, email, name, bio, avatar, skills[], interests[], github_username, profile_url, contributions_count, created_at, updated_at

### Projects
- id, name, description, url, github_url, language[], stars, forks, contributors, difficulty_level, category, image_url, is_featured, created_at, updated_at

### Issues
- id, project_id, title, description, url, labels[], difficulty, status, comments_count, reactions_count, created_at, updated_at

### Programs
- id, name, description, type, start_date, end_date, participants, image_url, url, created_at

### Guides
- id, title, content, category, read_time, author, difficulty, created_at, updated_at

### UserBookmarks
- id, user_id, issue_id, created_at

### UserContributions
- id, user_id, project_id, issue_id, contribution_type, status, created_at

## Development

### Creating a New Page
1. Create page component in `app/[route]/page.tsx`
2. Create related components in `components/`
3. Create API routes in `app/api/` if needed
4. Add TypeScript types in `lib/types.ts`

### Adding New API Routes
1. Create file in `app/api/[route]/route.ts`
2. Export GET, POST, PUT, DELETE functions as needed
3. Use database functions from `lib/db.ts`

### Styling
- Use Tailwind CSS v4 classes
- Reference semantic design tokens from `globals.css`
- Keep component styling in component files
- Use `cn()` utility from `lib/utils.ts` for conditional classes

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables (if using external DB)
4. Deploy

### Docker
\`\`\`bash
docker build -t gtg .
docker run -p 3000:3000 gtg
\`\`\`

## Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- GitHub OAuth login
- Real-time notifications
- Contribution streak tracking
- Leaderboards and achievements
- Email notifications
- Mobile app
- API documentation
- Advanced analytics

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@gtg.app or open an issue on GitHub.

## Acknowledgments

- Thanks to all open source communities
- Inspired by GSOC, Hacktoberfest, and other amazing initiatives
- Built with shadcn/ui and Next.js

---

**Built with by the gtg team** - Making open source contribution accessible to everyone.
