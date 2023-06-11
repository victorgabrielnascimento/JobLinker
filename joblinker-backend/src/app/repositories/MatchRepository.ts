import { IMatch } from "../interfaces/management/match.interface";
const Match = require('../models/index').Match;
const Applicant = require('../models/index').Applicant;
const Company = require('../models/index').Company;

export class MatchRepository {
    async createMatch(match: IMatch): Promise<IMatch> {
        const createdMatch = await Match.create(match);
        
        await createdMatch.setCompany(await Company.findOne({where: {cpf_cnpj: match.cpf_cnpj_empresa}}));
        await createdMatch.setApplicant(await Applicant.findOne( {where: {cpf_cnpj: match.cpf_cnpj_candidato}}));
        return createdMatch;
    }
}