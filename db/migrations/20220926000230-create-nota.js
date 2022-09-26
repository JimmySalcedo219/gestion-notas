'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nota1: {
        type: Sequelize.FLOAT
      },
      nota2: {
        type: Sequelize.FLOAT
      },
      nota3: {
        type: Sequelize.FLOAT
      },
      nota4: {
        type: Sequelize.FLOAT
      },
      nota5: {
        type: Sequelize.FLOAT
      },
      notaFinal: {
        type: Sequelize.FLOAT
      },
      asignaturaId: {
        references:{
          model:"Asignaturas",
          key:"id",
          as: "asignaturaIdId",
        },
        type: Sequelize.INTEGER
      },
      usuarioId: {
        references:{
          model:"Usuarios",
          key:"id",
          as: "usuarioId"
        },
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Notas');
  }
};