import React from 'react'
import { Link } from 'react-router-dom'
import favourite from '../../assets/favorite.svg'

const Card = ({ items }) => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 min-h-screen">
      <h1 className="text-2xl font-bold text-[#002f34] mb-5">
        Fresh Recommendations
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <Link
            to="/details"
            state={{ item }}
            key={item.id}
            className="block rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden"
          >
            <div className="relative w-full h-72 flex flex-col">
              <div className="w-full flex justify-center items-center h-40 bg-gray-50">
                <img
                  className="max-h-36 object-contain"
                  src={item.imageUrl || 'https://via.placeholder.com/150'}
                  alt={item.title}
                />
              </div>

              <div className="p-3 flex flex-col flex-grow">
                <h1 className="font-bold text-lg text-[#002f34]">
                  ${item.price}
                </h1>
                <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                <p className="text-sm text-gray-800 mt-2 flex-grow truncate">
                  {item.title}
                </p>
              </div>

              <div className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-sm cursor-pointer">
                <img src={favourite} alt="favourite" className="w-5 h-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Card
