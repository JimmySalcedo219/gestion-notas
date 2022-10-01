'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nota', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nota1: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      nota2: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      nota3: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      nota4: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      nota5: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      notaFinal: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      asignaturaId: {
        references:{
          model:"Asignaturas",
          key:"id",
          as: "asignaturaId",
        },
        type: Sequelize.INTEGER,
      },
      usuarioId: {
        references:{
          model:"Usuarios",
          key:"id",
          as: "usuarioId",
        },
        type: Sequelize.INTEGER,
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nota');
  }
};