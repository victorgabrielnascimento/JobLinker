import { DataTypes, ModelDefined } from 'sequelize';
import sequelize from '../../../config/database';

import { IIdiomas } from '../../interfaces/applicant/IdiomasInterface';

const Idiomas: ModelDefined<IIdiomas, IIdiomas> = sequelize.define('Idiomas', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true
    },
    nome : {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel : {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'idiomas',
});

export default Idiomas;