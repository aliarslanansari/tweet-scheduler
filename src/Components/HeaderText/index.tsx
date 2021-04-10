import Title from 'antd/lib/typography/Title'
import React from 'react'

interface HeaderTextPropsTypes {
  text: string
}

const HeaderText = (props: HeaderTextPropsTypes) => {
  const { text } = props
  return <Title level={2}> {text}</Title>
}

export default HeaderText
