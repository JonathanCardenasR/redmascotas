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
      
      this.hasMany(models.Post, {
        foreignKey : 'userId', as: 'posts'
      })

      this.hasMany(models.Pet, {
        foreignKey : 'ownerId', as: 'pets'
      })

      this.belongsTo(model.User,{
        foreignKey : 'vetId', as: 'vetUser'
      })

      this.hasMany(models.User, {
        foreignKey : 'vetId', as: 'vets'
      })



    }
  }
  User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    usuario: DataTypes.STRING,
    password: DataTypes.STRING,
    isVet: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName : true
  });
  return User;
};