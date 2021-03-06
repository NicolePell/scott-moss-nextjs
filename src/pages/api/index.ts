import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

const handler = nextConnect()
  .get((req: NextApiRequest, res: NextApiResponse) => {
    res.json({ message: 'OK' })
  })
  .post((req: NextApiRequest, res: NextApiResponse) => {
    res.json({ message: 'POSTED' })
  })

export default handler
