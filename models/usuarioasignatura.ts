import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import Asignatura from './asignatura';
import Usuario from './usuario'

@Table
export default class UsuarioAsignatura extends Model {
  @ForeignKey(() => Usuario)
  @Column
  usuarioId!: number

  @ForeignKey(() => Asignatura)
  @Column
  asignaturaId!: number

  @Column({
    type: DataType.DATE,
  })
  createdAt!: Date
}