'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     const data =[
      { usuarioId: 5, grupoId: 1 },
      { usuarioId: 6, grupoId: 1 },
      { usuarioId: 7, grupoId: 1 },
      { usuarioId: 8, grupoId: 2 },
      { usuarioId: 9, grupoId: 2 },
      { usuarioId: 10, grupoId: 2 },
      { usuarioId: 11, grupoId: 3 },
      { usuarioId: 12, grupoId: 3 },
      { usuarioId: 13, grupoId: 3 },
      { usuarioId: 2, grupoId: 1 },
      { usuarioId: 2, grupoId: 2 },
      { usuarioId: 2, grupoId: 3 },
      { usuarioId: 3, grupoId: 1 },
      { usuarioId: 3, grupoId: 2 },
      { usuarioId: 3, grupoId: 3 },
      { usuarioId: 4, grupoId: 1 },
      { usuarioId: 4, grupoId: 2 },
      { usuarioId: 4, grupoId: 3 },
      
    ]

    await queryInterface.bulkInsert('UsuarioGrupos', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
