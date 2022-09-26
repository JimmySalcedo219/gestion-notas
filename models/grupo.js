'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grupo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Usuario)
      this.belongsTo(models.Asignatura)
    }
  }
  Grupo.init({
    nomgrupo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Grupo',
  });
  return Grupo;
};