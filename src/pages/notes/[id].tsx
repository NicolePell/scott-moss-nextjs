/** @jsx jsx */
import { jsx } from 'theme-ui'

const Note = ({ note }) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>{note.title.toUpperCase()}</h1>
    </div>
  )
}

export default Note

export async function getServerSideProps({ params, _req, res }) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)

  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return { props: {} }
  }

  const { data } = await response.json()

  if (data) {
    return {
      props: { note: data },
    }
  }
}
