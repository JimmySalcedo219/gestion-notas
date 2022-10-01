import { AfterFind, BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import bcrypt from 'bcrypt'

import Asignatura from './asignatura'
import Grupo from './grupo'
import Nota from './nota'
import UsuarioAsignatura from './usuarioasignatura'
import UsuarioGrupo from './usuariogrupo'

@Table({ timestamps: true })
export default class Usuario extends Model {
  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true,
  }) username!: string

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  get pass(): string {
    return this.getDataValue('pass')
  }

  set pass(value: string) {
    this.setDataValue('pass', this.generateHash(value))
  }

  @Column({
    allowNull: false,
    type: DataType.STRING,
  }) nombres!: string

  @Column({
    allowNull: false,
    type: DataType.STRING,
  }) apellidos!: string

  @Column({
    type: DataType.STRING,
  }) rol!: string

  @BelongsToMany(() => Asignatura, () => UsuarioAsignatura)
  asignaturas?: Asignatura[]

  @BelongsToMany(() => Grupo, () => UsuarioGrupo)
  grupos?: Grupo[]

  @HasMany(() => Nota)
  notas?: Nota[]

  async sync() {
    const asignaturas = await this.getAsignaturas()
    const grupos = await this.getGrupos()
    const notas = await this.getNotas()
    this.setDataValue('asignaturas', asignaturas)
    this.setDataValue('grupos', grupos)
    this.setDataValue('notas', notas)
  }

  async getAsignaturas() {
    let asignaturas: Asignatura[] = []
    const usuarioAsignaturas = await UsuarioAsignatura.findAll({ where: { usuarioId: this.id }})
    const allAsignaturas = await Asignatura.findAll()

    for (const ua of usuarioAsignaturas) {
      const asignatura = allAsignaturas.find(({ id }) => id === ua.asignaturaId)
      if (asignatura) { asignaturas.push(asignatura) }
    }

    return asignaturas
  }

  async getGrupos() {
    let grupos: Grupo[] = []
    const usuarioGrupos = await UsuarioGrupo.findAll({ where: { usuarioId: this.id }})
    const allGrupos = await Grupo.findAll()

    for (const ug of usuarioGrupos) {
      const grupo = allGrupos.find(({ id }) => id === ug.grupoId)
      if (grupo) { grupos.push(grupo) }
    }

    return grupos
  }

  async getNotas() {
    return await Nota.findAll({ where: { usuarioId: this.id }})
  }

  generateHash(password: string) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  }

  validPassword(password: string) {
    return bcrypt.compareSync(password, this.pass)
  }

  toJSON() {
    const values = Object.assign({}, this.get())
    delete values.pass
    return values
  }
}