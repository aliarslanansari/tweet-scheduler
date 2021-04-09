import React from 'react'
import './App.css'
import Dashboard from './Container/Dashboard'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Dashboard />
    </ChakraProvider>
  )
}

export default App
