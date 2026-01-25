# Setting Up MongoDB

You have two options: use MongoDB Atlas (cloud) or install MongoDB locally.

## Option 1: MongoDB Atlas (Recommended for Development)

MongoDB Atlas is free and requires no local installation.

### Step 1: Create Free Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Sign up with email or Google account
4. Verify email

### Step 2: Create a Database
1. Click "Create" a new project (or use default)
2. Click "Build a Database"
3. Select "M0 Free" (always free tier)
4. Choose AWS, any region
5. Click "Create Deployment"

### Step 3: Set Up Access
1. Create Database User:
   - Username: `gtguser` (or your choice)
   - Password: Create a strong password (copy it!)
   - Click "Create User"

2. Add IP Address:
   - Click "Add My Current IP Address"
   - Or add `0.0.0.0/0` to allow all IPs (development only)
   - Click "Finish and Close"

3. Wait for deployment (2-3 minutes)

### Step 4: Get Connection String
1. Click "Connect" button
2. Select "Drivers"
3. Choose "Node.js" and version "4.0 or later"
4. Copy the connection string

### Step 5: Update .env File

The connection string will look like:
```
mongodb+srv://gtguser:your_password@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
```

Update `backend/.env`:
```
MONGODB_URI=mongodb+srv://gtguser:your_password@cluster0.abc123.mongodb.net/gtg-database?retryWrites=true&w=majority
```

### Step 6: Restart Backend
```bash
# Stop the running backend (Ctrl+C)
# Restart it
cd backend
npm run dev
```

You should see: "MongoDB connected successfully"

---

## Option 2: Install MongoDB Locally

### Windows

1. **Download MongoDB Community Server**
   - Go to https://www.mongodb.com/try/download/community
   - Select Windows (msi)
   - Download latest version

2. **Run Installer**
   - Double-click the .msi file
   - Accept license
   - Choose "Complete" installation
   - Install MongoDB as a service (recommended)
   - Click "Install"

3. **Verify Installation**
```bash
mongod --version
```

4. **Start MongoDB Service**
```bash
# MongoDB should start automatically
# Or manually:
net start MongoDB
```

5. **Verify Connection**
```bash
mongo --version
```

### macOS

```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Stop MongoDB
brew services stop mongodb-community

# Verify
mongo --version
```

### Linux (Ubuntu/Debian)

```bash
# Import GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

# Install MongoDB
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod

# Enable on startup
sudo systemctl enable mongod

# Verify
mongod --version
```

---

## Testing Your Connection

Once MongoDB is running (either Atlas or local), test it:

```bash
# In a new terminal
cd backend
npm run dev
```

You should see:
```
MongoDB connected successfully
Server running on port 5000
```

---

## Seeding Sample Data

Once MongoDB is connected:

```bash
cd backend
npm run seed
```

This will add:
- Sample projects
- Sample issues
- Sample guides
- Sample programs

---

## Troubleshooting

### "Connection refused" Error
- **Atlas**: Check IP whitelist (add 0.0.0.0/0 for development)
- **Local**: Ensure MongoDB service is running
  - Windows: `net start MongoDB`
  - macOS: `brew services start mongodb-community`
  - Linux: `sudo systemctl start mongod`

### Wrong Connection String
- Copy the connection string again from Atlas
- Replace `<password>` with actual password
- Ensure no special characters in password (or URL encode them)

### Authentication Failed
- Check username and password
- Ensure user was created in the correct database
- Reset password in Atlas if needed

### Still Getting Connection Errors
- The app will still run without MongoDB
- But features requiring database won't work
- Check MongoDB status and connection string

---

## Quick Reference

### MongoDB Atlas Connection String Format
```
mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority
```

### Local MongoDB Connection String
```
mongodb://localhost:27017/gtg-database
```

### Check MongoDB Status

**Windows:**
```bash
Get-Service MongoDB
```

**macOS:**
```bash
brew services list
```

**Linux:**
```bash
sudo systemctl status mongod
```

---

## Once Connected

Your backend will have full database functionality:
- Projects database
- Issues database
- User profiles
- Bookmarks
- Contributions tracking
- Authentication with user data

The frontend will seamlessly integrate with the backend API!
