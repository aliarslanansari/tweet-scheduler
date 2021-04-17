import { Button, Card, Col, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Title from 'antd/lib/typography/Title'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { PlusIcon } from '../../Assets/Icons'
import HeaderText from '../../Components/HeaderText'
import { routeConfig } from '../../routeConfig'
interface DashboardPropsTypes {
  showSideBar: boolean
}

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

const Dashboard = (props: DashboardPropsTypes) => {
  useEffect(() => {
    fetch('http://localhost:4000/auth/twitter', {
      method: 'GET',
      credentials: 'include',
      //@ts-ignore
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => {
        if (response.status === 200) return response.json()
        throw new Error('failed to authenticate user')
      })
      .then((responseJson) => {
        console.log(responseJson)
      })
      .catch((error) => {
        console.error('error: ', error)
      })
  }, [])
  const history = useHistory()
  return (
    <CustomContent>
      <Row>
        <CustomCol xs={24} sm={24} md={24} lg={18} xl={18} xxl={18}>
          <HeaderText text='Good Morning, Ali Arsalan' />
        </CustomCol>
        <CustomCol xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
          <CustomDiv>
            <CustomButton
              type='primary'
              size='large'
              onClick={() => {
                history.push(routeConfig.compose.path)
              }}
            >
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

export default Dashboard
