import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import Grupo from './grupo';
import Usuario from './usuario'

@Table
export default class UsuarioGrupo extends Model {
  @ForeignKey(() => Usuario)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  usuarioId!: number

  @ForeignKey(() => Grupo)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  grupoId!: number

  @Column({
    allowNull: false,
    type: DataType.DATE,
  })
  createdAt!: Date
}