import Bookmark from '../models/Bookmark.js';
import UserContribution from '../models/UserContribution.js';
import User from '../models/User.js';

export const addBookmark = async (req, res) => {
  try {
    const { issue_id } = req.body;

    const bookmark = new Bookmark({
      user_id: req.userId,
      issue_id,
    });

    await bookmark.save();
    await User.findByIdAndUpdate(req.userId, {
      $push: { bookmarks: issue_id },
    });

    res.status(201).json({ message: 'Bookmark added successfully', bookmark });
  } catch (error) {
    console.error('Add bookmark error:', error);
    res.status(500).json({ message: 'Failed to add bookmark' });
  }
};

export const removeBookmark = async (req, res) => {
  try {
    const { bookmarkId } = req.params;

    const bookmark = await Bookmark.findByIdAndDelete(bookmarkId);
    await User.findByIdAndUpdate(req.userId, {
      $pull: { bookmarks: bookmark.issue_id },
    });

    res.json({ message: 'Bookmark removed successfully' });
  } catch (error) {
    console.error('Remove bookmark error:', error);
    res.status(500).json({ message: 'Failed to remove bookmark' });
  }
};

export const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ user_id: req.userId }).populate(
      'issue_id'
    );

    res.json(bookmarks);
  } catch (error) {
    console.error('Get bookmarks error:', error);
    res.status(500).json({ message: 'Failed to fetch bookmarks' });
  }
};

export const addContribution = async (req, res) => {
  try {
    const { project_id, issue_id, contribution_type } = req.body;

    const contribution = new UserContribution({
      user_id: req.userId,
      project_id,
      issue_id,
      contribution_type,
    });

    await contribution.save();
    await User.findByIdAndUpdate(req.userId, {
      $push: { contributions: contribution._id },
      $inc: { contributions_count: 1 },
    });

    res.status(201).json({
      message: 'Contribution added successfully',
      contribution,
    });
  } catch (error) {
    console.error('Add contribution error:', error);
    res.status(500).json({ message: 'Failed to add contribution' });
  }
};

export const getContributions = async (req, res) => {
  try {
    const userId = req.params.userId || req.userId;
    const contributions = await UserContribution.find({ user_id: userId })
      .populate('project_id')
      .populate('issue_id');

    res.json(contributions);
  } catch (error) {
    console.error('Get contributions error:', error);
    res.status(500).json({ message: 'Failed to fetch contributions' });
  }
};
