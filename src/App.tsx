import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { TweeterLogo } from './Assets/Icons'
import Navbar from './Components/Navbar'
import { PageWrap } from './Components/PageWrap'
import Routes from './Components/Routes'
import GlobalStyle from './globalStyles'
import { API, Storage } from 'aws-amplify'
import { routeConfig } from './routeConfig'
import { breakpoints } from './theme/style'
import { navigationMenuOptions } from './utils/naviagtionOptions'
import { useWindowSize } from './utils/hooks'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { listNotes } from './graphql/queries'
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation
} from './graphql/mutations'
const initialFormState = { name: '', description: '', image: '' }

function App() {
  const [notes, setNotes] = useState<
    {
      id: number
      name: string
      description: string
      image: string
    }[]
  >([])
  const [formData, setFormData] = useState(initialFormState)

  useEffect(() => {
    fetchNotes()
  }, [])

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes })
    //@ts-ignore
    const notesFromAPI = apiData?.data?.listNotes?.items
    await Promise.all(
      notesFromAPI.map(async (note: any) => {
        if (note.image) {
          const image = await Storage.get(note.image)
          note.image = image
        }
        return note
      })
    )
    //@ts-ignore
    setNotes(apiData.data.listNotes.items)
  }
  async function onChange(e: any) {
    if (!e.target.files[0]) return
    const file = e.target.files[0]
    setFormData({ ...formData, image: file.name })
    await Storage.put(file.name, file)
    fetchNotes()
  }
  async function createNote() {
    if (!formData.name || !formData.description) return
    await API.graphql({
      query: createNoteMutation,
      variables: { input: formData }
    })
    if (formData.image) {
      const image = await Storage.get(formData.image)
      formData.image = image as string
    }
    //@ts-ignore
    setNotes([...notes, formData])
    setFormData(initialFormState)
  }

  async function deleteNote({ name }: { name: string }) {
    //@ts-ignore
    const newNotesArray = notes.filter((note) => note.name !== name)
    setNotes(newNotesArray)
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { name } }
    })
  }

  const sizes = useWindowSize()
  const [showDesktopSideBar, setDesktopShowSideBar] = useState(true)
  useEffect(() => {
    sizes.width && sizes.width < breakpoints.sm
      ? setDesktopShowSideBar(false)
      : setDesktopShowSideBar(true)
  }, [sizes.width])

  return (
    <Fragment>
      <GlobalStyle />
      <div className='App'>
        <h1>My Notes App</h1>
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder='Note name'
          value={formData.name}
        />
        <input
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder='Note description'
          value={formData.description}
        />
        <input type='file' onChange={onChange} />
        <button onClick={createNote}>Create Note</button>
        <div style={{ marginBottom: 30 }}>
          {notes?.map((note) => (
            //@ts-ignore
            <div key={note.id || note.name}>
              <h2>{JSON.stringify(note, null, 2)}</h2>
              {note.image && <img src={note.image} style={{ width: 400 }} />}
              <button onClick={() => deleteNote({ name: note?.name })}>
                Delete note
              </button>
            </div>
          ))}
        </div>
        <AmplifySignOut />
      </div>
      <BrowserRouter>
        <Navbar
          navigationMenuOptions={navigationMenuOptions}
          showSideBar={showDesktopSideBar}
          logo={<TweeterLogo height={'4rem'} width={'5rem'} />}
          title='Twitter'
        />
        <PageWrap sizes={sizes} showSideBar={showDesktopSideBar}>
          <Routes routeConfig={routeConfig} />
        </PageWrap>
      </BrowserRouter>
    </Fragment>
  )
}

export default withAuthenticator(App)
