import React from 'react'
import { Link } from 'react-router-dom'

function Banner({title, description = "", buttonText = ""}) {
  return (
    <div className=' bg-gray-950 text-gray-100 pb-16'>
      <div className='wrapper'>
        <div className="content-wrapper text-center">
          <h1 className='lg:text-7xl text-5xl font-bold mb-5'>{title}</h1>
          <p className='p-0 md:px-32 mb-5 text-lg'>{description}</p>
          <Link to='/blog'>
            <button className='font-semibold text-lg hover:text-orange-500 transition-all'>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner