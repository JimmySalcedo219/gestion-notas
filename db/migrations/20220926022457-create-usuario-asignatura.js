'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UsuarioAsignaturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:"Usuarios",
          key:"id",
          as: "usuarioId",
        },
      },
      asignaturaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:"Asignaturas",
          key:"id",
          as: "asignaturaId"
        },
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UsuarioAsignaturas');
  }
};