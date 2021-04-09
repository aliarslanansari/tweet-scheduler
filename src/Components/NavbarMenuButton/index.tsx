import React from 'react'
import styled from 'styled-components'
import colors from '../../theme/colors'
import { rippleEffect } from '../../theme/style'

interface CustomMenuPropsTypes {
  bgColor?: string
  selected: boolean
}

const CustomMenu = styled.div<CustomMenuPropsTypes>`
  display: flex;
  background-color: ${(props) =>
    props.selected
      ? props.bgColor
        ? props.bgColor
        : colors.navbarMenuButtonBackgroundColor
      : null};
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  padding-inline-start: 1.5rem;
  width: 100%;
  font-size: 1.1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  font-weight: 500;
  ${rippleEffect('#BFDBFE', '#52A7E7')}
`

const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const IconWrapper = styled.span`
  margin-right: 0.7rem;
`
interface NavbarMenuButtonPropsTypes {
  label: string
  bgColor?: string
  selected: boolean
  icon: React.ReactNode
}

const NavbarMenuButton = (props: NavbarMenuButtonPropsTypes) => {
  const { label, selected, icon, bgColor } = props

  return (
    <CustomMenu selected={selected} bgColor={bgColor}>
      <InnerWrap>
        <IconWrapper>{icon}</IconWrapper>
        {label}
      </InnerWrap>
    </CustomMenu>
  )
}

export default NavbarMenuButton
