interface IAdress {
    street: string;
    number: number;
    complement?: string;
    city: string;
    state: string;
    postalCode: string;
}

interface IUser {
    _id?: string;
    nome: string;
    cpf_cnpj: string;
    telefone: string;
    endereco: IAdress;
    email: string;
    senha: string;
    role: number;
    data_cadastro: Date;
}

export { IUser };