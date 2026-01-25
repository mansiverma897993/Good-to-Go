import mongoose from 'mongoose';

const guideSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        'Getting Started',
        'Git & GitHub',
        'Contributing',
        'Best Practices',
      ],
      required: true,
    },
    read_time: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('Guide', guideSchema);
