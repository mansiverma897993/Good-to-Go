# Good-to-Go Backend API

Complete Node.js + Express + MongoDB backend for the Good-to-Go platform.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gtg-database
JWT_SECRET=your-super-secret-jwt-key-change-in-production
FRONTEND_URL=http://localhost:3000
```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Login user
- `GET /profile` - Get current user profile (requires auth)
- `PUT /profile` - Update profile (requires auth)
- `GET /user/:id` - Get user by ID

### Projects (`/api/projects`)
- `GET /` - Get all projects (with filters)
- `GET /:id` - Get project by ID
- `POST /` - Create project
- `PUT /:id` - Update project
- `DELETE /:id` - Delete project

### Issues (`/api/issues`)
- `GET /` - Get all issues (with filters)
- `GET /:id` - Get issue by ID
- `GET /search?q=query` - Search issues
- `POST /` - Create issue
- `PUT /:id` - Update issue
- `DELETE /:id` - Delete issue

### Guides (`/api/guides`)
- `GET /` - Get all guides (with filters)
- `GET /:id` - Get guide by ID
- `POST /` - Create guide
- `PUT /:id` - Update guide
- `DELETE /:id` - Delete guide

### Programs (`/api/programs`)
- `GET /` - Get all programs
- `GET /:id` - Get program by ID
- `POST /` - Create program
- `PUT /:id` - Update program
- `DELETE /:id` - Delete program

### User Actions (`/api/user`)
- `POST /bookmarks` - Add bookmark (requires auth)
- `DELETE /bookmarks/:bookmarkId` - Remove bookmark (requires auth)
- `GET /bookmarks` - Get user bookmarks (requires auth)
- `POST /contributions` - Add contribution (requires auth)
- `GET /contributions/:userId?` - Get contributions

## Database Models

### User
- email (string, unique)
- password (string)
- name (string)
- bio (string)
- avatar (string)
- skills (array)
- interests (array)
- github_username (string)
- contributions_count (number)

### Project
- name (string)
- description (string)
- url (string)
- github_url (string)
- language (array)
- stars (number)
- forks (number)
- difficulty_level (enum)
- category (string)
- is_featured (boolean)

### Issue
- project_id (ref)
- title (string)
- description (string)
- difficulty (enum)
- status (enum)
- labels (array)
- required_skills (array)

### Guide
- title (string)
- content (string)
- category (enum)
- difficulty (enum)
- author (string)
- read_time (number)

### Program
- name (string)
- description (string)
- type (enum)
- start_date (date)
- end_date (date)
- participants (number)
- image_url (string)

### Bookmark
- user_id (ref)
- issue_id (ref)

### UserContribution
- user_id (ref)
- project_id (ref)
- issue_id (ref)
- contribution_type (enum)
- status (enum)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/gtg-database |
| JWT_SECRET | Secret key for JWT tokens | your-secret-key |
| FRONTEND_URL | Frontend URL for CORS | http://localhost:3000 |
| NODE_ENV | Environment | development |

## Technologies Used

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests
- **Helmet** - Security headers

## Error Handling

All endpoints return consistent error responses:

```json
{
  "message": "Error message",
  "error": {}
}
```

## Authentication

Use JWT tokens in the `Authorization` header:
```
Authorization: Bearer <token>
```

The token is returned after successful login/registration and is valid for 7 days.

## Connecting Frontend

Update the frontend's `.env.local` with:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Then use the API client from `lib/api.ts` to make requests.
