import React, { Fragment, useEffect, useState } from 'react'
import './App.css'
import { TweeterLogo } from './Assets/Icons'
import Navbar from './Components/Navbar'
import Dashboard from './Container/DashboardContainer'
import GlobalStyle from './globalStyles'
import { breakpoints } from './theme/style'
import { useWindowSize } from './utils/hooks'

function App() {
  const { width } = useWindowSize()
  const [showSideBar, setShowSideBar] = useState(true)
  useEffect(() => {
    width && width < breakpoints.sm
      ? setShowSideBar(false)
      : setShowSideBar(true)
  }, [width])

  return (
    <Fragment>
      <GlobalStyle />
      <Navbar
        showSideBar={showSideBar}
        logo={<TweeterLogo height={'4rem'} width={'5rem'} />}
        title='Twitter'
      />
      <Dashboard showSideBar={showSideBar} />
    </Fragment>
  )
}

export default App
