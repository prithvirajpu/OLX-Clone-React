import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useItemsContext } from '../Context/Item';
import Navbar from '../Navbar/Navbar';
import Login from '../Modal/Login';
import Sell from '../Modal/Sell';

const Details = () => {
    const location =useLocation();
    const {item}=location.state || {}
    const [openModal,setModal]=useState(false)
    const [openModalSell,setModalSell]=useState(false)
    const itemCtx=useItemsContext()
    const toggleModal=()=>setModal(!openModal)
    const toggleModalSell=()=>setModal(!openModalSell)

  return (
    <div>
      <Navbar toggleModalSell={toggleModalSell} toggleModal={toggleModal}/>
      <Login  toggleModal={toggleModal} status={openModal} />
        <div className='grid gap-0 sm:gap-5 grid-cols-1 sm:grid-cols-1 md:grid:cols-2 p-10 px-5 sm:px-15 md:px-30 lg:px-40'>
            <div className='border-2 w-full rounded-lg flex justify-center overflow-hidden h-96'>
                <img src={item?.imageUrl} alt={item?.title} />
            </div>
            <div className="flex flex-col relative w-full">
                <p>{item?.price} </p>
                <p>{item?.category} </p>
                <p>{item?.Description} </p>
                <div className='w-full relative sm:relative md:absolute bottom-0 flex justify-between'>
                    <p>Seller:{item?.userName} </p>
                    <p>Seller:{item?.createdAt} </p>

                </div>

            </div>

        </div>
        <Sell setItems={(itemCtx).setItems} toggleModalSell={toggleModalSell} status={openModalSell} />

    </div>
  )
}

export default Details
