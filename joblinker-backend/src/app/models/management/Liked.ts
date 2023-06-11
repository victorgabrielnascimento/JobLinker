import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../../../config/database';

import { ILiked } from '../../interfaces/management/liked.interface';

const Liked: ModelDefined<ILiked, ILiked> = sequelize.define('Liked', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true
    },
    empresa_curtiu : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    candidato_curtiu : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    data_curtida : {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'liked'
});

export default Liked;
