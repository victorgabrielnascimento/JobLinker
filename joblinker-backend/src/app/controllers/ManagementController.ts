import { Request, Response } from "express";
import { ManagementService } from "../services/ManagementService";

class ManagementController {

    private managementService: ManagementService = new ManagementService();

    login(req: Request, res: Response): Promise<Response> {
        return new Promise<Response>((resolve) => {this.managementService.login(req, res).then(e => resolve(e));});
    }

    registerJob(req: Request, res: Response): Promise<Response> {
        return new Promise<Response>((resolve) => {this.managementService.registerJob(req, res).then(e => resolve(e));});
    }

    registerMatch(req: Request, res: Response): Promise<Response> {
        return new Promise<Response>((resolve) => {this.managementService.registerMatch(req, res).then(e => resolve(e));});
    }

    registerLike(req: Request, res: Response): Promise<Response> {
        return new Promise<Response>((resolve) => {this.managementService.registerLiked(req, res).then(e => resolve(e));});
    }

}

export { ManagementController };