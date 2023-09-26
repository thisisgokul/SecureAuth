import React from 'react'
import {Link} from "react-router-dom"
const Signup = () => {
  return (
    <div className='my-12 max-w-lg mx-auto px-4'>
      <h1 className='text-4xl font-bold text-center my-5'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='name' id="name" className='p-3 rounded-lg bg-slate-100' />
        <input type="email" placeholder='email' id="email" className='p-3 rounded-lg bg-slate-100' />
        <input type="password" placeholder='password' id="password" className='p-3 rounded-lg bg-slate-100' />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:bg-opacity-80'>signup</button>
      </form>
      <div className='flex gap-2 mt-3 text-lg'>
        <p>Already have an Account?</p>
        <Link to={'/sign-in'} className='text-blue-500'>sign in</Link>
      </div>
    </div>
  )
}

export default Signup