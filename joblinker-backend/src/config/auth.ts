import { Request, Response, NextFunction } from 'express';
import { decodeToken } from './decode';
import jwt from 'jsonwebtoken';
import { IUsuario } from '../interfaces/usuario/Usuario.interface';
require('dotenv').config();

export function getToken(usuario: IUsuario): string{
    const token = jwt.sign({ 
        _id: usuario._id?.toString(), 
        cpf_cnpj: usuario.cpf_cnpj, 
        role: usuario.perfil_usuario 
        }, 
        process.env.SECRET_KEY, {expiresIn: process.env.TOKEN_EXPIRATION});
        
    return token;
}



export function authAdmin(req: Request, res: Response, next: NextFunction) {
    try {
        const decodedToken = decodeToken(req);

        const role: number = JSON.parse(JSON.stringify(decodedToken)).role;
        if (role !== 1) return res.status(401).send({message: 'Você não tem permissão para acessar esse recurso.'});

        next();
    } catch (err) {
        return res.status(400).json({error : err.message});
    }
}



export function authUser(req: Request, res: Response, next: NextFunction) {
    try {
        const decodedToken = decodeToken(req);

        const role: number = JSON.parse(JSON.stringify(decodedToken)).role;
        if (role !== 2) return res.status(401).send({message: 'Você não tem permissão para acessar esse recurso.'});
    
        next();
    } catch (err) {
        return res.status(400).json({error : err.message});
    }
}


export function authAdminOrUser(req: Request, res: Response, next: NextFunction) {
    try {
        const decodedToken = decodeToken(req);
        
        const role: number = JSON.parse(JSON.stringify(decodedToken)).role;
        if (role !== 1 && role !== 2) throw new Error('Você não tem permissão para acessar esse recurso.');
        next();
    } catch (err) {
        return res.status(400).json({error : err.message});
    }


}