import React from 'react'

const Input = ({ setInput, placeholder, value }) => {
  return (
    <div className='pt-4 w-full relative'>
      <input
        value={value}
        onChange={e => setInput(e.target.value)}
        type="text"
        placeholder=' '
        required
        className='w-full border-2 border-black rounded-md p-3 pt-4 pb-2 focus:outline-none peer'
      />
      <label
        className='absolute left-3 top-3 text-gray-500 bg-white px-1 transition-all duration-200
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                   peer-focus:top-1 peer-focus:text-sm peer-focus:text-black'>
        {placeholder}
      </label>
    </div>
  )
}

export default Input
