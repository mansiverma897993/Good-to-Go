import mongoose from 'mongoose';

const programSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [
        'GSOC',
        'SWOC',
        'Hacktoberfest',
        'GSSOC',
        'Summer of Bitcoin',
        'Outreachy',
      ],
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    participants: {
      type: Number,
      default: 0,
    },
    image_url: String,
    url: String,
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('Program', programSchema);
