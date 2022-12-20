import {Router} from "express";
import getUser from "../controllers/users.controller";

const router = Router();

router.get('/user/:rut', getUser);

export default router;