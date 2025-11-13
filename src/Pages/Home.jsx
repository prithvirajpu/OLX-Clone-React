import React, { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Login from '../Components/Modal/Login'
import Sell from '../Components/Modal/Sell'
const Card=lazy(()=>import('../Components/Card/Card'))
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
      <Suspense fallback={<div className="text-center mt-10">Loading Items ...</div>}>
      <Card items={items || []} />
      </Suspense>

    </div>
  )
}

export default Home
