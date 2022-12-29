import {Router} from "express";
import {getUser, postLogin} from "../controllers/users.controller";

const router = Router();

router.get('/user/:rut', getUser);
router.post('/login', postLogin);

export default router;