import express, { Request, Response, NextFunction } from 'express';
import { UserType } from '../Models/UserModel';
import { registerUser } from '../Logic/usersLogic';

const router = express.Router();

router.post('/auth/register', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body as UserType;
    const user = await registerUser(newUser);
    res.json(user);
});


export default router;