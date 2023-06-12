import { Request, Response } from 'express';

import { CompanyRepository } from '../repositories/CompanyRepository';
import { UserRepository } from '../repositories/UserRepository';

import { ICompany } from '../interfaces/company/CompanyInterface';
import { IUser } from '../interfaces/user/user.interface';

import { v4 as uuidv4 } from 'uuid';
import { IAddress } from '../interfaces/user/address.interface';


export class CompanyService {

    private companyRepository: CompanyRepository = new CompanyRepository();
    private userRepository: UserRepository = new UserRepository();

    async registerCompany(req: Request, res: Response): Promise<Response> {
        try {

            
            const companyBody: ICompany = req.body;
            const company = this.treatCompany(companyBody);
            const user: IUser = this.treatUser(company, req.body.endereco);

            await this.companyRepository.createCompany(company);
            await this.userRepository.createUser(user);

            return res.status(201).json({ message: `Usuário cadastrado com sucesso.`});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao registrar candidato!', error: error });
        }
    }

    treatCompany(company: ICompany): ICompany {
        
        company.id = uuidv4();
        company.role = 2;
        company.likes = 0;
        company.max_likes = 5;

        return company;
    }

    treatUser(company: ICompany, address: IAddress): IUser {
        
        let user: IUser = {} as IUser;
        user.id= uuidv4(),
        user.role= 2,
        user.email= company.email,
        user.senha= company.senha,
        user.cpf_cnpj= company.cpf_cnpj,
        user.address= address
        user.address.id = uuidv4();
            
        return user;
    }
}

