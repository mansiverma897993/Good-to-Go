# Quick MongoDB Setup - 5 Minutes

## Fastest Option: Use MongoDB Atlas Cloud

### 1. Create Free Account (1 minute)
- Go to https://www.mongodb.com/cloud/atlas
- Click "Try Free"
- Sign up with email or Google
- Verify your email

### 2. Create Database (2 minutes)
- After login, click "Create a Database"
- Select "M0 Free" tier (always free)
- Choose any region (AWS preferred)
- Click "Create Deployment"
- Wait for it to complete...

### 3. Create Username/Password (1 minute)
- You'll see a prompt to create database user
- Username: `gtguser`
- Password: Create something strong, e.g., `MySecure@Pass123`
- **COPY this password down!**
- Click "Create User"

### 4. Get Connection String (1 minute)
After user is created:
1. Click the "Drivers" tab
2. Select "Node.js" driver
3. Copy the connection string shown
4. It looks like: `mongodb+srv://gtguser:PASSWORD@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority`

### 5. Update Your .env File

Replace the MONGODB_URI in `backend/.env`:

**Old:**
```
MONGODB_URI=mongodb://localhost:27017/gtg-database
```

**New (example):**
```
MONGODB_URI=mongodb+srv://gtguser:MySecure@Pass123@cluster0.abc123.mongodb.net/gtg-database?retryWrites=true&w=majority
```

⚠️ **IMPORTANT:** Replace the placeholders:
- `gtguser` → your username
- `MySecure@Pass123` → your password
- `cluster0.abc123` → your actual cluster name

### 6. Restart Backend
```bash
# Stop backend (Ctrl+C in the terminal)
# Then restart:
cd backend
npm run dev
```

You should see: **"MongoDB connected successfully"**

---

## If You Have Special Characters in Password

If your password has special characters like `@`, `#`, etc., you need to URL encode them:

- `@` becomes `%40`
- `#` becomes `%23`
- `:` becomes `%3A`

Example:
```
Original password: My@Pass#123
In connection string: My%40Pass%23123
```

---

## Test It Works

1. Backend shows "MongoDB connected successfully"
2. Run: `npm run seed` to add sample data
3. Visit http://localhost:3001/projects - you'll see real data!

---

## Problems?

### "Authentication failed"
- Check username and password match exactly
- Ensure they're URL encoded if they have special characters

### "Connection refused"
- Check you're using the MongoDB Atlas connection string (not localhost)
- Wait 5-10 minutes after creating the database

### Still having issues?
The app still works without MongoDB! You can:
- Keep using the sample data mode
- Try again later with MongoDB
- Or install MongoDB locally (see MONGODB_SETUP.md for full guide)

---

## Install MongoDB Locally (Alternative)

If you prefer local MongoDB:

**Windows:**
1. Download: https://www.mongodb.com/try/download/community
2. Run installer → Next → Next → Install
3. MongoDB runs automatically

**macOS:**
```bash
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongod
```

Then use this in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/gtg-database
```

---

**Next Step:** Update your `.env` file and restart the backend! 🚀
