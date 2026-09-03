import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 py-5 bg-white shadow-sm'>
        <h1 className='text-3xl font-bold text-blue-900'>
            Collab<span className='text-blue-700'>SpAce</span>
        </h1>
       
 <div className="space-x-6 gap-2">
    <a href="/">Home</a>
    <a href="/about">How its works</a>
    <a href="/pricing">Pricing</a>
    <a href="#feature">Features</a>
    <a href="/contact">Contact</a>
  </div>
        <div className='space-x-4'>
            <button className='px-5 py-2 rounded-full bg-black hover:text-blue-200 text-white'>Login</button>
            <button className='px-5 py-2 rounded-full bg-black text-white hover:text-blue-400'>Get started</button>
        </div>
    </nav>
  )
}

export default Navbar
