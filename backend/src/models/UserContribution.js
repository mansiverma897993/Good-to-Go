import mongoose from 'mongoose';

const contributionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    issue_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issue',
    },
    contribution_type: {
      type: String,
      enum: ['Pull Request', 'Issue', 'Comment'],
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed', 'Merged'],
      default: 'Pending',
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('UserContribution', contributionSchema);
