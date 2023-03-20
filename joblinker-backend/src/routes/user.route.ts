import { Router, Request, Response } from "express";
import { authAdmin, authAdminOrUser} from "../config/auth";
import { SinistroController } from "../controllers/sinistro.controller";

const SinistroRouter = Router();
const sinistroController = new SinistroController();

//ok
SinistroRouter.post('/sinistro/criar', authAdminOrUser, (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (sinistroController.criarSinistro(req, res)).then(e => resolve(e)));
});

//ok
SinistroRouter.get('/sinistro/ver/:id', authAdminOrUser, (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (sinistroController.verSinistro(req, res)).then(e => resolve(e)));
});

//ok
SinistroRouter.get('/sinistro/ver', authAdmin, (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (sinistroController.verTodosSinistro(req, res)).then(e => resolve(e)));
});

//ok
SinistroRouter.put('/sinistro/editar/:id', authAdmin, (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (sinistroController.editarSinistro(req, res)).then(e => resolve(e)));
});

//ok
SinistroRouter.delete('/sinistro/apagar/:id', authAdmin, (req: Request, res: Response): Promise<Response> => {
    return new Promise<Response>((resolve) => (sinistroController.apagarSinistro(req, res)).then(e => resolve(e)));
});

export { SinistroRouter }