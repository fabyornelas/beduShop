const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// cifrar contrasena de usuario antes de crearlo
const bcrypt =require ('bcrypt');

const User = sequelize.define('usuario', {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    email : {
        type : DataTypes.TEXT
    },
    password : {
        type : DataTypes.TEXT
    }
    },{
     //para que pase por un proceso de cifrado la contrasena
        hooks : {
            beforeCreate : (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            },
        },
        freezeTableName: true,
        timestamps: false
    })
    //validacion de contrase;a y hach
    User.prototype.validPassword = function (pass){
        return bcrypt.compareSync (pass, this.password)
    }

    module.exports = User;