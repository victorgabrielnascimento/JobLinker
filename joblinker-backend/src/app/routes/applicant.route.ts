import { Router, Request, Response } from 'express';
import { ApplicantController } from '../controllers/ApplicantController';

const ApplicantRouter = Router();
const applicantController = new ApplicantController();

ApplicantRouter.post('/applicant/register', (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (applicantController.registerApplicant(req, res)).then(e => resolve(e)));
});

export default ApplicantRouter;