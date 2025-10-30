import React,{useState} from 'react'
import './Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Login from '../Components/Modal/Login'
import Sell from '../Components/Modal/Sell'


const Home = () => {
  const [openModalSell,setModalSell]=useState(false)
  const [openModal,setModal]=useState(false)

  const toggleModal=()=>{
    setModal(!openModal)
  }
  const toggleModalSell=()=>{
    setModalSell(!openModal)
  }
  return (
    <div>
      <Navbar toggleModal={toggleModal} toggleModalSell={toggleModalSell}/>
      <Login toggleModal={toggleModal} status={openModal} />
      <Sell toggleModalSell={toggleModalSell} status={openModalSell} />
    </div>
  )
}

export default Home
