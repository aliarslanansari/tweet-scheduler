import styled from 'styled-components'
import { breakpoints } from '../../theme/style'
interface ContainerPropsTypes {
  showSideBar: boolean
  children: React.ReactNode
  sizes: {
    width: undefined | number
    height: undefined | number
  }
}
const Container = styled.div<ContainerPropsTypes>`
  margin-inline-start: ${(props) => (props.showSideBar ? '250px' : '0px')};
  padding-left: ${(props) =>
    props.sizes.width
      ? props.sizes.width < breakpoints.md
        ? '0%'
        : '10%'
      : '1%0'};
  padding-right: ${(props) =>
    props.sizes.width
      ? props.sizes.width < breakpoints.md
        ? '0%'
        : '10%'
      : '1%0'};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 100%;
  overflow: auto;
  text-align: justify;
  font-family: 'Inter', sans-serif;
`
export const PageWrap = (props: ContainerPropsTypes) => {
  const { children, sizes } = props
  return (
    <Container {...props} sizes={sizes}>
      {children}
    </Container>
  )
}
