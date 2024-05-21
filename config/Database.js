import { Sequelize } from 'sequelize';

const db = new Sequelize('synrgy-ex6-jwt', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;