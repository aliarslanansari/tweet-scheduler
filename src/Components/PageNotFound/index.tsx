import { Content } from 'antd/lib/layout/layout'
import Title from 'antd/lib/typography/Title'
import styled from 'styled-components'

const CustomContent = styled(Content)`
  padding: 0 24px 24px;
  height: 100%;
`

const PageNotFound = () => {
  return (
    <CustomContent>
      <Title>You've Lost</Title>
      <Title level={5}>
        please navigate to other page from the Navigation Menu
      </Title>
    </CustomContent>
  )
}

export default PageNotFound
