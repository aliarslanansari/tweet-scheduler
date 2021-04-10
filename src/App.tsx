import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { TweeterLogo } from './Assets/Icons'
import Navbar from './Components/Navbar'
import { PageWrap } from './Components/PageWrap'
import Routes from './Components/Routes'
import GlobalStyle from './globalStyles'
import { routeConfig } from './routeConfig'
import { breakpoints } from './theme/style'
import { navigationMenuOptions } from './utils/naviagtionOptions'
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
      <BrowserRouter>
        <Navbar
          navigationMenuOptions={navigationMenuOptions}
          showSideBar={showSideBar}
          logo={<TweeterLogo height={'4rem'} width={'5rem'} />}
          title='Twitter'
        />
        <PageWrap showSideBar={showSideBar}>
          <Routes routeConfig={routeConfig} />
        </PageWrap>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
