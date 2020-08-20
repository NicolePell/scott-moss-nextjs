import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

// @ts-ignore
import notes from '../../../data/data'

const handler = nextConnect()
  .get((req: NextApiRequest, res: NextApiResponse) => {
    res.json({ data: notes })
  })
  .post((req: NextApiRequest, res: NextApiResponse) => {
    const id = Date.now()
    const note = { ...req.body, id }
    notes.push(note)

    res.json({ data: note })
  })

export default handler
