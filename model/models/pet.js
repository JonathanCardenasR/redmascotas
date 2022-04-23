'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pet.init({
    nombre: DataTypes.STRING,
    raza: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pet',
    freezeTableName : true
  });
  return Pet;
};