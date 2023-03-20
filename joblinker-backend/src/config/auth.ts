import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user/user.interface';
import { ICompany } from '../interfaces/user/company.interface';
import { IApplicant } from '../interfaces/user/applicant.interface';
require('dotenv').config();

export function getToken(user: IUser | ICompany | IApplicant ): string {

    let token: string;

    if (user.role == 1 ) { //adm
        token = jwt.sign({ 
            _id: user._id?.toString(), 
            nome: user.nome,
            cpf_cnpj: user.cpf_cnpj, 
            telefone: user.telefone,
            endereco: user.endereco,
            email: user.email,
            role: user.role 
            }, 
            process.env.SECRET_KEY, {expiresIn: process.env.TOKEN_EXPIRATION});
    }
    if (user.role == 2 ) { //company
        token = jwt.sign({ 
            _id: user._id?.toString(), 
            nome: user.nome,
            cpf_cnpj: user.cpf_cnpj, 
            telefone: user.telefone,
            endereco: user.endereco,
            email: user.email,
            role: user.role,
            area_atuacao: (user as ICompany).area_atuacao,
            vagas: (user as ICompany).vagas,
            likes: (user as ICompany).likes,
            matches: (user as ICompany).matches 
            }, 
            process.env.SECRET_KEY, {expiresIn: process.env.TOKEN_EXPIRATION});
    }
    if (user.role == 3 || user.role == 4) { //applicant and premium applicant
        let actualRole: number;
        if (user.role == 3) actualRole = 3;
        else actualRole = 4;

        token = jwt.sign({ 
            _id: user._id?.toString(), 
            nome: user.nome,
            cpf_cnpj: user.cpf_cnpj, 
            telefone: user.telefone,
            endereco: user.endereco,
            email: user.email,
            role: actualRole,
            cargo_pretendido: (user as IApplicant).cargo_pretendido,
            pretensao_salarial: (user as IApplicant).pretensao_salarial,
            sobre_mim: (user as IApplicant).sobre_mim,
            formacao_academica: (user as IApplicant).formacao_academica,
            cerficacoes: (user as IApplicant).cerficacoes,
            experiencias_profissionais: (user as IApplicant).experiencias_profissionais,
            idiomas: (user as IApplicant).idiomas,
            interesses: (user as IApplicant).interesses,
            url_foto: (user as IApplicant).url_foto,
            matches: (user as IApplicant).matches,
            liked: (user as IApplicant).liked,
            likes: (user as IApplicant).likes,
            max_likes: (user as IApplicant).max_likes 
            }, 
            process.env.SECRET_KEY, {expiresIn: process.env.TOKEN_EXPIRATION});
    }

    return token;
}
