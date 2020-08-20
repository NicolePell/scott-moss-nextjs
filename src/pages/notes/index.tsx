/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const NotesIndex = ({ notes }) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My Notes</h1>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {notes.map((note) => (
          <div key={note.id} sx={{ width: '33%', p: 2 }}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotesIndex

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/api/note/`)
  const { data } = await response.json()

  return {
    props: { notes: data },
  }
}
