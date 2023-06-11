import { ICompany } from "../company/CompanyInterface";
import { IRequirement } from "./RequirementInterface";

export interface IJob {
    id?: string;
    titulo: string;
    descricao: string;
    requisitos: IRequirement[];
    salario: number;
    tipo_vaga_periodo: string;
    jornada_trabalho: string;
    CompanyCpfCnpj: string
}
