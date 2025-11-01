import React, { useState } from 'react'
import {Modal, ModalBody} from 'flowbite-react'
import Input from '../Input/Input'
import { UserAuth } from '../Context/Auth'
import { addDoc, collection } from 'firebase/firestore'
import { fetchFromFireStore, firestore } from '../Firebase/Firebase'

const Sell = (props) => {
    const {toggleModalSell,status,setItems}=props

    const [title,setTitle]=useState('')
    const [category,setCategory]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')

    const [submitting,setSubmitting]=useState(false)

    const auth=UserAuth();
    const handleSubmit=async(e)=>{
      e.preventDefault()
      if(!auth?.user){
        alert('Please login')
        return;
      }
      setSubmitting(true)
      const trimmedTitle=title.trim()
      const trimmedCategory=category.trim()
      const trimmedPrice=price.trim()
      const trimmedDescription=description.trim()
      if(!trimmedTitle||!trimmedCategory||!trimmedPrice||!trimmedDescription){
        alert('All fields are required');
          setSubmitting(false)
          return;
      }
      try {
        await addDoc(collection(firestore,'products'),{
          title,category,price,description,userId:auth.user.uid,userName:auth.user.displayName||'Anonymous',createdAt:new Date().toDateString()
        })
        setTitle('');
        setCategory('');
        setPrice('');
        setDescription('');
        const datas=await fetchFromFireStore()
        setItems(datas)
        toggleModalSell();
      } catch (error) {
        console.log(error)
        alert('failed to add items to the firestore')
      }finally{
        setSubmitting(false)
      }
    }

  return (
    <div>
      <Modal
  show={status}
  onClose={toggleModalSell}
  size="md"
  popup={true}
  dismissible={false}
  // ensure the root/backdrop is a centered flex container + dim background
  theme={{
    root: {
      base: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
      show: { on: "flex", off: "hidden" },
    },
    content: {
      base: "relative w-full max-w-md p-4 md:h-auto",
      inner:
        "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700",
    },
  }}
>
  <ModalBody
    className="bg-white p-6 rounded-md overflow-x-hidden"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="w-full">
      <p className="font-bold text-lg mb-3">Sell Item</p>

      <form onSubmit={handleSubmit}>
        <Input setInput={setTitle} placeholder="Title" />
        <Input setInput={setCategory} placeholder="Category" />
        <Input setInput={setPrice} placeholder="Price" />
        <Input setInput={setDescription} placeholder="Description" />

        {submitting ? (
          <div className="mt-4">
            <p>Loading</p>
          </div>
        ) : (
          <div className="mt-4">
            <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded">
              Sell Item
            </button>
          </div>
        )}
      </form>
    </div>
  </ModalBody>
</Modal>

    </div>
  )
}

export default Sell