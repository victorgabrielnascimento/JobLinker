import jwt from 'jsonwebtoken';
import { ICompany } from '../app/interfaces/company/CompanyInterface';
import { IApplicant } from '../app/interfaces/applicant/ApplicantInterface';

require('dotenv').config();

export function getToken(user: ICompany | IApplicant ): string {

    return jwt.sign({user}, process.env.SECRET_KEY, {expiresIn: process.env.TOKEN_EXPIRATION});

}
