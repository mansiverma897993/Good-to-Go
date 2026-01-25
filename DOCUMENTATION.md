# Good-to-Go - Documentation

## Overview

Good-to-Go is a full-stack open source contribution platform that helps developers discover projects to contribute to, find issues matching their skill level, and learn about open source best practices.

## Project Features

### 🎯 Core Features

1. **Project Discovery**
   - Browse 500+ open source projects
   - Filter by difficulty level (Beginner, Intermediate, Advanced)
   - Filter by programming language
   - View project stats (stars, forks, contributors)
   - Direct links to GitHub repositories

2. **Issue Tracking**
   - Find 10,000+ open issues
   - Filter by difficulty type (Good First Issue, Bug, Feature, Documentation, Help Wanted)
   - Search issues by keyword
   - View required skills for each issue
   - Track issue status and comments

3. **Learning Resources**
   - 100+ curated guides
   - Categorized tutorials (Getting Started, Git & GitHub, Contributing, Best Practices)
   - Read time estimates
   - Progressive difficulty levels

4. **Opportunity Programs**
   - GSOC (Google Summer of Code)
   - SWOC (Social Winter of Code)
   - Hacktoberfest
   - GSSOC (GirlScript Summer of Code)
   - Summer of Bitcoin
   - Outreachy

5. **User Features**
   - User authentication (JWT)
   - Profile management
   - Bookmark issues
   - Track contributions
   - View contribution history

### ✨ Animations & UX

- **Smooth page transitions** with Framer Motion
- **Staggered content loading** for visual appeal
- **Hover effects** on cards and buttons
- **Fade-in animations** on scroll
- **Scale transitions** for interactive elements
- **Responsive design** for all devices

## Architecture

### Frontend Stack

- **Next.js 16** - React framework with built-in optimization
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Axios** - HTTP client
- **SWR** - Data fetching with caching

### Backend Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin request handling

## File Structure

### Frontend (`/`)

```
app/
├── layout.tsx              # Root layout with theme provider
├── page.tsx                # Home page
├── navigation.tsx          # Navigation component
├── issues/                 # Issues listing page
├── projects/               # Projects listing page
├── guides/                 # Guides listing page
├── programs/               # Programs listing page
├── profile/                # User profile page
├── auth/                   # Authentication pages
│   ├── login/
│   └── register/
└── api/                    # API routes

components/
├── animations.tsx          # Framer Motion animations
├── hero.tsx                # Landing hero section
├── features.tsx            # Feature showcase
├── footer.tsx              # Footer component
├── navigation.tsx          # Navigation bar
├── issue-search.tsx        # Issue search component
├── issues-list.tsx         # Issues list component
├── project-grid.tsx        # Projects grid component
├── profile-header.tsx      # Profile header
├── profile-content.tsx     # Profile content
├── theme-provider.tsx      # Theme management
└── ui/                     # Radix UI components

lib/
├── api.ts                  # API client with all services
├── types.ts                # TypeScript types
└── utils.ts                # Utility functions

context/
└── auth-context.tsx        # Authentication context

hooks/
├── use-user.ts             # User hook
├── use-issues.ts           # Issues hook
├── use-projects.ts         # Projects hook
├── use-guides.ts           # Guides hook
├── use-programs.ts         # Programs hook
└── use-skills.ts           # Skills hook
```

### Backend (`/backend`)

```
src/
├── index.js                # Entry point
├── config/
│   └── database.js         # MongoDB connection
├── models/                 # MongoDB schemas
│   ├── User.js
│   ├── Project.js
│   ├── Issue.js
│   ├── Guide.js
│   ├── Program.js
│   ├── Bookmark.js
│   └── UserContribution.js
├── controllers/            # Business logic
│   ├── authController.js
│   ├── projectController.js
│   ├── issueController.js
│   ├── guideController.js
│   ├── programController.js
│   └── userController.js
├── routes/                 # API routes
│   ├── authRoutes.js
│   ├── projectRoutes.js
│   ├── issueRoutes.js
│   ├── guideRoutes.js
│   ├── programRoutes.js
│   └── userRoutes.js
├── middleware/             # Custom middleware
│   └── auth.js
└── utils/                  # Utilities
    └── auth.js

seed.js                    # Database seeding script
.env                       # Environment variables
package.json               # Dependencies
```

## API Reference

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}

Response: 201 Created
{
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": { ... }
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response: 200 OK
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": { ... }
}
```

#### Get Profile
```http
GET /api/auth/profile
Authorization: Bearer <token>

Response: 200 OK
{
  "_id": "user_id",
  "email": "user@example.com",
  "name": "John Doe",
  "skills": ["JavaScript", "React"],
  ...
}
```

### Project Endpoints

#### Get All Projects
```http
GET /api/projects?difficulty=Beginner&language=JavaScript
Response: 200 OK
[
  {
    "_id": "project_id",
    "name": "React",
    "description": "...",
    ...
  }
]
```

#### Get Project by ID
```http
GET /api/projects/:id
Response: 200 OK
{ ... }
```

### Issue Endpoints

#### Get All Issues
```http
GET /api/issues?difficulty=Good+First+Issue&status=Open
Response: 200 OK
[{ ... }]
```

#### Search Issues
```http
GET /api/issues/search?q=fix+bug
Response: 200 OK
[{ ... }]
```

### Guide Endpoints

#### Get All Guides
```http
GET /api/guides?category=Getting+Started&difficulty=Beginner
Response: 200 OK
[{ ... }]
```

### Program Endpoints

#### Get All Programs
```http
GET /api/programs
Response: 200 OK
[{ ... }]
```

### User Action Endpoints

#### Add Bookmark
```http
POST /api/user/bookmarks
Authorization: Bearer <token>
Content-Type: application/json

{
  "issue_id": "issue_id"
}

Response: 201 Created
```

#### Get Bookmarks
```http
GET /api/user/bookmarks
Authorization: Bearer <token>
Response: 200 OK
[{ ... }]
```

#### Add Contribution
```http
POST /api/user/contributions
Authorization: Bearer <token>
Content-Type: application/json

{
  "project_id": "project_id",
  "issue_id": "issue_id",
  "contribution_type": "Pull Request"
}

Response: 201 Created
```

## Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gtg-database
JWT_SECRET=your-super-secret-key
FRONTEND_URL=http://localhost:3000
```

## Authentication Flow

1. User registers or logs in
2. Backend validates credentials and returns JWT token
3. Token is stored in localStorage
4. All API requests include `Authorization: Bearer <token>` header
5. Backend middleware verifies token for protected routes
6. Token expires after 7 days

## Data Models

### User
```typescript
{
  email: string (unique)
  password: string (hashed)
  name: string
  bio: string
  avatar: string
  skills: string[]
  interests: string[]
  github_username: string
  contributions_count: number
  bookmarks: ObjectId[]
  contributions: ObjectId[]
  created_at: Date
  updated_at: Date
}
```

### Project
```typescript
{
  name: string
  description: string
  url: string
  github_url: string
  language: string[]
  stars: number
  forks: number
  contributors: number
  difficulty_level: string (Beginner | Intermediate | Advanced)
  category: string
  is_featured: boolean
  program_id: ObjectId
  created_at: Date
  updated_at: Date
}
```

### Issue
```typescript
{
  project_id: ObjectId
  title: string
  description: string
  difficulty: string (Good First Issue | Bug | Feature | Documentation | Help Wanted)
  status: string (Open | In Progress | Closed)
  labels: string[]
  required_skills: string[]
  comments_count: number
  reactions_count: number
  created_at: Date
  updated_at: Date
}
```

## Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcryptjs
- ✅ CORS protection
- ✅ Helmet security headers
- ✅ Input validation
- ✅ MongoDB injection protection via Mongoose
- ✅ Secure environment variables

## Performance Optimizations

- 📦 Image optimization with Next.js Image
- 🎯 Code splitting and lazy loading
- 🗃️ MongoDB indexing on frequently queried fields
- 💾 Frontend caching with SWR
- ⚡ Minification and compression
- 🔄 Request debouncing for searches

## Testing

### Manual Testing

1. Test authentication flow
2. Verify CRUD operations for each resource
3. Test search and filter functionality
4. Verify animations load smoothly
5. Test responsive design on mobile

### API Testing

Use Postman or similar tool to test endpoints:
1. Create API collection
2. Set base URL to `http://localhost:5000/api`
3. Test each endpoint with various parameters
4. Verify error handling

## Deployment Checklist

- [ ] Set secure `JWT_SECRET` in production
- [ ] Update `MONGODB_URI` to production database
- [ ] Update `FRONTEND_URL` for CORS
- [ ] Enable HTTPS
- [ ] Set appropriate database indexes
- [ ] Configure environment variables
- [ ] Run database migrations
- [ ] Test all endpoints in production
- [ ] Monitor error logs
- [ ] Set up backup strategy
- [ ] Configure rate limiting
- [ ] Enable caching headers

## Troubleshooting

### Common Issues

**Backend won't start**
- Check if port 5000 is available
- Verify MongoDB connection
- Check environment variables

**Frontend can't connect to API**
- Verify backend is running
- Check `NEXT_PUBLIC_API_URL` is correct
- Check CORS settings in backend

**Database errors**
- Ensure MongoDB is running
- Check connection string
- Verify database user permissions

**Authentication not working**
- Clear localStorage
- Check JWT_SECRET matches
- Verify token format in requests

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
5. Follow the code of conduct

## License

MIT License - see LICENSE file for details

## Support

For issues or questions:
- Create an issue on GitHub
- Check existing documentation
- Review API reference
- Check backend logs for errors

## Roadmap

- [ ] User-generated content (tutorials)
- [ ] Social features (follow developers)
- [ ] Advanced filtering and recommendations
- [ ] Integration with GitHub API
- [ ] Real-time notifications
- [ ] Analytics dashboard
- [ ] Mobile app
