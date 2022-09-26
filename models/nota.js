'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario)
      this.hasOne(models.Asignatura)
    }
  }
  Nota.init({
    nota1: DataTypes.FLOAT,
    nota2: DataTypes.FLOAT,
    nota3: DataTypes.FLOAT,
    nota4: DataTypes.FLOAT,
    nota5: DataTypes.FLOAT,
    notaFinal: DataTypes.FLOAT,
    asignaturaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Nota',
  });
  return Nota;
};