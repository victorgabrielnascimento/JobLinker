import { Request, Response } from 'express';

import { ApplicantRepository } from '../repositories/ApplicantRepository';
import { UserRepository } from '../repositories/UserRepository';

import { IUser } from '../interfaces/user/user.interface';
import { IApplicant } from '../interfaces/applicant/ApplicantInterface';
import { IAddress } from '../interfaces/user/address.interface';


import { v4 as uuidv4 } from 'uuid';

export class ApplicantService {

    private applicantRepository: ApplicantRepository = new ApplicantRepository();
    private userRepository: UserRepository = new UserRepository();

    async registerApplicant(req: Request, res: Response): Promise<Response> {
        try {

            const applicantBody: IApplicant = req.body;
            const applicant: IApplicant = this.treatApplicant(applicantBody);
            const user: IUser = this.treatUser(applicant, req.body.endereco);

            await this.applicantRepository.createApplicant(applicant);
            await this.userRepository.createUser(user);

            
            return res.status(201).json({ message: `Candidato cadastrado com sucesso.`});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao registrar candidato!', error: error });
        }
    }

    treatApplicant(applicant: IApplicant): IApplicant {

        applicant.id = uuidv4();
        applicant.experience.map((experience) => { experience.id = uuidv4(); experience.applicantCpfCnpj = applicant.cpf_cnpj; });
        applicant.idiomas.map((idioma) => { idioma.id = uuidv4(); });
        applicant.interesses.map((interesse) => { interesse.id = uuidv4(); });

        return applicant;
    }

    treatUser(applicant: IApplicant, address: IAddress): IUser {
        
        let user: IUser = {} as IUser;

        user.id= uuidv4();
        user.email= applicant.email;
        user.senha= applicant.senha;
        user.cpf_cnpj= applicant.cpf_cnpj;
        user.address= address;
        user.address.id = uuidv4();

        return user;
    }
}

