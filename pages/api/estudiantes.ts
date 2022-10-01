import { NextApiRequest, NextApiResponse } from 'next'
import { syncDB } from '../../utils/connection'
import Asignatura from '../../models/asignatura'
import Usuario from '../../models/usuario'
import UsuarioAsignatura from '../../models/usuarioasignatura'
import UsuarioGrupo from '../../models/usuariogrupo'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body, query } = req
    await syncDB()

    const { id, nombres, apellidos, username, pass, grupoId } = body

    if (method === 'GET') {
      let respuesta: any = await Usuario.findAll({ where: { rol: 'estudiante' } })
      for (const res of respuesta) {
        await res.sync()
        if (!!res.notas) {
          for (const nota of res.notas) {
            await nota.sync()
          }
        }
      }

      if (query.id) {
        respuesta = await Usuario.findOne({ where: { id: query.id } })
        await respuesta.sync()
        if (!!respuesta.notas) {
          for (const nota of respuesta.notas) {
            await nota.sync()
          }
        }
      }

      return res.status(200).json({
        estudiantes: respuesta,
      })
    } else if (method === 'POST') {
      if (nombres && apellidos && username && pass && grupoId) {
        const nuevoEstudiante = await Usuario.create({
          nombres,
          apellidos,
          username,
          pass,
          rol: 'estudiante',
        })
        await UsuarioGrupo.create({ usuarioId: nuevoEstudiante.id, grupoId })
        const asignaturas = await Asignatura.findAll()
        asignaturas.forEach(async (asignatura) => {
          await UsuarioAsignatura.create({ usuarioId: nuevoEstudiante.id, asignaturaId: asignatura.id })
        })

        return res.status(200).json({
          estudiante: nuevoEstudiante,
        })
      }
    } else if (method === 'PATCH') {
      if (id && nombres && apellidos && username) {
        await Usuario.update({
          nombres,
          apellidos,
          username,
        }, { where: { id }})

        return res.status(200).json({
          message: 'Estudiante actualizado'
        })
      }
    } else if (method === 'DELETE') {
      if (id) {
        await UsuarioAsignatura.destroy({ where: { usuarioId: id } })
        await UsuarioGrupo.destroy({ where: { usuarioId: id } })
        await Usuario.destroy({ where: { id } })

        return res.status(200).json({
          message: 'Estudiante eliminada'
        })
      }
    }

    return res.status(405).json({
      error: 'method_not_allowed',
      message: 'Method not allowed',
    })
  } catch (error: Error | any) {
    const message = (error.message || error) ?? 'Something went wrong'
    return res.status(500).json({
      error: 'unexpected_error',
      message,
    })
  }
}