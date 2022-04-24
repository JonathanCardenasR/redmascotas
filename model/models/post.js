'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsTo(models.User, {
        foreignKey : 'userId', as : 'User'
      })

      this.belongsTo(models.Post, {
        foreignKey : 'opId', as: 'op'
      })

      this.hasMany(models.Post, {
        foreignKey : 'opId', as: 'comments'
      })


      
    }
  }
  Post.init({
    titulo: DataTypes.STRING,
    body: DataTypes.STRING,
    asWho: DataTypes.INTEGER,
    idWho: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
    freezeTableName : true
  });
  return Post;
};