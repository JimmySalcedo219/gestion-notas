// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../utils/connection";

export default async function handler(req, res) {
  try {
    await db.authenticate();
    res.status(200).json({ respuesta: 'Connection has been established successfully.'});
  } catch (error) {
    res.status(500).json({error: 'Unable to connect to the database:'});
  }
  
}
