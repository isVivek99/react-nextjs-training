import express from 'express';
import { loadPosts, registerPost } from '../controller/postsController.js';
const router = express.Router();
router.route('/api/getPost').get(loadPosts);
router.route('/api/createPost').post(registerPost);
export default router;
