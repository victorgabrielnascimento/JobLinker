import { ICompany } from '../interfaces/company/CompanyInterface';

const Company = require('../models/index').Company;

export class CompanyRepository {
    async createCompany(company: ICompany): Promise<ICompany> {
        return await Company.create(company);
    }

    async findCompanyByEmail(email: string): Promise<ICompany> {
        return await Company.findOne({ where: { email: email } });
    }
}