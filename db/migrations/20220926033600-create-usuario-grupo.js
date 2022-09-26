'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UsuarioGrupos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Usuarios",
          key:"id",
          as: "usuarioId",
        },
      },
      grupoId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Grupos",
          key:"id",
          as: "grupoId",
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
    await queryInterface.dropTable('UsuarioGrupos');
  }
};