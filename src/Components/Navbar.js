import React from 'react'

export default function Navbar() {
  return (
    <div className='md:m-2 w-[96%] my-2 mx-auto  flex justify-between items-center bg-white md:w-11/12  p-4 rounded-xl'>
      <div className='relative'>
        <label class="relative block rounded-full">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            <i className="absolute text-sm text-gray-500 top-3 left-3 fa-solid fa-magnifying-glass"></i>
          </span>
          <input class="rounded-full placeholder:text-slate-400 block bg-white w-full border border-slate-300  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search" />
        </label>
      </div>
      <div className='flex items-center gap-4 md:gap-8'>
        <i className="fa-regular fa-bell"></i>
        <img src="https://userstock.io/data/wp-content/uploads/2017/07/pexels-photo-26939-1-300x300.jpg" alt="stock" width={30} height={30} className='rounded-full' />
      </div>
    </div>
  )
}
