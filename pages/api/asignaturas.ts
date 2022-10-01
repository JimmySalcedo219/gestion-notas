import { NextApiRequest, NextApiResponse } from 'next'
import { syncDB } from '../../utils/connection'
import Asignatura from '../../models/asignatura'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body } = req
    await syncDB()
    console.info('handler', method, method === 'DELETE')

    const { id, nombreAsig } = body

    if (method === 'DELETE') {
      if (id) {
        await Asignatura.destroy({ where: { id } })

        return res.status(200).json({
          message: 'Asignatura eliminada'
        })
      }
    } else if (method === 'GET') {
      let respuesta: any = await Asignatura.findAll()

      if (id) {
        respuesta = await Asignatura.findOne({ where: { id } })
      }

      return res.status(200).json({
        asignaturas: respuesta,
      })
    } else if (method === 'POST') {
      if (nombreAsig) {
        const nuevaAsignatura = await Asignatura.create({ nombreAsig })

        return res.status(200).json({
          asignatura: nuevaAsignatura,
        })
      }
    } else if (method === 'PATCH') {
      if (id && nombreAsig) {
        await Asignatura.update(
          { nombreAsig },
          { where: { id } }
        )

        return res.status(200).json({
          message: 'Asignatura actualizada'
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