const { Sequelize, DataTypes, Op } = require ('sequelize');

const sequelize = new Sequelize(
    process.env.BASEDATA,      // 'database', informacion obtenida(credenciales) de heroku postgres para conectarse a bs 
    process.env.USER,    // 'username',
    process.env.PASSWORD,// 'password',
{
    host: process.env.HOST, // host
    dialect: 'mysql', // gestor de base de datos
});

// exportar  los modulos para reutilzar la conexion 
module.exports = sequelize;