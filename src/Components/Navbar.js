import React from 'react'

export default function Navbar() {
  return (
    <div className='md:m-2 w-[96%] my-2 mx-auto gap-3 flex justify-between items-center bg-white md:w-11/12  p-4 rounded-xl'>
      <div className='relative'>
        <label className="relative block rounded-full">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="w-5 h-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            <i className="absolute text-sm text-gray-500 top-3 left-3 fa-solid fa-magnifying-glass"></i>
          </span>
          <input className="block w-full py-2 pr-3 bg-white border rounded-full shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search" />
        </label>
      </div>
      <div className='flex items-center gap-4 md:gap-8'>
        <i className="fa-regular fa-bell"></i>
        <img src="https://userstock.io/data/wp-content/uploads/2017/07/pexels-photo-26939-1-300x300.jpg" alt="stock" width={30} height={30} className='rounded-full' />
      </div>
    </div>
  )
}
