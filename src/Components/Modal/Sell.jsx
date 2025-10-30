import React, { useState } from 'react'
import {Modal, ModalBody} from 'flowbite-react'
import Input from '../Input/Input'
import { UserAuth } from '../Context/Auth'

const Sell = (props) => {
    const {toggleModalSell,status}=props

    const [title,setTitle]=useState('')
    const [category,setCategory]=useState('')
    const [price,setPrice]=useState(0)
    const [description,setDescription]=useState('')

    const auth=UserAuth

  return (
    <div>
      <Modal  theme={{
        'content':{
            'base':'relative w-full p-4 md:h-auto',
            'inner':'relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700'
        }
      }} onClick={toggleModalSell} show={status} className='bg-black' position={'center'} size='md' popup={true} > 
      <ModalBody className='bg-white h-96 p-6 rounded-md overflow-x-hidden' onClick={e=>e.stopPropagation()}>
        <div className='w-full'>
            <p className='font-bold text-lg mb-3'>Sell Item</p>

            <form className='w-full'>
                <Input setInput={setTitle} placeholder='Title'/>
                <Input setInput={setCategory} placeholder='Category'/>
                <Input setInput={setPrice} placeholder='Price'/>
                <Input setInput={setDescription} placeholder='Description'/>
            </form>
        </div>
      </ModalBody>

      </Modal>
    </div>
  )
}

export default Sell