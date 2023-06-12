import { Router, Request, Response } from 'express';
import { ManagementController } from '../controllers/ManagementController';

const ManagementRouter = Router();
const managementController = new ManagementController();

ManagementRouter.post('/management/job/register', (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (managementController.registerJob(req, res)).then(e => resolve(e)));
});

ManagementRouter.post('/management/match/register', (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (managementController.registerMatch(req, res)).then(e => resolve(e)));
});

ManagementRouter.post('/management/like/register', (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (managementController.registerLike(req, res)).then(e => resolve(e)));
});

ManagementRouter.post('/management/login', (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (managementController.login(req, res)).then(e => resolve(e)));
});

export default ManagementRouter;