import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../../../config/database';

import { IApplicant } from '../../interfaces/applicant/ApplicantInterface';

const Applicant: ModelDefined<IApplicant, IApplicant> = sequelize.define('Applicant', {
    id : {
        type: DataTypes.UUID,
        allowNull: false,
    },
    nome : {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf_cnpj : {
        type: DataTypes.STRING,
        primaryKey: true
    },
    telefone : {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo_pretendido : {
        type: DataTypes.STRING,
        allowNull: false
    },
    pretensao_salarial : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sobre_mim : {
        type: DataTypes.STRING,
        allowNull: true
    },
    formacao_academica : {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_foto : {
        type: DataTypes.STRING,
        allowNull: true
    },
    likes : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    max_likes : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'applicant'
});

export default Applicant;
