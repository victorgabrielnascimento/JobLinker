import { Request, Response } from 'express';

import { JobRepository } from '../repositories/JobRepository';
import { MatchRepository } from '../repositories/MatchRepository';
import { LikedRepository } from '../repositories/LikedRepository';

import { v4 as uuidv4 } from 'uuid';
import { IJob } from '../interfaces/job/JobInterface';
import { IMatch } from '../interfaces/management/match.interface';
import { ILiked } from '../interfaces/management/liked.interface';

export class ManagementService {

    private jobRepository: JobRepository = new JobRepository();
    private matchRepository: MatchRepository = new MatchRepository();
    private likedRepository: LikedRepository = new LikedRepository();

    async registerJob(req: Request, res: Response): Promise<Response> {
        try {
            const jobBody: IJob = req.body;
            await this.jobRepository.createJob(this.treatJob(jobBody));

            return res.status(201).json({ message: `Candidato cadastrado com sucesso.`});
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao registrar candidato!', error: error });
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
            
            return res.status(201).json({ message: `Candidato cadastrado com sucesso.`});
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao registrar candidato!', error: error });
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
                console.log("uai oq aconteceu", likedBody);
                await this.likedRepository.createLiked(this.treatLiked(likedBody));
                
                return res.status(201).json({ message: `Candidato cadastrado com sucesso.`});
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Erro ao registrar candidato!', error: error });
            }
    
        }

        treatLiked(liked: ILiked): ILiked {
            liked.id = uuidv4();
            liked.data_curtida = new Date();
            return liked;
        }
}