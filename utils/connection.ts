import { Sequelize } from 'sequelize-typescript'

import Asignatura from '../models/asignatura'
import Grupo from '../models/grupo'
import Nota from '../models/nota'
import Usuario from '../models/usuario'
import UsuarioAsignatura from '../models/usuarioasignatura'
import UsuarioGrupo from '../models/usuariogrupo'

let db: Sequelize | null = null

if (!db) {
  db = new Sequelize("gestion-notas", "root", "", {
    dialect: 'mysql',
    logging: console.log,
  })

  db.addModels([
    Asignatura,
    Grupo,
    Nota,
    Usuario,
    UsuarioAsignatura,
    UsuarioGrupo,
  ])
}

export const connectDB = async () => {
  try {
    await db?.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.warn('Error connecting to database', error)
  }
}

export const syncDB = async () => {
  try {
    await db?.sync()
    console.log('Database synced successfully.')
  } catch (error) {
    console.warn('Error syncing database', error)
  }
}

export const closeDB = async () => {
  try {
    await db?.close()
    console.log('Connection has been closed successfully.')
  } catch (error) {
    console.warn('Error closing database', error)
  }
}

export default db as Sequelize