import Issue from '../models/Issue.js';

export const getAllIssues = async (req, res) => {
  try {
    const { projectId, difficulty, status, labels } = req.query;
    let query = {};

    if (projectId) query.project_id = projectId;
    if (difficulty) query.difficulty = difficulty;
    if (status) query.status = status;
    if (labels) query.labels = { $in: Array.isArray(labels) ? labels : [labels] };

    const issues = await Issue.find(query)
      .populate('project_id')
      .sort({ created_at: -1 });

    res.json(issues);
  } catch (error) {
    console.error('Get issues error:', error);
    res.status(500).json({ message: 'Failed to fetch issues' });
  }
};

export const getIssueById = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id).populate('project_id');

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    res.json(issue);
  } catch (error) {
    console.error('Get issue error:', error);
    res.status(500).json({ message: 'Failed to fetch issue' });
  }
};

export const createIssue = async (req, res) => {
  try {
    const issueData = req.body;
    const issue = new Issue(issueData);
    await issue.save();
    res.status(201).json({ message: 'Issue created successfully', issue });
  } catch (error) {
    console.error('Create issue error:', error);
    res.status(500).json({ message: 'Failed to create issue' });
  }
};

export const updateIssue = async (req, res) => {
  try {
    const issue = await Issue.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    res.json({ message: 'Issue updated successfully', issue });
  } catch (error) {
    console.error('Update issue error:', error);
    res.status(500).json({ message: 'Failed to update issue' });
  }
};

export const deleteIssue = async (req, res) => {
  try {
    const issue = await Issue.findByIdAndDelete(req.params.id);

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    res.json({ message: 'Issue deleted successfully' });
  } catch (error) {
    console.error('Delete issue error:', error);
    res.status(500).json({ message: 'Failed to delete issue' });
  }
};

export const searchIssues = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ message: 'Search query required' });
    }

    const issues = await Issue.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
      ],
    })
      .populate('project_id')
      .limit(20);

    res.json(issues);
  } catch (error) {
    console.error('Search issues error:', error);
    res.status(500).json({ message: 'Failed to search issues' });
  }
};
