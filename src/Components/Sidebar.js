import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <aside className="m-2 bg-white h-auto  p-4 rounded-xl" aria-label="Sidebar">
        <div className='text-center'>
          <i className="text-3xl text-gray-700 fa-solid fa-bars-progress"></i>
        </div>
        <div className="py-4 px-3 rounded dark:bg-gray-800">
          <ul className="space-y-8">
            <li className='my-8'>
              <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-r-4 hover:border-orange-400">
                <i className="fa-solid fa-table-columns text-orange-400"></i>
                <span className="ml-3 uppercase text-orange-400 font-bold">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700   hover:border-r-4 hover:border-orange-400">
                <i className="fa-solid fa-diagram-project text-gray-400"></i>
                <span className="flex-1 ml-3 uppercase whitespace-nowrap text-gray-400 font-bold">Projects</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  hover:border-r-4 hover:border-orange-400">
                <i className="fa-solid fa-list-check text-gray-400 "></i>
                <span className="flex-1 ml-3 uppercase whitespace-nowrap text-gray-400 font-bold ">My tasks</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-r-4 hover:border-orange-400">
                <i className="fa-solid fa-calendar text-gray-400 "></i>
                <span className="flex-1 ml-3 uppercase whitespace-nowrap text-gray-400 font-bold">Calender</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-r-4 hover:border-orange-400">
                <i className="fa-solid fa-gear text-gray-400 "></i>
                <span className="flex-1 ml-3 text-gray-400 uppercase font-bold whitespace-nowrap">Time manage</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-r-4 hover:border-orange-400">
                <i className="fa-solid text-gray-400  fa-chart-pie"></i>
                <span className="flex-1 ml-3 text-gray-400 font-bold uppercase whitespace-nowrap">Report</span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-r-4 hover:border-orange-400">
                <i className="fa-solid text-gray-400 fa-clock"></i>
                <span className="flex-1 ml-3 text-gray-400 font-bold uppercase whitespace-nowrap">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

    </div>
  )
}
