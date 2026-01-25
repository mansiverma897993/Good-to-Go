import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import {
  addBookmark,
  removeBookmark,
  getBookmarks,
  addContribution,
  getContributions,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/bookmarks', authMiddleware, addBookmark);
router.delete('/bookmarks/:bookmarkId', authMiddleware, removeBookmark);
router.get('/bookmarks', authMiddleware, getBookmarks);
router.post('/contributions', authMiddleware, addContribution);
router.get('/contributions/:userId?', getContributions);

export default router;
