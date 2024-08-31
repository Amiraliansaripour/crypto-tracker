import React from 'react'

const Coin = ({title , price ,logo,percent}) => {
  return (
    <div className='flex items-center w-full h-full'>
      <div className="img-box w-10 h-10 rounded-full bg-main-yellow">
        <img src={logo} className='w-full h-full object-cover' alt="" />
      </div>

      <div className='flex gap-1 pl-2 text-white'>
        <span className='font-bold'>{title}</span>
        <span>${price} (<span className='text-green-500'>{percent}%</span>)</span>
      </div>
    </div>
  )
}

export default Coin
