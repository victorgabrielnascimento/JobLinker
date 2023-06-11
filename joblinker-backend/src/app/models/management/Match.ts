import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../../../config/database';

import { IMatch } from '../../interfaces/management/match.interface';

const Match: ModelDefined<IMatch, IMatch> = sequelize.define('Match', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true
    },
    data_match : {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'match',
    timestamps: false
});

export default Match;
