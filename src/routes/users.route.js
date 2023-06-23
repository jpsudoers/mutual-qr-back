import {Router} from "express";
import {getBiByUserId, getUser, getUserByNameOrRut, postLogin} from "../controllers/users.controller";

const router = Router();

router.get('/user/:rut', getUser);
router.get('/user/power-bi/:id', getBiByUserId);
router.get('/user/search/:reg', getUserByNameOrRut);
router.post('/login', postLogin);

export default router;