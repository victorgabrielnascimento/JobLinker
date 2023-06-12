import { Request, Response } from "express";
import { CompanyService } from "../services/CompanyService";

class CompanyController {

    private companyService: CompanyService = new CompanyService();

    registerCompany(req: Request, res: Response): Promise<Response> {
        return new Promise<Response>((resolve) => {this.companyService.registerCompany(req, res).then(e => resolve(e));});
    }

}

export { CompanyController };