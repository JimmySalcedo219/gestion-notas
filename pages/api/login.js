import db from '../../utils/connection'
import Usuario from '../../models/usuario'


export default async function handler(req, res) {
  try {
    const { method, body } = req
    await db?.sync({ force: true })
    
    if (method === 'POST') {
        const {username, password} = body
        
        if (!username || !password) {
            return res.status(400).json({
                error: 'missing_required_fields',
                message: 'Email and password required',
            })
        }
        
      //const user = await Usuario().findOne({ where: { username } })
      const user = await Usuario.findAll()
      console.info(username, user)
      if (!user) {
        return res.status(404).json({
          error: 'not_found',
          message: 'User not found',
        })
      }

      if (!user.validPassword(password)) {
        return res.status(400).json({
          error: 'invalid_password',
          message: 'Incorrect password',
        })
      }

      return res.status(200).json({
        message: 'Login Success!',
        user: user.toJSON(),
      })
    }

    return res.status(405).json({
      error: 'method_not_allowed',
      message: 'Method not allowed',
    })
  } catch (error) {
    const message = (error.message || error) ?? 'Something went wrong'
    return res.status(500).json({
      error: 'unexpected_error',
      message,
    })
  }
}