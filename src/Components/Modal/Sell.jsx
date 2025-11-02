import React, { useState } from 'react'
import { Modal, ModalBody } from 'flowbite-react'
import Input from '../Input/Input'
import { UserAuth } from '../Context/Auth'
import { addDoc, collection } from 'firebase/firestore'
import { fetchFromFireStore, firestore } from '../Firebase/Firebase'
import fileUpload from '../../assets/fileUpload.svg'
import loading from '../../assets/loading.gif'
import close from '../../assets/close.svg'

const Sell = (props) => {
  const { toggleModalSell, status, setItems } = props
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const auth = UserAuth();

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!auth?.user) {
      alert("Please login first.")
      return
    }

    setSubmitting(true)

    const trimmedTitle = title.trim()
    const trimmedCategory = category.trim()
    const trimmedPrice = price.trim()
    const trimmedDescription = description.trim()

    if (!trimmedTitle || !trimmedCategory || !trimmedPrice || !trimmedDescription) {
      alert("All fields are required.")
      setSubmitting(false)
      return
    }

    let imageUrl = ''

    if (image) {
      try {
        const formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', 'Olx project clone')  
        formData.append('cloud_name', 'dlfyesjsd')    

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/dlfyesjsd/image/upload`,
          { method: 'POST', body: formData }
        )

        const data = await res.json()

        if (!data.secure_url) {
          throw new Error('Cloudinary upload failed')
        }

        imageUrl = data.secure_url
      } catch (error) {
        console.error("Cloudinary Upload Error:", error)
        alert("Failed to upload image. Please try again.")
        setSubmitting(false)
        return
      }
    }

    try {
      await addDoc(collection(firestore, 'products'), {
        title: trimmedTitle,
        imageUrl,
        category: trimmedCategory,
        price: trimmedPrice,
        description: trimmedDescription,
        userId: auth.user.uid,
        userName: auth.user.displayName || 'Anonymous',
        createdAt: new Date().toISOString()
      })

      setTitle('')
      setCategory('')
      setPrice('')
      setDescription('')
      setImage(null)

      const datas = await fetchFromFireStore()
      setItems(datas)
      toggleModalSell()
    } catch (error) {
      console.error("Firestore Error:", error)
      alert("Failed to add item to Firestore.")
    } finally {
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
          <img
            src={close}
            onClick={() => {
              toggleModalSell()
              setImage(null)
            }}
            className="w-6 absolute z-10 top-6 right-8 cursor-pointer"
          />
          <div className="w-full">
            <p className="font-bold text-lg mb-3">Sell Item</p>

            <form onSubmit={handleSubmit}>
              <Input setInput={setTitle} placeholder="Title" value={title} />
              <Input setInput={setCategory} placeholder="Category" value={category} />
              <Input setInput={setPrice} placeholder="Price" value={price} />
              <Input setInput={setDescription} placeholder="Description" value={description} />

              <div className='pt-2 w-full relative'>
                {image ? (
                  <div className='relative h-40 sm:h-60 w-full flex justify-center border-2 border-black rounded-md overflow-hidden'>
                    <img
                      className='object-contain'
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                    />
                  </div>
                ) : (
                  <div className='relative h-40 sm:h-60 w-full border-2 border-black rounded-md'>
                    <input
                      onChange={handleImageUpload}
                      type="file"
                      accept="image/*"
                      className='absolute inset-0 h-full opacity-0 cursor-pointer z-30'
                      required
                    />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                      <img className='w-12' src={fileUpload} alt="Upload" />
                      <p className='text-center text-sm pt-2 font-medium'>Click to upload images</p>
                      <p className='text-center text-xs text-gray-500'>SVG, PNG, JPG</p>
                    </div>
                  </div>
                )}
              </div>

              {submitting ? (
                <div className="w-full flex h-14 justify-center pt-4 pb-2">
                  <img src={loading} className='w-32 object-cover' alt="Loading" />
                </div>
              ) : (
                <div className="w-full pt-2">
                  <button
                    type="submit"
                    className="w-full p-3 rounded-lg text-white font-semibold"
                    style={{ backgroundColor: '#002f34' }}
                  >
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
