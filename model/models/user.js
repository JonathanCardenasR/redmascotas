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

      //tabla de grupo creador
      this.hasMany(models.User, {
        foreignKey : 'vetId', as: 'vets'
      })

      //tabla de grupo creador
      this.hasMany(models.Group, {
        foreignKey : 'creatorId', as: 'myGroups'
      })

      //tabla de miembros
      this.hasMany(models.Member, {
        foreignKey : 'userId'
      })

      //tabla de amigos
      this.hasMany(models.Member, {
        foreignKey : 'userMain'
      })
      //tabla de amigos
      this.hasMany(models.Friend, {
        foreignKey : 'userSub'
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