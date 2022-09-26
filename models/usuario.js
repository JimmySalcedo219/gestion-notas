'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
import bcrypt from "bcrypt"
import db from '../utils/connection'

class Usuario extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    this.belongsToMany(models.Asignatura, {
      through: {
        model: models.UsuarioAsignatura,
        key: 'usarioId',
      }
    })
    this.belongsToMany(models.Grupo)
    this.hasMany(models.Nota)
  }

  get password() {
    return this.getDataValue('password')
  }

  set password(value) {
    this.setDataValue('password', this.generateHash(value))
  }

  generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  }
  validPassword(password) {
    return bcrypt.compareSync(password, this.password)
  }

}
Usuario.init({
  apellidos: DataTypes.STRING,
  nombres: DataTypes.STRING,
  username: DataTypes.STRING,
  rol: DataTypes.STRING,
  pass: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'Usuario',
});

export default Usuario;
