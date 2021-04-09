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
  padding-inline-start: 1rem;
  width: 100%;
  font-size: 1.1rem;
  padding: 1rem;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  ${rippleEffect('#BFDBFE', '#52A7E7')}
`
interface NavbarMenuButtonPropsTypes {
  label: string
  bgColor?: string
  selected: boolean
}
const NavbarMenuButton = (props: NavbarMenuButtonPropsTypes) => {
  const { label, selected } = props
  return <CustomMenu selected={selected}>{label}</CustomMenu>
}

export default NavbarMenuButton
