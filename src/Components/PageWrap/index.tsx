import styled from 'styled-components'
interface ContainerPropsTypes {
  showSideBar: boolean
}
const Container = styled.div<ContainerPropsTypes>`
  margin-inline-start: ${(props) => (props.showSideBar ? '250px' : '0px')};
  padding-left: ${(props) => (props.showSideBar ? '10%' : '0')};
  padding-right: ${(props) => (props.showSideBar ? '10%' : '0')};
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
interface ContainerPropsTypes {
  children: React.ReactNode
  showSideBar: boolean
}
export const PageWrap = (props: ContainerPropsTypes) => {
  const { children } = props
  return <Container {...props}>{children}</Container>
}
