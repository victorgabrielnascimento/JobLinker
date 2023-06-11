import { ILiked } from '../interfaces/management/liked.interface';
const Liked = require('../models/index').Liked;
const Applicant = require('../models/index').Applicant;
const Company = require('../models/index').Company;


export class LikedRepository {
    async createLiked(liked: ILiked): Promise<ILiked> {
        console.log("jdudjfud", liked);
        const createdLiked = await Liked.create(liked);
        
        const a = await createdLiked.setApplicant(await Applicant.findOne({ where: { cpf_cnpj: liked.cpf_cnpj_candidato } }));
        console.log("HAHAHA", a);
        await createdLiked.setCompany(await Company.findOne({ where: { cpf_cnpj: liked.cpf_cnpj_empresa } }));

        return createdLiked;
    }
}