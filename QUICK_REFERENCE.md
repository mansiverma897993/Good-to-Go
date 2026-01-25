# Quick Reference Guide

## 🚀 Getting Started (5 minutes)

### Step 1: Setup
```bash
# Windows
setup.bat

# Mac/Linux
chmod +x setup.sh && ./setup.sh
```

### Step 2: Start Backend
```bash
npm run backend:dev
```
Backend runs on `http://localhost:5000`

### Step 3: Start Frontend
```bash
npm run dev
```
Frontend runs on `http://localhost:3000`

### Step 4: Seed Database (Optional)
```bash
npm run backend:seed
```

## 📂 Key Files

| File | Purpose |
|------|---------|
| `.env.local` | Frontend environment variables |
| `backend/.env` | Backend environment variables |
| `lib/api.ts` | API client for frontend |
| `backend/src/index.js` | Backend server entry point |
| `backend/seed.js` | Database seeding script |

## 🔌 Common API Calls

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'
```

### Get Projects
```bash
curl http://localhost:5000/api/projects?difficulty=Beginner
```

### Search Issues
```bash
curl "http://localhost:5000/api/issues/search?q=fix"
```

### Get Guides
```bash
curl "http://localhost:5000/api/guides?category=Getting%20Started"
```

## 🔧 Common Commands

```bash
# Frontend
npm run dev              # Start dev server
npm run build            # Build for production
npm run lint             # Run linter

# Backend
npm run backend:dev      # Start backend dev
npm run backend:start    # Start backend prod
npm run backend:seed     # Seed database
npm run backend:install  # Install backend deps
```

## 🗄️ Database Commands

### MongoDB Shell
```bash
# Connect to local MongoDB
mongosh

# Show databases
show dbs

# Use database
use gtg-database

# Show collections
show collections

# View documents
db.users.find()
db.projects.find()
db.issues.find()
```

## 🐛 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5000 in use | Kill process: `lsof -i :5000` then `kill -9 <PID>` |
| MongoDB not running | Start: `mongod` |
| Modules not found | Run: `npm install` or `npm run backend:install` |
| API connection error | Check backend is running and URL is correct |
| Token expired | Re-login to get new token |

## 📝 Frontend Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Home page |
| `/projects` | `app/projects/page.tsx` | Browse projects |
| `/issues` | `app/issues/page.tsx` | Find issues |
| `/guides` | `app/guides/page.tsx` | Learning guides |
| `/programs` | `app/programs/page.tsx` | Opportunity programs |
| `/auth/login` | `app/auth/login/page.tsx` | Login |
| `/auth/register` | `app/auth/register/page.tsx` | Register |
| `/profile` | `app/profile/page.tsx` | User profile |

## 🔌 API Routes

| Endpoint | Method | Auth? |
|----------|--------|-------|
| `/auth/register` | POST | No |
| `/auth/login` | POST | No |
| `/auth/profile` | GET | Yes |
| `/auth/profile` | PUT | Yes |
| `/projects` | GET | No |
| `/issues` | GET | No |
| `/issues/search` | GET | No |
| `/guides` | GET | No |
| `/programs` | GET | No |
| `/user/bookmarks` | GET | Yes |
| `/user/bookmarks` | POST | Yes |
| `/user/contributions` | GET | No |
| `/user/contributions` | POST | Yes |

## 🔑 Environment Variables Needed

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gtg-database
JWT_SECRET=your-super-secret-jwt-key-change-in-production
FRONTEND_URL=http://localhost:3000
```

## 📦 Important Dependencies

### Frontend
- next@16.0.0
- react@18.3.1
- framer-motion@10.16.16
- axios@1.6.2
- tailwindcss@4.1.9

### Backend
- express@4.18.2
- mongoose@8.0.0
- jsonwebtoken@9.1.2
- bcryptjs@2.4.3
- dotenv@16.3.1

## 🎨 Animation Components

```typescript
// Fade in on scroll
<FadeIn delay={0.2}>
  <h1>Hello</h1>
</FadeIn>

// Scale in on scroll
<ScaleIn delay={0.3}>
  <Card>Content</Card>
</ScaleIn>

// Stagger children
<StaggerContainer staggerDelay={0.1}>
  <Item>1</Item>
  <Item>2</Item>
  <Item>3</Item>
</StaggerContainer>

// Hover scale
<HoverScale scale={1.1}>
  <Button>Click me</Button>
</HoverScale>
```

## 🔐 Authentication Flow

1. User registers or logs in
2. Backend returns JWT token
3. Token stored in `localStorage`
4. All requests include `Authorization: Bearer <token>`
5. Backend verifies token on protected routes

## 📊 Database Schema

### Collections
- users
- projects
- issues
- guides
- programs
- bookmarks
- usercontributions

## 💡 Tips

1. Use `.env.example` as template for environment variables
2. Seed database for sample data: `npm run backend:seed`
3. Check browser console for frontend errors
4. Check backend logs for API errors
5. Use Postman or curl for API testing
6. Verify JWT token is stored in localStorage
7. Clear browser cache if changes not appearing
8. Restart both frontend and backend after changing .env

## 📞 Need Help?

- Check [DOCUMENTATION.md](DOCUMENTATION.md)
- Review [SETUP.md](SETUP.md)
- Check [backend/README.md](backend/README.md)
- Look at existing code for examples
- Check browser/server logs for errors

---

Last updated: January 25, 2026
