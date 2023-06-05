import { Model } from 'sequelize';

import { IUser } from "./user.interface";
// import { uuid } from "uuidv4";

interface ICompany extends IUser {
    area_atuacao: string;
    vagas: string[];
    likes: string[]; //uuid das pessoas
    matches: string[]; //uuid das pessoas
}

interface CompanyInstance extends Model<ICompany>, ICompany {}

export { ICompany, CompanyInstance };
