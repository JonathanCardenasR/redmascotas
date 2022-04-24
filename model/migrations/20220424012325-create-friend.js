'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Friend', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userMain: {
        type: Sequelize.INTEGER
      },
      userSub: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint('Friend',{
      fields : ['userMain'],
      type : 'FOREIGN KEY',
      name : 'FK_FRIEND_USERMAIN',
      references :{ 
        table : 'User',
        field : 'id'
      }
    })

    await queryInterface.addConstraint('Friend',{
      fields : ['userSub'],
      type : 'FOREIGN KEY',
      name : 'FK_FRIEND_USERSUB',
      references :{ 
        table : 'User',
        field : 'id'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Friend','FK_FRIEND_USERMAIN')
    await queryInterface.removeConstraint('Friend','FK_FRIEND_USERSUB')
    await queryInterface.dropTable('Friend');
  }
};