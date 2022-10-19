import React from 'react'

export default function Calender() {
  return (
    <div className='w-full md:w-72 m-2'>

      <div className="md:w-72">
        <div className="p-5 dark:bg-gray-800 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <span className="focus:outline-none  text font-bold dark:text-gray-100 text-gray-800">Oct 2022</span>
            <div className="flex gap-6 items-center">

              <div>
                <i className="p-1 fa-solid fa-chevron-left bg-orange-500 rounded-full focus:text-gray-400 hover:text-white text-white dark:text-gray-100"></i>
              </div>

              <div>


                <i className="p-1 fa-solid fa-chevron-right bg-orange-500 rounded-full focus:text-gray-400 hover:text-white text-white dark:text-gray-100"></i>

              </div>

            </div>
          </div>
          <div className="flex items-center justify-between pt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">We</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">1</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">2</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">3</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">4</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">5</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">6</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">7</p>
                    </div>
                  </td>
                  <td>
                    <div className="w-full h-full">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <a href='/' className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:bg-orange-500 hover:bg-orange-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-orange-500 rounded-full">8</a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">9</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">10</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">11</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">12</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">13</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">14</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">15</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">16</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">17</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">18</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">19</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">20</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">21</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">22</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">23</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">24</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">25</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">26</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">27</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">28</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">29</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">30</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>


    </div>
  )
}
