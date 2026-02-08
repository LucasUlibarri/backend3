import { Router } from "express";
import userControllers from "../controllers/user.controller.js";

const router = Router();

router.get('/', userControllers.getAllUsers);
router.get('/:uid', userControllers.getUser);
router.put('/:uid', userControllers.updateUser);
router.delete('/:uid', userControllers.deleteUser);

export default router;