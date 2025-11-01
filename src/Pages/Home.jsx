import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Login from '../Components/Modal/Login'
import Sell from '../Components/Modal/Sell'
import Card from '../Components/Card/Card'
import { useItemsContext } from '../Components/Context/Item'
import { fetchFromFireStore } from '../Components/Firebase/Firebase'

const Home = () => {
  const [openModalSell, setModalSell] = useState(false)
  const [openModal, setModal] = useState(false)
  const { items, setItems } = useItemsContext() 

  const toggleModal = () => setModal(!openModal)
  const toggleModalSell = () => setModalSell(!openModalSell)

  useEffect(() => {
    const getItems = async () => {
      try {
        const datas = await fetchFromFireStore()
        setItems(datas)
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    }
    getItems()
  }, [])

  useEffect(() => {
    console.log('Updated Items:', items)
  }, [items])

  return (
    <div>
      <Navbar toggleModal={toggleModal} toggleModalSell={toggleModalSell} />
      <Login toggleModal={toggleModal} status={openModal} />
      <Sell setItems={setItems} toggleModalSell={toggleModalSell} status={openModalSell} />
      <Card items={(items).items||[]}/>
    </div>
  )
}

export default Home
