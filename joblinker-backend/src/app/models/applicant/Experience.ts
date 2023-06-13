import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../../../config/database';

import { IExperience } from '../../interfaces/applicant/ExperienceInterface';

const Experience: ModelDefined<IExperience, IExperience> = sequelize.define('Experience', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true
    },
    nome_empresa : {
        type: DataTypes.STRING,
        allowNull: true
    },
    funcao : {
        type: DataTypes.STRING,
        allowNull: true
    },
    data_inicio : {
        type: DataTypes.DATE,
        allowNull: true
    },
    data_fim : {
        type: DataTypes.DATE,
        allowNull: true
    }
},
{
    tableName: 'experience',
});


export default Experience;
