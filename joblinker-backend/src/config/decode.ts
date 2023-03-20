import { Request } from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';

require('dotenv').config();

export function decodeToken(req: Request): string | JwtPayload | Error {
    try {
        if (!req.header('Authorization')) throw new Error('Por favor, autentique-se.');

        const token: string = req.header('Authorization')?.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        if (!decoded) throw new Error('Token inválido. Gere um novo token.');
        
        return decoded;
    }
    catch (err) {
        throw err;
    }
}