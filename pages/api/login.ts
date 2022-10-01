import { NextApiRequest, NextApiResponse } from 'next'
import { syncDB } from '../../utils/connection'
import Usuario from '../../models/usuario'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body } = req
    await syncDB()

    if (method === 'POST') {
        const {username, password} = body

        if (!username || !password) {
            return res.status(400).json({
                error: 'missing_required_fields',
                message: 'Email and password required',
            })
        }

      const usuario = await Usuario.findOne({ where: { username } })
      console.info(username, usuario)
      if (!usuario) {
        return res.status(404).json({
          error: 'not_found',
          message: 'Usuario no encontrado',
        })
      }

      if (!usuario.validPassword(password)) {
        return res.status(400).json({
          error: 'invalid_password',
          message: 'Contraseña incorrecta',
        })
      }

      let message = 'Bienvenido!'

      if (usuario.rol === 'administrador') {
        message = 'Bienvenido Admin!'
      } else if (usuario.rol === 'docente') {
        message = 'Bienvenido Docente!'
      } else if (usuario.rol === 'estudiante') {
        message = 'Bienvenido Estudiante!'
      }

      return res.status(200).json({
        message,
        usuario: usuario.toJSON(),
      })
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