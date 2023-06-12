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
        allowNull: false
    },
    funcao : {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_inicio : {
        type: DataTypes.DATE,
        allowNull: false
    },
    data_fim : {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    tableName: 'experience',
});


export default Experience;
