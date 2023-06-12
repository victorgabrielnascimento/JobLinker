import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../../../config/database';

import { IJob } from "../../interfaces/job/JobInterface";

const Job: ModelDefined<IJob, IJob> = sequelize.define('Job', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true
    },
    titulo : {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao : {
        type: DataTypes.STRING,
        allowNull: false
    },
    salario : {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    tipo_vaga_periodo : {
        type: DataTypes.STRING,
        allowNull: false
    },
    jornada_trabalho : {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
    tableName: 'job',
});

export default Job;
