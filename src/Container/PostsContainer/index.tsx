import { Content } from 'antd/lib/layout/layout'
import Title from 'antd/lib/typography/Title'
import styled from 'styled-components'

const CustomContent = styled(Content)`
  padding: 0 24px 24px;
  height: 100%;
`

const PostContainer = () => {
  return (
    <CustomContent>
      <Title>All Tweets</Title>
      <Title level={5}>.......................................</Title>
    </CustomContent>
  )
}

export default PostContainer
