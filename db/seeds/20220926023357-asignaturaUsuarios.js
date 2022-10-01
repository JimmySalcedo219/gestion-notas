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
      { usuarioId: 2, asignaturaId: 1 },
      { usuarioId: 3, asignaturaId: 3 },
      { usuarioId: 4, asignaturaId: 2 },
    ]

    const estudiantes = await queryInterface.sequelize.query(
      `SELECT id from Usuarios WHERE rol='estudiante';`
    )

    estudiantes[0].forEach(({ id }) => {
      data.push({
        usuarioId: id,
        asignaturaId: 1,
      })

      data.push({
        usuarioId: id,
        asignaturaId: 2,
      })

      data.push({
        usuarioId: id,
        asignaturaId: 3,
      })
    })

    await queryInterface.bulkInsert('UsuarioAsignaturas', data, {})
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
