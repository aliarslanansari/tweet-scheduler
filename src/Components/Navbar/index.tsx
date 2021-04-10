import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../theme/colors'
import NavbarMenuButton from '../NavbarMenuButton'

const StyledNavbar = styled.div`
  position: fixed;
  background-color: ${colors.navbarBackgroundColor};
  height: 100%;
  width: 250px;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  flex-direction: column;
  display: flex;
  padding: 25px;
`
const SubContainer = styled.div`
  width: 100%;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
`
const NavbarFooter = styled.div`
  height: 25%;
`
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  font-size: 2rem;
  padding: 0 1rem;
  color: ${colors.twitterPrimaryColor};
`
interface NavBarPropTypes {
  logo: React.ReactNode
  title: string
  showSideBar: boolean
  navigationMenuOptions: {
    label: string
    icon: JSX.Element
    path: string
  }[]
}

const Navbar = (props: NavBarPropTypes) => {
  const { logo, title, showSideBar, navigationMenuOptions } = props
  const currentURL = useLocation()
  const history = useHistory()

  return showSideBar ? (
    <StyledNavbar>
      <LogoWrapper>
        {logo}
        {title}
      </LogoWrapper>
      <SubContainer>
        {navigationMenuOptions.map((option, index) => (
          <div
            onClick={() => {
              history.push(option.path)
            }}
            style={{ width: '100%' }}
          >
            <NavbarMenuButton
              label={option.label}
              selected={currentURL.pathname === option.path}
              icon={option.icon}
            />
          </div>
        ))}
      </SubContainer>
      <NavbarFooter></NavbarFooter>
    </StyledNavbar>
  ) : null
}

export default Navbar
