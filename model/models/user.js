'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    usuario: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    foto: DataTypes.STRING,
    fotoPortada: DataTypes.STRING,
    listaAmigos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName : true
  });
  return User;
};