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
        allowNull: true
    },
    cargo_pretendido : {
        type: DataTypes.STRING,
        allowNull: true
    },
    pretensao_salarial : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    sobre_mim : {
        type: DataTypes.STRING,
        allowNull: true
    },
    formacao_academica : {
        type: DataTypes.STRING,
        allowNull: true
    },
    url_foto : {
        type: DataTypes.STRING,
        allowNull: true
    },
    likes : {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    max_likes : {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 5
    },
    role : {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2
    }
}, {
    tableName: 'applicant'
});

export default Applicant;
