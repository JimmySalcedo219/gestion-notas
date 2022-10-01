import { NextApiRequest, NextApiResponse } from 'next'
import { syncDB } from '../../utils/connection'
import Usuario from '../../models/usuario'
import UsuarioAsignatura from '../../models/usuarioasignatura'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body, query } = req
    await syncDB()

    const { id, nombres, apellidos, username, pass, asignaturaId } = body

    if (method === 'GET') {
      let respuesta: any = await Usuario.findAll({ where: { rol: 'docente' } })
      for (const res of respuesta) {
        await res.sync()
      }

      if (query.id) {
        respuesta = await Usuario.findOne({ where: { id: query.id } })
        await respuesta.sync()
      }

      return res.status(200).json({
        docentes: respuesta,
      })
    } else if (method === 'POST') {
      if (nombres && apellidos && username && pass && asignaturaId) {
        const nuevoDocente = await Usuario.create({
          nombres,
          apellidos,
          username,
          pass,
          rol: 'docente',
          createdAt: new Date(),
        })
        await UsuarioAsignatura.create({ usuarioId: nuevoDocente.id, asignaturaId })

        return res.status(200).json({
          docente: nuevoDocente,
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
          message: 'Docente actualizado'
        })
      }
    } else if (method === 'DELETE') {
      if (id) {
        await UsuarioAsignatura.destroy({ where: { usuarioId: id } })
        await Usuario.destroy({ where: { id } })

        return res.status(200).json({
          message: 'Docente eliminada'
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