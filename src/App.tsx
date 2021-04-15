import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { TweeterLogo } from './Assets/Icons'
import Navbar from './Components/Navbar'
import { PageWrap } from './Components/PageWrap'
import Routes from './Components/Routes'
import GlobalStyle from './globalStyles'
import { API } from 'aws-amplify'
import { routeConfig } from './routeConfig'
import { breakpoints } from './theme/style'
import { navigationMenuOptions } from './utils/naviagtionOptions'
import { useWindowSize } from './utils/hooks'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { listTodos } from './graphql/queries'
import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation
} from './graphql/mutations'
const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState<
    {
      id: number
      name: string
      description: string
    }[]
  >([])
  const [formData, setFormData] = useState(initialFormState)

  useEffect(() => {
    fetchNotes()
  }, [])

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listTodos })
    //@ts-ignore
    setNotes(apiData?.data?.listNotes?.items)
  }

  async function createNote() {
    if (!formData.name || !formData.description) return
    await API.graphql({
      query: createTodoMutation,
      variables: { input: formData }
    })
    //@ts-ignore
    setNotes([...(notes || []), formData])
    setFormData(initialFormState)
  }

  async function deleteNote({ name }: { name: string }) {
    //@ts-ignore
    const newNotesArray = notes.filter((note) => note.name !== name)
    setNotes(newNotesArray)
    await API.graphql({
      query: deleteTodoMutation,
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
        <button onClick={createNote}>Create Note</button>
        <div style={{ marginBottom: 30 }}>
          {notes?.map((note) => (
            //@ts-ignore
            <div key={note.id || note.name}>
              <h2>{JSON.stringify(note, null, 2)}</h2>
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
