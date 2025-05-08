import { Router } from 'express';
import { authJWT, getCurrentUser } from '../middleware/current.js';

const router = Router();

router.get('/current', authJWT, getCurrentUser);

export default router;
