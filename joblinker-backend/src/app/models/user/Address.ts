import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../../../config/database';

import { IAddress } from "../../interfaces/user/address.interface";

const Address: ModelDefined<IAddress, IAddress> = sequelize.define('address', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true
    },
    rua : {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    complemento : {
        type: DataTypes.STRING,
        allowNull: true
    },
    cidade : {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado : {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep : {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'address',
});

export default Address;