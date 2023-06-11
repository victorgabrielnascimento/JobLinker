import { Router, Request, Response } from 'express';
import { CompanyController } from '../controllers/CompanyController';

const CompanyRouter = Router();
const companyController = new CompanyController();

CompanyRouter.post('/company/register', (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (companyController.registerCompany(req, res)).then(e => resolve(e)));
});

export default CompanyRouter;