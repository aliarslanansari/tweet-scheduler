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

export default App
