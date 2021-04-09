import React, { Fragment } from 'react'
import './App.css'
import { TweeterLogo } from './Assets/Logos'
import Navbar from './Components/Navbar'
import Dashboard from './Container/Dashboard'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar
        logo={<TweeterLogo height={'4rem'} width={'5rem'} />}
        title='Twitter'
      />
      <Dashboard />
    </Fragment>
  )
}

export default App
