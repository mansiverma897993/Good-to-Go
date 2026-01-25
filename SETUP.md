# Good-to-Go - Complete Setup Guide

A full-stack platform for discovering and contributing to open source projects with animations and a complete backend.

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)

## 🏗️ Project Structure

```
Good-to-Go/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── issues/            # Issues page
│   ├── projects/          # Projects page
│   ├── guides/            # Learning guides
│   ├── programs/          # Programs listing
│   └── ...
├── backend/               # Node.js + Express backend
│   ├── src/
│   │   ├── models/        # MongoDB schemas
│   │   ├── controllers/   # Business logic
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Auth & error handling
│   │   └── config/        # Configuration
│   ├── package.json
│   ├── seed.js            # Database seeding
│   └── .env
├── components/            # React components
├── lib/                   # Utilities & API client
├── public/                # Static assets
└── package.json
```

## ✅ Prerequisites

- **Node.js**: v16 or higher
- **npm** or **yarn**
- **MongoDB**: Local or cloud instance (MongoDB Atlas recommended)
- **Git**: For version control
- **Code Editor**: VS Code recommended

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Good-to-Go
```

### 2. Install Backend Dependencies

```bash
npm run backend:install
```

### 3. Setup Environment Variables

#### Backend (.env)
Create `backend/.env`:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gtg-database
JWT_SECRET=your-super-secret-jwt-key-change-in-production
FRONTEND_URL=http://localhost:3000
```

#### Frontend (.env.local)
Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 4. Start MongoDB

**Local MongoDB:**
```bash
mongod
```

**Or use MongoDB Atlas:**
- Create account at https://www.mongodb.com/cloud/atlas
- Create a cluster and get connection string
- Update `MONGODB_URI` in `backend/.env`

### 5. Seed the Database

```bash
npm run backend:seed
```

This populates the database with sample projects, issues, and guides.

### 6. Install Frontend Dependencies

```bash
npm install
```

### 7. Start the Development Servers

#### Terminal 1 - Backend:
```bash
npm run backend:dev
```

#### Terminal 2 - Frontend:
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser!

## 💾 Backend Setup

### Database Models

#### User
```typescript
{
  email: String (unique),
  password: String (hashed),
  name: String,
  bio: String,
  avatar: String,
  skills: String[],
  interests: String[],
  github_username: String,
  contributions_count: Number,
  bookmarks: ObjectId[],
  contributions: ObjectId[]
}
```

#### Project
```typescript
{
  name: String,
  description: String,
  url: String,
  github_url: String,
  language: String[],
  stars: Number,
  forks: Number,
  contributors: Number,
  difficulty_level: "Beginner" | "Intermediate" | "Advanced",
  category: String,
  is_featured: Boolean,
  program_id: ObjectId
}
```

#### Issue
```typescript
{
  project_id: ObjectId,
  title: String,
  description: String,
  difficulty: "Good First Issue" | "Bug" | "Feature" | "Documentation" | "Help Wanted",
  status: "Open" | "In Progress" | "Closed",
  labels: String[],
  required_skills: String[],
  comments_count: Number,
  reactions_count: Number
}
```

#### Guide
```typescript
{
  title: String,
  content: String,
  category: "Getting Started" | "Git & GitHub" | "Contributing" | "Best Practices",
  difficulty: "Beginner" | "Intermediate" | "Advanced",
  author: String,
  read_time: Number
}
```

#### Program
```typescript
{
  name: String,
  description: String,
  type: "GSOC" | "SWOC" | "Hacktoberfest" | "GSSOC" | "Summer of Bitcoin" | "Outreachy",
  start_date: Date,
  end_date: Date,
  participants: Number,
  image_url: String,
  url: String
}
```

#### Bookmark & UserContribution
Track user bookmarks and contributions to projects.

### API Endpoints

All endpoints are prefixed with `/api`

#### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/profile` - Get profile (auth required)
- `PUT /auth/profile` - Update profile (auth required)
- `GET /auth/user/:id` - Get user by ID

#### Projects
- `GET /projects` - Get all projects
- `GET /projects/:id` - Get project
- `POST /projects` - Create project
- `PUT /projects/:id` - Update project
- `DELETE /projects/:id` - Delete project

#### Issues
- `GET /issues` - Get all issues
- `GET /issues/:id` - Get issue
- `GET /issues/search?q=query` - Search issues
- `POST /issues` - Create issue
- `PUT /issues/:id` - Update issue
- `DELETE /issues/:id` - Delete issue

#### Guides
- `GET /guides` - Get all guides
- `GET /guides/:id` - Get guide
- `POST /guides` - Create guide
- `PUT /guides/:id` - Update guide
- `DELETE /guides/:id` - Delete guide

#### Programs
- `GET /programs` - Get all programs
- `GET /programs/:id` - Get program
- `POST /programs` - Create program
- `PUT /programs/:id` - Update program
- `DELETE /programs/:id` - Delete program

#### User Actions
- `POST /user/bookmarks` - Add bookmark (auth)
- `DELETE /user/bookmarks/:id` - Remove bookmark (auth)
- `GET /user/bookmarks` - Get bookmarks (auth)
- `POST /user/contributions` - Add contribution (auth)
- `GET /user/contributions/:userId?` - Get contributions

## 🎨 Frontend Features

### Animated Components

- **FadeIn**: Fade in animation on scroll
- **ScaleIn**: Scale animation on scroll
- **StaggerContainer**: Stagger children animations
- **HoverScale**: Scale on hover
- **Rotate**: Continuous rotation
- **Pulse**: Pulsing animation

### Pages

1. **Home** - Hero section with featured projects
2. **Projects** - Browse and filter projects
3. **Issues** - Search and find issues to work on
4. **Guides** - Learning resources
5. **Programs** - Available opportunity programs
6. **Profile** - User profile and contributions
7. **Login/Register** - Authentication

### API Integration

Uses axios client with automatic token injection:

```typescript
import { projectService, issueService, authService } from '@/lib/api'

// Fetch projects
const projects = await projectService.getAll({ difficulty: 'Beginner' })

// Search issues
const results = await issueService.search('fix bug')

// Login
const { token, user } = await authService.login(email, password)
```

## 🏃 Running the Application

### Development Mode

```bash
# Terminal 1 - Backend
npm run backend:dev

# Terminal 2 - Frontend
npm run dev
```

### Production Mode

```bash
# Build frontend
npm run build

# Start backend
npm run backend:start

# Start frontend
npm start
```

## 🌐 Deployment

### Backend Deployment (Heroku)

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=<your-mongodb-url>
   heroku config:set JWT_SECRET=<your-secret>
   ```
5. Deploy: `git push heroku main`

### Frontend Deployment (Vercel)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import repository
4. Add environment variable: `NEXT_PUBLIC_API_URL=<your-api-url>`
5. Deploy

### MongoDB Atlas

1. Create cluster at https://www.mongodb.com/cloud/atlas
2. Create database user
3. Whitelist IP addresses
4. Get connection string
5. Update `MONGODB_URI` in backend environment

## 🔐 Security Considerations

- Change `JWT_SECRET` in production
- Use HTTPS in production
- Set secure CORS origins
- Implement rate limiting
- Validate all inputs
- Use environment variables for secrets
- Keep dependencies updated

## 📦 Technologies

### Frontend
- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Radix UI (components)
- Axios (HTTP client)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (authentication)
- bcryptjs (password hashing)
- Helmet (security)
- CORS

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env`
- Verify IP whitelist on MongoDB Atlas

### API Connection Error
- Verify backend is running on port 5000
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Check CORS settings in backend

### Port Already in Use
```bash
# Kill process using port
lsof -i :5000  # Find process
kill -9 <PID>  # Kill it
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

## 💡 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use this in your projects!
