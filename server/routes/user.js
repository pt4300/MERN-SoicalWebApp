import express from "express";
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/users.js";
import { vertifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", vertifyToken, getUser);
router.get("/:id/friends", vertifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", vertifyToken, addRemoveFriend);

export default router;
