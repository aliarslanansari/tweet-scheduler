import React from 'react'
import styled from 'styled-components'
import colors from '../../theme/colors'
import NavbarMenuButton from '../NavbarMenuButton'

const StyledNavbar = styled.div`
  position: fixed;
  background-color: ${colors.navbarBackgroundColor};
  height: 100%;
  width: 220px;
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
}

const Navbar = (props: NavBarPropTypes) => {
  const { logo, title } = props
  return (
    <StyledNavbar>
      <LogoWrapper>
        {logo}
        {title}
      </LogoWrapper>
      <SubContainer>
        <NavbarMenuButton label='Dashboard' selected />
        <NavbarMenuButton label='Dashboard' selected={false} />
        <NavbarMenuButton label='Dashboard' selected={false} />
        <NavbarMenuButton label='Dashboard' selected={false} />
        <NavbarMenuButton label='Dashboard' selected={false} />
        <NavbarMenuButton label='Dashboard' selected={false} />
      </SubContainer>
      <NavbarFooter></NavbarFooter>
    </StyledNavbar>
  )
}

export default Navbar
