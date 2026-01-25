import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema(
  {
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: String,
    labels: [String],
    difficulty: {
      type: String,
      enum: [
        'Good First Issue',
        'Bug',
        'Feature',
        'Documentation',
        'Help Wanted',
      ],
      default: 'Help Wanted',
    },
    status: {
      type: String,
      enum: ['Open', 'In Progress', 'Closed'],
      default: 'Open',
    },
    comments_count: {
      type: Number,
      default: 0,
    },
    reactions_count: {
      type: Number,
      default: 0,
    },
    required_skills: [String],
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('Issue', issueSchema);
