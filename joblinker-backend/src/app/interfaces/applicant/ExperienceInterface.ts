export interface IExperience {
    id?: string;
    nome_empresa: string;
    funcao: string;
    data_inicio: Date;
    data_fim: Date;
    applicantCpfCnpj?: string;
}