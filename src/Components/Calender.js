export default function Calender() {
  const dates = [0, 0, 0, 1, 2, 3, 4];
  const dates22 = [5, 6, 7];
  const dates23 = [9, 10, 11];
  const dates3 = [12, 13, 14, 15, 16, 17, 18];
  const dates4 = [19, 20, 21, 22, 23, 24, 25];
  const dates5 = [26, 27, 28, 29, 30];

  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <div className="w-full m-2 md:w-72">
      <div className="md:w-72">
        <div className="p-5 bg-white  rounded-xl">
          <div className="flex items-center justify-between">
            <span className="font-bold text-gray-800 focus:outline-none text ">
              Oct 2022
            </span>
            <div className="flex items-center gap-6">
              <div>
                <i className="p-1 text-white bg-orange-500 rounded-full fa-solid fa-chevron-left focus:text-gray-400 hover:text-white "></i>
              </div>

              <div>
                <i className="p-1 text-white bg-orange-500 rounded-full fa-solid fa-chevron-right focus:text-gray-400 hover:text-white"></i>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {days.map((x, index) => (
                    <th key={index}>
                      <div className="flex justify-center w-full">
                        <p className="text-base font-medium text-center text-gray-800">
                          {x}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {dates.map((x, index) => (
                    <td className="pt-6" key={index}>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-base font-medium text-gray-500 ">
                          {x === 0 ? "" : x}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  {dates22.map((x, index) => (
                    <td key={index}>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-base font-medium text-gray-500 ">
                          {x}
                        </p>
                      </div>
                    </td>
                  ))}
                  <td>
                    <div className="w-full h-full">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <a
                          href="/"
                          className="flex items-center justify-center w-8 h-8 text-base font-medium text-white bg-orange-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:bg-orange-500 hover:bg-orange-500"
                        >
                          8
                        </a>
                      </div>
                    </div>
                  </td>
                  {dates23.map((x, index) => (
                    <td key={index}>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-base font-medium text-gray-500 ">
                          {x}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  {dates3.map((x, index) => (
                    <td key={index}>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-base font-medium text-gray-500 ">
                          {x}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  {dates4.map((x, index) => (
                    <td key={index}>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-base font-medium text-gray-500 ">
                          {x}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  {dates5.map((x, index) => (
                    <td key={index}>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-base font-medium text-gray-500 ">
                          {x}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
