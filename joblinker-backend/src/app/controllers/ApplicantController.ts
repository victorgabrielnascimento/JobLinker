import { Request, Response } from "express";
import { ApplicantService } from "../services/ApplicantService";

class ApplicantController {

    private applicantService: ApplicantService = new ApplicantService();

    registerApplicant(req: Request, res: Response): Promise<Response> {
        return new Promise<Response>((resolve) => {this.applicantService.registerApplicant(req, res).then(e => resolve(e));});
    }

}

export { ApplicantController };
