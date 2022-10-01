import { NextApiRequest, NextApiResponse } from 'next'
import { syncDB } from '../../utils/connection'
import Grupo from '../../models/grupo'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body } = req
    await syncDB()

    const { id, nomgrupo } = body

    if (method === 'GET') {
      let respuesta: any = await Grupo.findAll()

      if (id) {
        respuesta = await Grupo.findOne({ where: { id } })
      }

      return res.status(200).json({
        grupos: respuesta,
      })
    } else if (method === 'POST') {
      if (nomgrupo) {
        const nuevaGrupo = await Grupo.create({ nomgrupo })

        return res.status(200).json({
          grupo: nuevaGrupo,
        })
      }
    } else if (method === 'PATCH') {
      if (id && nomgrupo) {
        await Grupo.update(
          { nomgrupo },
          { where: { id } }
        )

        return res.status(200).json({
          message: 'Grupo actualizada'
        })
      }
    } else if (method === 'DELETE') {
      if (id) {
        await Grupo.destroy({ where: { id } })

        return res.status(200).json({
          message: 'Grupo eliminada'
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