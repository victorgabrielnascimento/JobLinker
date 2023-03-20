interface IJob {
    _id?: string;
    titulo: string;
    descricao: string;
    requisitos: string[];
    salario: number;
    tipo_vaga_periodo: string;
    beneficios: string[];
    jornada_trabalho: string;
    data_cadastro: Date;
}

export { IJob };
