'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsToMany(models.User, {
        through: 'members'
      })

      this.belongsTo(models.User, {
        foreignKey : 'creatorId', as: 'groupOwner'
      })

      //tabla de miembros
      this.hasMany(models.Member,{
        foreignKey: 'groupId'
      })

      

    }
  }
  Group.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};