import  express from "express";
import {protect} from "../middlewares/userMiddleware.js";
import * as chatController from "../controllers/chatController.js";

const router = express.Router()

router.post('/', protect, chatController.accessChat)

router.get('/', protect, chatController.fetchChats)

router.post('/group', protect, chatController.createGroupChat)

router.post('/rename', protect, chatController.renameGroupChat)

router.post('/remove-from-group', protect, chatController.removeFromGroup)

router.post('/add-to-group', protect, chatController.addToGroup)

export default router
