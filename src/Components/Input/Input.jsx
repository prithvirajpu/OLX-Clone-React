import React from 'react'

const Input = (Props) => {
    const{setInput,placeholder}=Props

  return (
    <div className='pt-4 w-full relative'>
        <input onChange={e=>setInput(e.target.value)} type="text" placeholder=' '
        className='w-full border-2 border-black rounded-md p-3 pt-4 pb-2 focus:outline-none peer' required/>
        <label className='absolute pl-1 pr-1 left-[10px] top-2 bg-white text-sm transition-all duration-200 pointer-events-none'>{placeholder}</label>

    </div>
  )
}

export default Input