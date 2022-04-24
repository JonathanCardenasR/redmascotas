'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.belongsTo(models.Vet, {
        foreignKey : 'vetId'
      })

    }
  }
  Service.init({
    estilo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};