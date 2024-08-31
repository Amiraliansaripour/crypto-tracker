import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets/img'

const Header = () => {
  return (
    
    <div className='flex items-center justify-between p-4'>
  
      <div className=''>
        <Link to="/">
        <img src={Logo} alt="" />
        </Link>
      </div>
      <ul className='flex gap-5'>
        <li>
            <Link className=' font-semibold text-main-yellow' to="/">Home</Link>
        </li>
        <li>
            <Link className=' font-semibold' to="/about">About Us</Link>
        </li>
        <li>
            <Link className=' font-semibold' to="/dashboard">Dashboard</Link>
        </li>
        <li>
            <Link className=' font-semibold' to="/services">Services</Link>
        </li>
      </ul>

    </div>
  )
}

export default Header
