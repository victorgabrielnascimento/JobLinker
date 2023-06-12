import { ILiked } from '../management/liked.interface';
import { IJob } from "../job/JobInterface";
import { IUser } from "../user/user.interface";
import { IMatch } from '../management/match.interface';

export interface ICompany extends IUser {
    nome: string;
    area_atuacao: string;
    telefone: string;
    // endereco: IAdress;
    vagas?: IJob[];
    liked?: ILiked[]; //uuid das pessoas
    likes: number; 
    matches?: IMatch[];
    max_likes: number;
}
