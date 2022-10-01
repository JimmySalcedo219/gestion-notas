import { NextApiRequest, NextApiResponse } from 'next'
import { syncDB } from '../../utils/connection'
import Nota from '../../models/nota'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body, query } = req
    await syncDB()

    const { nota1, nota2, nota3, nota4, nota5 } = body

    if (method === 'GET') {
      const { estudianteId, asignaturaId } = query

      if (estudianteId && asignaturaId) {
        const nota = await Nota.findOrCreate({ where: { usuarioId: estudianteId, asignaturaId } })
        return res.status(200).json({ nota: nota[0] })
      }
    } else if (method === 'POST') {
      const { estudianteId, asignaturaId } = body

      if (estudianteId && asignaturaId) {
        const nota = await Nota.findOne({ where: { usuarioId: estudianteId, asignaturaId } })

        if (nota) {
          const notaFinal = ((nota1 || 0) + (nota2 || 0) + (nota3 || 0) + (nota4 || 0) + (nota5 || 0)) / 5
          await Nota.update({
            nota1,
            nota2,
            nota3,
            nota4,
            nota5,
            notaFinal,
          }, { where: { id: nota.id }})

          return res.status(200).json({
            message: 'Nota actualizada',
          })
        }
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