import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../../../config/database';

import { IInteresses } from '../../interfaces/applicant/InteressesInterface';

const Interesses: ModelDefined<IInteresses, IInteresses> = sequelize.define('Interesses', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true
    },
    nome : {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'interesses',
    timestamps: false
});

export default Interesses;