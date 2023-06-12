import { Request, Response } from 'express';
import { getToken } from '../../config/auth';

import { JobRepository } from '../repositories/JobRepository';
import { MatchRepository } from '../repositories/MatchRepository';
import { LikedRepository } from '../repositories/LikedRepository';
import { UserRepository } from '../repositories/UserRepository';
import { CompanyRepository } from '../repositories/CompanyRepository';
import { ApplicantRepository } from '../repositories/ApplicantRepository';

import { v4 as uuidv4 } from 'uuid';
import { IJob } from '../interfaces/job/JobInterface';
import { IMatch } from '../interfaces/management/match.interface';
import { ILiked } from '../interfaces/management/liked.interface';

export class ManagementService {

    private jobRepository: JobRepository = new JobRepository();
    private matchRepository: MatchRepository = new MatchRepository();
    private likedRepository: LikedRepository = new LikedRepository();
    private userRepository: UserRepository = new UserRepository();
    private companyRepository: CompanyRepository = new CompanyRepository();
    private applicantRepository: ApplicantRepository = new ApplicantRepository();


    async login(req: Request, res: Response): Promise<Response> {
        try {
            const { cpf_cnpj, senha } = req.body;
            const user = await this.userRepository.findUserByCpfCnpj(cpf_cnpj);
            if (user) {
                console.log("aaaaaaaa   ", user);
                if (user.senha === senha) {

                    let token;

                    if (user.role == 2) { token = getToken(await this.companyRepository.findCompanyByEmail(user.email))};
                    if (user.role == 3) { token = getToken(await this.applicantRepository.findApplicantByEmail(user.email))};

                    return res.status(200).json({ token: token });
                }
                else { return res.status(401).json({ message: 'Senha incorreta!' });}
            } 
            else { return res.status(404).json({ message: 'Usuário não encontrado!' });}
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao realizar login!', error: error });
        }
    }

    async registerJob(req: Request, res: Response): Promise<Response> {
        try {
            const jobBody: IJob = req.body;
            await this.jobRepository.createJob(this.treatJob(jobBody));

            return res.status(201).json({ message: `Vaga cadastrada com sucesso.`});
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao registrar vaga!', error: error });
        }
    }

    treatJob(job: IJob): IJob {
        job.id = uuidv4();
        job.requisitos.map(r => r.id = uuidv4());
        return job;
    }

    async registerMatch(req: Request, res: Response): Promise<Response> {
    
        try {
            const matchBody: IMatch = req.body;
            await this.matchRepository.createMatch(this.treatMatch(matchBody));
            
            return res.status(201).json({ message: `Match cadastrado com sucesso.`});
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao registrar match!', error: error });
        }

    }

    treatMatch(match: IMatch): IMatch {
        match.id = uuidv4();
        match.data_match = new Date();
        return match;
    }

    async registerLiked(req: Request, res: Response): Promise<Response> {
        
            try {
                const likedBody: ILiked = req.body;
                await this.likedRepository.createLiked(this.treatLiked(likedBody));
                
                return res.status(201).json({ message: `Curtida cadastrada com sucesso.`});
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Erro ao registrar curtida!', error: error });
            }
    
        }

        treatLiked(liked: ILiked): ILiked {
            liked.id = uuidv4();
            liked.data_curtida = new Date();
            return liked;
        }
}