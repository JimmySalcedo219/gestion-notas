'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UsuarioGrupos', {
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
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UsuarioGrupos');
  }
};