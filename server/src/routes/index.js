import { Router } from 'express';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw'

import authRouter from './auth';
import usersRouter from './users';
import categoriesRouter from './categories';
import subjectsRouter from './subjects';
import skillsRouter from './skills';
import mentorSubjectsRouter from './mentorSubjects';
import mentorSkillsRouter from './mentorSkills';
import paymentsRouter from './payments';
import availabilityRouter from './availability';
import appointmentsRouter from './appointments';

let router = Router();

router.use('/auth', authRouter);
router.use('/payments', paymentsRouter);
router.use('/users', usersRouter);
router.use('/categories', categoriesRouter);
router.use('/subjects', subjectsRouter);
router.use('/skills', skillsRouter);
router.use('/mentorSubjects', mentorSubjectsRouter);
router.use('/mentorSkills', mentorSkillsRouter);
router.use('/availability', availabilityRouter);
router.use('/appointments', appointmentsRouter);

export default router;