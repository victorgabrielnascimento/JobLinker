import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../../../config/database';

import { IRequirement } from '../../interfaces/job/RequirementInterface';

const Requirement: ModelDefined<IRequirement, IRequirement> = sequelize.define('Requirement', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true
    },
    descricao : {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'requirement',
    
});

export default Requirement;