'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asignatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Usuario)
      this.belongsTo(models.Nota)
      this.hasMany(models.Grupo)
    }
  }
  Asignatura.init({
    nombreAsig: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Asignatura',
  });
  return Asignatura;
};