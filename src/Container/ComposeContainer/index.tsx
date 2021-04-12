import { Button, Card, Col, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Title from 'antd/lib/typography/Title'
import styled from 'styled-components'
import { PlusIcon } from '../../Assets/Icons'
import HeaderText from '../../Components/HeaderText'

const CustomContent = styled(Content)`
  padding: 0 24px 24px;
  height: 100%;
`
const CustomDiv = styled.div`
  width: 100%;
  display: flex !important;
  height: 100%;
  justify-content: flex-end;
`
const CustomButton = styled(Button)`
  justify-self: end;
  min-width: 211px;
  width: 35%;
  font-weight: 600;
  justify-content: space-around;
  align-items: center;
  display: flex;
`
const CustomCol = styled(Col)`
  margin-top: 15px;
`

const ComposeContainer = () => {
  return (
    <CustomContent>
      <Row>
        <CustomCol xs={24} sm={24} md={24} lg={18} xl={18} xxl={18}>
          <HeaderText text='Compose, Ali Arsalan' />
        </CustomCol>
        <CustomCol xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
          <CustomDiv>
            <CustomButton type='primary' size='large'>
              <PlusIcon fill='#ffffff' /> Create new tweet
            </CustomButton>
          </CustomDiv>
        </CustomCol>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ marginTop: '2rem' }}
      >
        <CustomCol xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card
            title={<Title level={4}>Scheduled Tweets</Title>}
            bordered={false}
            style={{ width: '100%', borderRadius: '0.5rem' }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </CustomCol>
        <CustomCol xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card
            title={<Title level={4}>Previous Tweets</Title>}
            bordered={false}
            style={{ width: '100%', borderRadius: '0.5rem' }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </CustomCol>
      </Row>
    </CustomContent>
  )
}

export default ComposeContainer
