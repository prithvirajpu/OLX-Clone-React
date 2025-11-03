import React from 'react'
import Home from './Pages/Home'
import { ItemsContextProvider } from './Components/Context/Item'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details/Details'
import MyAds from "./Pages/Myads";



const App = () => {
  return (
    <ItemsContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path="/myads" element={<MyAds />} />
      </Routes>
    </ItemsContextProvider>
  )
}

export default App
