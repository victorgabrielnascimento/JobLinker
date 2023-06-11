export interface ILiked {
    id?: string;
    cpf_cnpj_empresa: string;
    cpf_cnpj_candidato: string;
    empresa_curtiu?: boolean;
    candidato_curtiu?: boolean;
    data_curtida: Date;
}
