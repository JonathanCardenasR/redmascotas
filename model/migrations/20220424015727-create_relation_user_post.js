'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('Post','userId',{
      type: Sequelize.INTEGER,
      allowNull:true
    })

   await queryInterface.addColumn('Post','opId',{
    type: Sequelize.INTEGER,
    allowNull:true
    })

   await queryInterface.addConstraint('Post',{
    fields : ['userId'],
    type : 'FOREIGN KEY',
    name : 'FK_POST_USER',
    references :{ 
      table : 'User',
      field : 'id'
      }
    })

    await queryInterface.addConstraint('Post',{
      fields : ['opId'],
      type : 'FOREIGN KEY',
      name : 'FK_POST_POST',
      references :{ 
        table : 'Post',
        field : 'id'
        }
      })

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('Post','FK_POST_USER')
    await queryInterface.removeConstraint('Post','FK_POST_POST')
    await queryInterface.removeColumn('Post','userId')
    await queryInterface.removeColumn('Post','opId')

  }
};
