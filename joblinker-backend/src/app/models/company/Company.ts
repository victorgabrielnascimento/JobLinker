import { DataTypes, ModelDefined } from 'sequelize';
import { ICompany } from '../../interfaces/company/CompanyInterface';
import sequelize from '../../../config/database';

export const Company: ModelDefined<ICompany, ICompany> = sequelize.define('Company', {
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
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha : {
        type: DataTypes.STRING,
        allowNull: false
    },
    role : {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 3
    },
    area_atuacao : {
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
    }
}, {
    tableName: 'company',

});

export default Company;