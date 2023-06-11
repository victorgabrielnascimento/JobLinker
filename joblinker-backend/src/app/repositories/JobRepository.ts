import { IJob } from '../interfaces/job/JobInterface';
const Requirement = require('../models/index').Requirement;

const Job = require('../models/index').Job;

export class JobRepository {
    async createJob(job: IJob): Promise<IJob> {
        const createdJob = await Job.create(job);
        const createdRequirement = await Requirement.bulkCreate(job.requisitos);

        await createdJob.addRequirement(createdRequirement);

        return createdJob;
    }
}