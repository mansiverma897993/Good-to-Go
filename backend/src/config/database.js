import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  try {
    const mongoUri =
      process.env.MONGODB_URI ||
      'mongodb://localhost:27017/gtg-database';

    // Only try to connect if it looks like a valid URI
    if (!mongoUri.includes('cluster') && !mongoUri.includes('localhost')) {
      console.log('⚠️ Using sample data mode (no database configured)');
      return false;
    }

    await mongoose.connect(mongoUri, {
      connectTimeoutMS: 3000,
      serverSelectionTimeoutMS: 3000,
      retryWrites: true
    });
    
    console.log('✅ MongoDB connected successfully');
    isConnected = true;
    return true;
  } catch (error) {
    // Silently fail - app works without database
    console.log('📦 Running in sample data mode (MongoDB not available)');
    isConnected = false;
    return false;
  }
};

export const isDBConnected = () => isConnected;
