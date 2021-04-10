import { Button, Col, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import styled from 'styled-components'
import HeaderText from '../../Components/HeaderText'
import { PageWrap } from '../../Components/PageWrap'

const CustomPageWrap = styled(PageWrap)`
  margin-inline-start: 250px;
  padding-left: 10%;
  padding-right: 10%;
`

const CustomContent = styled(Content)`
  padding: 0 24px 24px;
  height: 100%;
`

const Dashboard = () => {
  return (
    <CustomPageWrap>
      <CustomContent>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align='middle'>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <HeaderText text='Good Morning, Ali Arsalan' />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Button>Create New Post</Button>
          </Col>
        </Row>
      </CustomContent>
    </CustomPageWrap>
  )
}

export default Dashboard
