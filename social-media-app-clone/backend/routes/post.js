import express from 'express';
import { loadPosts, registerPost } from '../controller/postsController.js';
const router = express.Router();
router.route('/api/createPost').get(loadPosts).post(registerPost);

export default router;
