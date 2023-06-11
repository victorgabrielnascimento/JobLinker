export interface IAddress {
    id?: string;
    rua: string;
    numero: number;
    complemento?: string;
    cidade: string;
    estado: string;
    cep: string;
    user_cpf_cnpj?: string;
}