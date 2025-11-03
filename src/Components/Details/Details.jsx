import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useItemsContext } from '../Context/Item';
import Navbar from '../Navbar/Navbar';
import Login from '../Modal/Login';
import Sell from '../Modal/Sell';

const Details = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [openModal, setModal] = useState(false);
  const [openModalSell, setModalSell] = useState(false);
  const itemCtx = useItemsContext();

  const toggleModal = () => setModal(!openModal);
  const toggleModalSell = () => setModalSell(!openModalSell);

  return (
    <div>
      <Navbar toggleModalSell={toggleModalSell} toggleModal={toggleModal} />
      <Login toggleModal={toggleModal} status={openModal} />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10 md:px-20 lg:px-32'>
        <div className='border-2 rounded-xl flex justify-center items-center overflow-hidden h-96 bg-gray-50'>
          <img
            className='object-cover w-full h-full'
            src={item?.imageUrl}
            alt={item?.title}
          />
        </div>

        <div className='flex flex-col justify-between'>
          <div>
            <p className='text-3xl font-bold mb-2'>₹{item?.price}</p>
            <p className='text-gray-600 text-lg mb-2'>{item?.category}</p>
            <p className='text-2xl font-semibold mb-3'>{item?.title}</p>
            <p className='text-gray-700 break-words leading-relaxed'>
              {item?.Description}
            </p>
          </div>

          <div className='flex justify-between items-center mt-6 text-sm text-gray-600'>
            <p><span className='font-semibold'>Seller:</span> {item?.userName}</p>
            <p>{item?.createdAt}</p>
          </div>
        </div>
      </div>

      <Sell setItems={itemCtx.setItems} toggleModalSell={toggleModalSell} status={openModalSell} />
    </div>
  );
};

export default Details;
