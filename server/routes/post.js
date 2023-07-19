import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { vertifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", vertifyToken, getFeedPosts);
router.get("/:userId/posts", vertifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", vertifyToken, likePost);

export default router;
