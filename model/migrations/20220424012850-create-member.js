'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Member', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      groupId: {
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

    await queryInterface.addConstraint('Member',{
      fields : ['userId'],
      type : 'FOREIGN KEY',
      name : 'FK_MEMBER_USER',
      references :{ 
        table : 'User',
        field : 'id'
      }
    })

    await queryInterface.addConstraint('Member',{
      fields : ['groupId'],
      type : 'FOREIGN KEY',
      name : 'FK_MEMBER_GROUP',
      references :{ 
        table : 'Group',
        field : 'id'
      }
    })

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Member');
  }
};