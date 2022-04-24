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

      this.hasMany(models.User, {
        foreignKey : 'vetId', as: 'vets'
      })

      this.hasMany(models.Group, {
        foreignKey : 'creatorId', as: 'myGroups'
      })

      this.belongsToMany(models.Group, {
        through: 'members'
      })

      this.belongsToMany(models.User, {
        through: 'friends'
      })
      
      this.belongsToMany(models.User, {
        through: 'friends'
      })



    }
  }
  User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    usuario: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName : true
  });
  return User;
};