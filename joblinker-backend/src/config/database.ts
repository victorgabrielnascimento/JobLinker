import { Sequelize } from 'sequelize';
require('dotenv').config();

const sequelize: Sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

export default sequelize;