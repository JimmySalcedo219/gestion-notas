import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import Asignatura from './asignatura'
import Usuario from './usuario'
import UsuarioAsignatura from './usuarioasignatura'

@Table({ timestamps: true })
export default class Nota extends Model {
  @Column({
    type: DataType.FLOAT,
  }) nota1?: number

  @Column({
    type: DataType.FLOAT,
  }) nota2?: number

  @Column({
    type: DataType.FLOAT,
  }) nota3?: number

  @Column({
    type: DataType.FLOAT,
  }) nota4?: number

  @Column({
    type: DataType.FLOAT,
  }) nota5?: number

  @Column({
    type: DataType.FLOAT,
  }) notaFinal?: number

  @ForeignKey(() => Asignatura)
  @Column({
    type: DataType.INTEGER,
  }) asignaturaId!: number

  @ForeignKey(() => Usuario)
  @Column({
    type: DataType.INTEGER,
  }) usuarioId!: number

  @BelongsTo(() => Asignatura)
  asignatura?: any

  @BelongsTo(() => Usuario)
  usuario?: Usuario

  async sync() {
    const asignatura = await this.getAsignatura()
    this.setDataValue('asignatura', asignatura)
  }

  async getAsignatura() {
    return await Asignatura.findOne({ where: { id: this.asignaturaId } })
  }
}