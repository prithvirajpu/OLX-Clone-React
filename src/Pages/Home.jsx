import React,{useState} from 'react'
import './Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Login from '../Components/Modal/Login'


const Home = () => {
  const [openModal,setModal]=useState(false)
  const toggleModal=()=>{
    setModal(!openModal)
  }
  return (
    <div>
      <Navbar toggleModal={toggleModal}/>
      <Login toggleModal={toggleModal} status={openModal} />
    </div>
  )
}

export default Home
