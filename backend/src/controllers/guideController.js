import Guide from '../models/Guide.js';

export const getAllGuides = async (req, res) => {
  try {
    const { category, difficulty } = req.query;
    let query = {};

    if (category) query.category = category;
    if (difficulty) query.difficulty = difficulty;

    const guides = await Guide.find(query).sort({ created_at: -1 });

    res.json(guides);
  } catch (error) {
    console.error('Get guides error:', error);
    res.status(500).json({ message: 'Failed to fetch guides' });
  }
};

export const getGuideById = async (req, res) => {
  try {
    const guide = await Guide.findById(req.params.id);

    if (!guide) {
      return res.status(404).json({ message: 'Guide not found' });
    }

    res.json(guide);
  } catch (error) {
    console.error('Get guide error:', error);
    res.status(500).json({ message: 'Failed to fetch guide' });
  }
};

export const createGuide = async (req, res) => {
  try {
    const guideData = req.body;
    const guide = new Guide(guideData);
    await guide.save();
    res.status(201).json({ message: 'Guide created successfully', guide });
  } catch (error) {
    console.error('Create guide error:', error);
    res.status(500).json({ message: 'Failed to create guide' });
  }
};

export const updateGuide = async (req, res) => {
  try {
    const guide = await Guide.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!guide) {
      return res.status(404).json({ message: 'Guide not found' });
    }

    res.json({ message: 'Guide updated successfully', guide });
  } catch (error) {
    console.error('Update guide error:', error);
    res.status(500).json({ message: 'Failed to update guide' });
  }
};

export const deleteGuide = async (req, res) => {
  try {
    const guide = await Guide.findByIdAndDelete(req.params.id);

    if (!guide) {
      return res.status(404).json({ message: 'Guide not found' });
    }

    res.json({ message: 'Guide deleted successfully' });
  } catch (error) {
    console.error('Delete guide error:', error);
    res.status(500).json({ message: 'Failed to delete guide' });
  }
};
