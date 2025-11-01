import React from 'react'
import Home from './Pages/Home'
import { ItemsContextProvider } from './Components/Context/Item'

const App = () => {
  return (
    <ItemsContextProvider>
      <Home />
    </ItemsContextProvider>
  )
}

export default App
