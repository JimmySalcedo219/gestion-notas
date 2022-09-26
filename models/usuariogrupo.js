'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioGrupo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsuarioGrupo.init({
    usuarioId: DataTypes.INTEGER,
    grupoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsuarioGrupo',
  });
  return UsuarioGrupo;
};