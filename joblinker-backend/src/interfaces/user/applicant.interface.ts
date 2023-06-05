import { Model } from 'sequelize';

import { IUser } from "./user.interface";

interface ICertification {
    nome_certificacao: string;
    instituicao: string;
    data_conclusao: Date;
}

interface IExperiency {
    nome_empresa: string;
    funcao: string;
    data_inicio: Date;
    data_fim: Date;
}

interface IApplicant extends IUser {
    cargo_pretendido: string;
    pretensao_salarial: number;
    sobre_mim: string;
    formacao_academica: string[];
    cerficacoes: ICertification[];
    experiencias_profissionais: IExperiency[];
    idiomas: string[];
    interesses: string[];
    // referencias_profissionais: string[]; pra depois
    url_foto: string;
    matches: string[];
    liked: string[];
    likes: 0;
    max_likes: number;
}

interface ApplicantInstance extends Model<IApplicant>, IApplicant {}

export { IApplicant, ApplicantInstance, ICertification, IExperiency };