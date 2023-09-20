import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRuter'
import GlobalProvider from './helpers/global/GlobalProvider'

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AppRouter />
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
