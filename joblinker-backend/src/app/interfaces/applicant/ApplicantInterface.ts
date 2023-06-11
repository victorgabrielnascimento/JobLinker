import { IExperience } from "./ExperienceInterface";
import { IUser } from "../user/user.interface";
import { IIdiomas } from "./IdiomasInterface";
import { IInteresses } from "./InteressesInterface";
import { IMatch } from "../management/match.interface";
import { ILiked } from "../management/liked.interface";

export interface IApplicant extends IUser {
    nome: string;
    cargo_pretendido: string;
    pretensao_salarial: number;
    telefone: string;
    // endereco: IAdress;
    sobre_mim: string;
    formacao_academica: string;
    // experiencias_profissionais: IExperience[];
    experience: IExperience[];
    idiomas: IIdiomas[];
    interesses: IInteresses[];
    // referencias_profissionais: string[]; pra depois
    url_foto?: string;
    matches?: IMatch[];
    liked?: ILiked[]; //uuid pessoas que deram like
    likes: number;
    max_likes: number;
}