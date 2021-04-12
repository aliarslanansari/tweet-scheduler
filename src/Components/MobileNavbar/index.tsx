import { Col, Grid, Row } from 'antd'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../theme/colors'
import NavbarMenuButton from '../NavbarMenuButton'

const StyledNavbar = styled.div`
  position: fixed;
  background-color: ${colors.navbarBackgroundColor};
  height: 60px;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  flex-direction: column;
  display: flex;
  z-index: 11;
  box-shadow: 1px -32px 64px -26px rgba(41, 41, 41, 0.4);
  -webkit-box-shadow: 1px -32px 64px -26px rgba(41, 41, 41, 0.4);
  -moz-box-shadow: 1px -32px 64px -26px rgba(41, 41, 41, 0.4);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 0.2px solid #e4e0e0;
`
const CustomRow = styled(Row)`
  width: 100vw;
  height: 60px;
`
const CustomCol = styled(Col)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  font-size: 0.7rem;
  &:hover {
    background-color: ${colors.navbarMenuButtonBackgroundColor};
  }
`
const SubContainer = styled.div`
  width: 100%;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
`
const NavbarFooter = styled.div`
  height: 25%;
`
interface NavBarPropTypes {
  navigationMenuOptions: {
    label: string
    icon: JSX.Element
    path: string
  }[]
}

const MobileNavbar = (props: NavBarPropTypes) => {
  const { navigationMenuOptions } = props
  const currentURL = useLocation()
  const history = useHistory()

  return (
    <StyledNavbar>
      <SubContainer>
        <CustomRow>
          {navigationMenuOptions.map((option, index) => (
            <CustomCol
              xs={24 / navigationMenuOptions.length}
              sm={24 / navigationMenuOptions.length}
              onClick={() => {
                history.push(option.path)
              }}
            >
              {option.icon}
              {option.label}
              {/* <NavbarMenuButton
                  label={option.label}
                  selected={currentURL.pathname === option.path}
                  icon={option.icon}
                /> */}
            </CustomCol>
          ))}
        </CustomRow>
      </SubContainer>
      <NavbarFooter></NavbarFooter>
    </StyledNavbar>
  )
}

export default MobileNavbar
