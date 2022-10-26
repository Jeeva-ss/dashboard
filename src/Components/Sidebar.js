import React from "react";

export default function Sidebar() {
  return (
    <div>
      <aside
        className="h-auto p-4 m-2 bg-white rounded-xl"
        aria-label="Sidebar"
      >
        <div className="text-center">
          <i className="text-3xl text-gray-700 fa-solid fa-bars-progress"></i>
        </div>
        <div className="px-3 py-4 rounded ">
          <ul className="space-y-8">
            <li className="my-8">
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 hover:border-r-4 hover:border-orange-400"
              >
                <i className="text-orange-400 fa-solid fa-table-columns"></i>
                <span className="ml-3 font-bold text-orange-400 uppercase">
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 hover:border-r-4 hover:border-orange-400"
              >
                <i className="text-gray-400 fa-solid fa-diagram-project"></i>
                <span className="flex-1 ml-3 font-bold text-gray-400 uppercase whitespace-nowrap">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 hover:border-r-4 hover:border-orange-400"
              >
                <i className="text-gray-400 fa-solid fa-list-check "></i>
                <span className="flex-1 ml-3 font-bold text-gray-400 uppercase whitespace-nowrap ">
                  My tasks
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 hover:border-r-4 hover:border-orange-400"
              >
                <i className="text-gray-400 fa-solid fa-calendar "></i>
                <span className="flex-1 ml-3 font-bold text-gray-400 uppercase whitespace-nowrap">
                  Calender
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 hover:border-r-4 hover:border-orange-400"
              >
                <i className="text-gray-400 fa-solid fa-gear "></i>
                <span className="flex-1 ml-3 font-bold text-gray-400 uppercase whitespace-nowrap">
                  Time manage
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 hover:border-r-4 hover:border-orange-400"
              >
                <i className="text-gray-400 fa-solid fa-chart-pie"></i>
                <span className="flex-1 ml-3 font-bold text-gray-400 uppercase whitespace-nowrap">
                  Report
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 hover:border-r-4 hover:border-orange-400"
              >
                <i className="text-gray-400 fa-solid fa-clock"></i>
                <span className="flex-1 ml-3 font-bold text-gray-400 uppercase whitespace-nowrap">
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
