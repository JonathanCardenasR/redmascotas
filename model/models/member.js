'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsTo(models.User,{
        foreignKey: {name: 'userId'}, as: 'usuario'
      })

      this.belongsTo(models.Group,{
        foreignKey: {name: 'groupId'}, as: 'grupo'
      })

    }
  }
  Member.init({
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Member',
    freezeTableName : true
  });
  return Member;
};