import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  DashboardIcon,
  ComposeIcon,
  PostsIcon,
  ScheduleIcon
} from '../../Assets/Icons'
import colors from '../../theme/colors'
import { breakpoints, heightWidthOneRem } from '../../theme/style'
import { useWindowSize } from '../../utils/hooks'
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

const CustomDashboardLogo = styled(DashboardIcon)`
  ${heightWidthOneRem()}
`
const CustomComposeIcon = styled(ComposeIcon)`
  ${heightWidthOneRem()}
`
const CustomPostsIcon = styled(PostsIcon)`
  ${heightWidthOneRem()}
`
const CustomScheduleIcon = styled(ScheduleIcon)`
  ${heightWidthOneRem()}
`

interface NavBarPropTypes {
  logo: React.ReactNode
  title: string
  showSideBar: boolean
}

const Navbar = (props: NavBarPropTypes) => {
  const { logo, title, showSideBar } = props
  return showSideBar ? (
    <StyledNavbar>
      <LogoWrapper>
        {logo}
        {title}
      </LogoWrapper>
      <SubContainer>
        <NavbarMenuButton
          label='Dashboard'
          selected
          icon={<CustomDashboardLogo />}
        />
        <NavbarMenuButton
          label='Compose'
          selected={false}
          icon={<CustomComposeIcon />}
        />
        <NavbarMenuButton
          label='Posts'
          selected={false}
          icon={<CustomPostsIcon />}
        />
        <NavbarMenuButton
          label='Schedule'
          selected={false}
          icon={<CustomScheduleIcon />}
        />
      </SubContainer>
      <NavbarFooter></NavbarFooter>
    </StyledNavbar>
  ) : null
}

export default Navbar
