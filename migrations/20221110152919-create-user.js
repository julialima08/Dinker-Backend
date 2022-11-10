'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      skills: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      socialLinks: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      projects: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      posts: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        references: {
          model: 'posts',
          key: 'id'
        }
      },
      matches: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        references: {
          model: 'user_matches',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}
