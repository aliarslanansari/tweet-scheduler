import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  height: 100vh;
  overflow: auto;
  text-align: justify;
  font-family: 'Inter', sans-serif;
`
interface ContainerPropsTypes {
  children: React.ReactNode
}
export const PageWrap = (props: ContainerPropsTypes) => {
  const { children } = props
  return <Container {...props}>{children}</Container>
}
