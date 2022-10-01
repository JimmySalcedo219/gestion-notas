import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import Nota from './nota'
import Usuario from './usuario'
import UsuarioAsignatura from './usuarioasignatura'

@Table({ timestamps: true })
export default class Asignatura extends Model {
  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
  }) nombreAsig!: string

  @BelongsToMany(() => Usuario, () => UsuarioAsignatura)
  usuarios?: Usuario[]

  @HasMany(() => Nota)
  notas?: Nota[]

  async sync() {
    // this.favorites = await Favorite.findAll({  where: { userId: this.id } }) || []
  }
}