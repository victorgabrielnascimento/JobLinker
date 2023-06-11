import { IApplicant } from "../interfaces/applicant/ApplicantInterface";


const Applicant = require('../models/index').Applicant;
const Idiomas = require('../models/index').Idiomas;
const Experience = require('../models/index').Experience;
const Interesses = require('../models/index').Interesses;


export class ApplicantRepository {

    async createApplicant(applicant: IApplicant): Promise<IApplicant> {
        const createdApplicant = await Applicant.create(applicant);
        const createdExperience = await Experience.bulkCreate(applicant.experience);
        const createdIdiomas = await Idiomas.bulkCreate(applicant.idiomas);
        const createdInteresses = await Interesses.bulkCreate(applicant.interesses);

        await createdApplicant.addIdiomas(createdIdiomas);
        await createdApplicant.addInteresses(createdInteresses);
        await createdApplicant.addExperience(createdExperience);

        return createdApplicant;

    }

}