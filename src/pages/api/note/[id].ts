import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

// @ts-ignore
import notes from '../../../data/data'

const getNote = (id: string) => notes.find((n) => n.id === parseInt(id))

const handler = nextConnect()
  .get((req: NextApiRequest, res: NextApiResponse) => {
    console.log({ id: req.query.id })
    const note = getNote(req.query.id as string)
    console.log({ note })

    if (!note) {
      res.statusCode = 404
      res.end()
      return
    }

    res.json({ data: note })
  })
  .patch((req: NextApiRequest, res: NextApiResponse) => {
    const note = getNote(req.query.id as string)

    if (!note) {
      res.statusCode = 404
      res.end()
      return
    }

    const i = notes.findIndex((n) => n.id === parseInt(req.query.id as string))
    const updated = { ...note, ...req.body }
    notes[i] = updated

    res.json({ data: updated })
  })
  .delete((req: NextApiRequest, res: NextApiResponse) => {
    const note = getNote(req.query.id as string)

    if (!note) {
      res.statusCode = 404
      res.end()
      return
    }

    const i = notes.findIndex((n) => n.id === parseInt(req.query.id as string))
    notes.splice(i, 1)

    res.json({ data: req.query.id })
  })

export default handler