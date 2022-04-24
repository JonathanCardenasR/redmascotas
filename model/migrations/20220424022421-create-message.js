'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Message', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      converId: {
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING
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

    await queryInterface.addConstraint('Message',{
      fields : ['userId'],
      type : 'FOREIGN KEY',
      name : 'FK_MESSAGE_USER',
      references :{ 
        table : 'User',
        field : 'id'
      }
    })

    await queryInterface.addConstraint('Message',{
      fields : ['converId'],
      type : 'FOREIGN KEY',
      name : 'FK_MESSAGE_CONVERSATION',
      references :{ 
        table : 'Conversation',
        field : 'id'
      }
    })

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Message','FK_MESSAGE_USER')
    await queryInterface.removeConstraint('Message','FK_MESSAGE_CONVERSATION')
    await queryInterface.dropTable('Message',{restartIdentity: true});
  }
};