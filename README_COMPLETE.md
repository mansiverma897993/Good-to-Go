# 🚀 Good-to-Go - Open Source Contribution Platform

A fully functional animated website with a complete Node.js backend and MongoDB database. Discover open source projects, find issues to work on, and learn how to contribute!

![Next.js](https://img.shields.io/badge/next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/react-18.3-blue?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/node.js-18+-green?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/mongodb-6.0+-green?style=flat-square&logo=mongodb)
![TypeScript](https://img.shields.io/badge/typescript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4.0-blue?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎯 Core Features
- **500+ Open Source Projects** - Browse and filter by difficulty, language, and category
- **10,000+ Issues** - Find "Good First Issues" and filter by difficulty type
- **100+ Learning Guides** - Tutorials on contributing, Git, GitHub, and best practices
- **Major Programs** - GSOC, SWOC, Hacktoberfest, Outreachy, and more
- **User Profiles** - Track contributions, bookmark issues, and manage your profile

### 🎨 Advanced Features
- **Smooth Animations** - Built with Framer Motion for delightful UX
- **Dark Mode Support** - Beautiful theming with next-themes
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **JWT Authentication** - Secure token-based user authentication
- **Advanced Search** - Find issues by keywords, skills, and difficulty
- **Bookmarking** - Save issues for later reference
- **Contribution Tracking** - Track your open source contributions

## 🏗️ Tech Stack

### Frontend
- **Next.js 16** - React framework with optimization
- **React 18** - UI library
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Axios** - HTTP client
- **SWR** - Data fetching and caching

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin request handling

## 🚀 Quick Start

### Prerequisites
- Node.js v16 or higher
- npm or yarn
- MongoDB (local or cloud)
- Git

### Installation

#### On Windows:
```bash
# Double-click setup.bat
setup.bat
```

#### On Mac/Linux:
```bash
# Make script executable
chmod +x setup.sh

# Run setup
./setup.sh
```

#### Manual Setup:
```bash
# 1. Install all dependencies
npm install
npm run backend:install

# 2. Create environment files
# .env.local - Frontend
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# backend/.env - Backend
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gtg-database
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:3000

# 3. Seed the database (optional)
npm run backend:seed
```

### Running the Application

```bash
# Terminal 1 - Start Backend
npm run backend:dev

# Terminal 2 - Start Frontend
npm run dev

# Open http://localhost:3000 in your browser
```

## 📁 Project Structure

```
Good-to-Go/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── issues/            # Issues page
│   ├── projects/          # Projects page
│   ├── guides/            # Guides page
│   ├── programs/          # Programs page
│   ├── auth/              # Auth pages
│   └── profile/           # Profile page
├── backend/               # Node.js + Express backend
│   ├── src/
│   │   ├── models/        # MongoDB schemas
│   │   ├── controllers/   # Business logic
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Auth & error handling
│   │   ├── config/        # Configuration
│   │   └── utils/         # Utilities
│   ├── package.json
│   ├── seed.js            # Database seeding
│   └── .env
├── components/            # React components
├── lib/                   # Utilities & API client
├── context/               # React context
├── hooks/                 # Custom hooks
├── public/                # Static assets
└── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get profile (auth required)
- `PUT /api/auth/profile` - Update profile (auth required)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Issues
- `GET /api/issues` - Get all issues
- `GET /api/issues/:id` - Get issue by ID
- `GET /api/issues/search?q=query` - Search issues
- `POST /api/issues` - Create issue
- `PUT /api/issues/:id` - Update issue
- `DELETE /api/issues/:id` - Delete issue

### Guides
- `GET /api/guides` - Get all guides
- `GET /api/guides/:id` - Get guide by ID
- `POST /api/guides` - Create guide
- `PUT /api/guides/:id` - Update guide
- `DELETE /api/guides/:id` - Delete guide

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get program by ID

### User Actions
- `POST /api/user/bookmarks` - Add bookmark
- `DELETE /api/user/bookmarks/:id` - Remove bookmark
- `GET /api/user/bookmarks` - Get bookmarks
- `POST /api/user/contributions` - Add contribution
- `GET /api/user/contributions` - Get contributions

## 🎬 Animations

The site features smooth animations powered by Framer Motion:

- **FadeIn** - Fade elements in on scroll
- **ScaleIn** - Scale elements in on scroll
- **StaggerContainer** - Stagger children animations
- **HoverScale** - Scale on hover effects
- **Rotate** - Continuous rotation
- **Pulse** - Pulsing animation

```typescript
import { FadeIn, ScaleIn, StaggerContainer } from '@/components/animations'

// Fade in element on scroll
<FadeIn delay={0.2}>
  <h1>My Heading</h1>
</FadeIn>

// Stagger children animations
<StaggerContainer staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggerContainer>
```

## 🔐 Authentication

- Token-based JWT authentication
- Secure password hashing with bcryptjs
- Protected API routes
- 7-day token expiration
- Automatic token refresh support

## 📊 Database Models

### User
```typescript
{
  email: string (unique)
  password: string (hashed)
  name: string
  bio?: string
  avatar?: string
  skills: string[]
  interests: string[]
  github_username?: string
  contributions_count: number
  bookmarks: ObjectId[]
  contributions: ObjectId[]
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
  difficulty_level: "Beginner" | "Intermediate" | "Advanced"
  category: string
  is_featured: boolean
}
```

### Issue
```typescript
{
  project_id: ObjectId
  title: string
  description: string
  difficulty: "Good First Issue" | "Bug" | "Feature" | "Documentation" | "Help Wanted"
  status: "Open" | "In Progress" | "Closed"
  labels: string[]
  required_skills: string[]
  comments_count: number
  reactions_count: number
}
```

## 🌐 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gtg-database
JWT_SECRET=your-super-secret-jwt-key
FRONTEND_URL=http://localhost:3000
```

## 📦 Available Scripts

### Frontend
```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

### Backend
```bash
npm run backend:dev      # Start backend in development mode
npm run backend:start    # Start backend in production mode
npm run backend:seed     # Seed database with sample data
npm run backend:install  # Install backend dependencies
```

## 🚀 Deployment

### Heroku (Backend)
```bash
heroku create your-app-name
heroku config:set MONGODB_URI=<your-mongodb-url>
heroku config:set JWT_SECRET=<your-secret>
git push heroku main
```

### Vercel (Frontend)
1. Push to GitHub
2. Import in Vercel
3. Set `NEXT_PUBLIC_API_URL` environment variable
4. Deploy

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📚 Documentation

- [Setup Guide](SETUP.md) - Detailed setup instructions
- [Full Documentation](DOCUMENTATION.md) - API reference and architecture
- [Backend README](backend/README.md) - Backend-specific information

## 🐛 Troubleshooting

### Backend won't start
- Ensure MongoDB is running
- Check port 5000 is available
- Verify environment variables in `.env`

### Frontend can't connect to API
- Verify backend is running on port 5000
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Check browser console for CORS errors

### Database connection issues
- Ensure MongoDB is running locally or connection string is correct
- Check MongoDB Atlas network whitelist
- Verify database user permissions

## 📞 Support

For issues or questions:
1. Check [DOCUMENTATION.md](DOCUMENTATION.md)
2. Review [backend/README.md](backend/README.md)
3. Check the troubleshooting section above
4. Create a GitHub issue

## 🎯 Roadmap

- [ ] GitHub OAuth integration
- [ ] Real-time notifications
- [ ] Advanced recommendation engine
- [ ] User achievements and badges
- [ ] Community forums
- [ ] Mobile app
- [ ] Analytics dashboard
- [ ] Integration with more platforms

## 💡 Credits

Built with ❤️ for the open source community

---

**Happy Contributing! 🚀**
