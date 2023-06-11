import { IAddress } from "./address.interface";

export interface IUser {
    id?: string;
    cpf_cnpj: string;
    email: string;
    senha: string;
    role?: number;
    address?: IAddress;
}