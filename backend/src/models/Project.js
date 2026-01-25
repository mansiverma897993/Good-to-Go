import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    github_url: {
      type: String,
      required: true,
    },
    language: [String],
    stars: {
      type: Number,
      default: 0,
    },
    forks: {
      type: Number,
      default: 0,
    },
    contributors: {
      type: Number,
      default: 0,
    },
    difficulty_level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },
    category: String,
    image_url: String,
    is_featured: {
      type: Boolean,
      default: false,
    },
    program_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Program',
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('Project', projectSchema);
