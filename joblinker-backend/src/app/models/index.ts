import { Sequelize } from 'sequelize';
import sequelize from '../../config/database';

import User  from './user/User';
import Address from './user/Address';
import Company from './company/Company';
import Applicant from './applicant/Applicant';
import Job from './job/Job';
import Requirement from './job/Requirement';
import Experience from './applicant/Experience';
import Idiomas from './applicant/Idiomas';
import Interesses from './applicant/Interesses';
import Match from './management/Match';
import Liked from './management/Liked';
import Adress from './user/Address';

User.hasOne(Adress);
Address.belongsTo(User);

Applicant.hasMany(Experience);
Experience.belongsTo(Applicant);

Applicant.hasMany(Idiomas);
Idiomas.belongsTo(Applicant);

Applicant.hasMany(Interesses);
Interesses.belongsTo(Applicant);

Job.hasMany(Requirement);
Requirement.belongsTo(Job);

Company.hasMany(Job);
Job.belongsTo(Company);

Applicant.hasMany(Match);
Company.hasMany(Match);
Match.belongsTo(Applicant);
Match.belongsTo(Company);

Applicant.hasMany(Liked);
Company.hasMany(Liked);
Liked.belongsTo(Company);
Liked.belongsTo(Applicant);


async () => { await sequelize.sync(); };


const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = User;
db.Address = Address;
db.Company = Company;
db.Applicant = Applicant;
db.Job = Job;
db.Requirement = Requirement;
db.Experience = Experience;
db.Idiomas = Idiomas;
db.Interesses = Interesses;
db.Match = Match;
db.Liked = Liked;

module.exports = db;