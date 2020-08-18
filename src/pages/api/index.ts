import nextConnect from 'next-connect'

const handler = nextConnect()
  .get((req, res) => {
    res.json({ message: 'OK' })
  })
  .post((req, res) => {
    res.json({ message: 'POSTED' })
  })

export default handler
