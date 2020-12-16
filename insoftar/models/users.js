'use strict'

const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database/db');

class User extends Model{}
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{
                msg:"Campo Obligatorio"
            },
            isAlpha:{
                args: true,
                msg: "Solo se admiten letras"
            },
            len:{
                args: [3, 50],
                msg: "La Longitud minima es de 3 digitos y minimo 50"
            }
        }
    },
    apellido:{
        type: DataTypes.STRING, 
        allowNull: true,
        validate:{
            isAlpha:{
                args: true,
                msg: "Solo se admiten letras"
            },
            len:{
                args: [3, 50],
                msg: "La Longitud minima es de 3 digitos y minimo 50"
            }  
        }
    },
    cedula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate:{
            isInt: {
                args: true,
                msg: "Solo se admiten Numeros"
            },
            len:{
                args:[7,10],
                msg: "solo se permiten diez digitos"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: "El campo tiene que ser un correo valido"
          }
        }
    },
    telefono:{
        type: DataTypes.DOUBLE,
        validate: {
        isDecimal: {
                args: true,
                msg: "Solo se admiten Numeros"
            }
        },
        min: 1111111,
        max: 9999999999
    }
}, {
    sequelize,
    modelName: "users",
    timestamps: false
})
module.exports = User;
