import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import Usuario from './usuario'
import UsuarioGrupo from './usuariogrupo'

@Table({ timestamps: true })
export default class Grupo extends Model {
  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
  }) nomgrupo!: string

  @BelongsToMany(() => Usuario, () => UsuarioGrupo)
  usuarios?: Usuario[]

  async sync() {
    // this.favorites = await Favorite.findAll({  where: { userId: this.id } }) || []
  }
}