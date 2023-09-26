import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
   <header>
    <div className='bg-slate-300 flex justify-between items-center  p-3'>
        <Link to={'/'}><h2 className='text-4xl font-bold'>Auth2.0</h2></Link>
        <div className='flex justify-between text-xl font-normal gap-4 sm:mr-12 mr-0  '>
            <Link to={'/home'}><ul className='hover:text-red-500'>Home</ul></Link>
            <Link to={'/about'}><ul className='hover:text-red-500'>About</ul></Link>
            <Link to={'/sign-in'}><ul className='hover:text-red-500'>Sign-In</ul></Link>
        </div>
    </div>
   </header>
  )
}
