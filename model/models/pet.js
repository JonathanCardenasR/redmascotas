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
      
      this.belongsTo(models.User, {
        foreignKey : 'ownerId', as : 'Owner'
      })

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