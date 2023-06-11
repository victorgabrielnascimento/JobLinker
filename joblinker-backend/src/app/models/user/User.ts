import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../../../config/database';

import { IUser } from "../../interfaces/user/user.interface";

const User: ModelDefined<IUser, IUser> = sequelize.define('User', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true
        
    },
    cpf_cnpj : {
        type: DataTypes.STRING,
        allowNull: false
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
        allowNull: false
    }
},
{
    tableName: 'user',
});

export default User;