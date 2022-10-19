
export default function Google() {

  const details = [
    {
      num: '30m 0s',
      text: 'Dashborad design',
    },
    {
      num: '30m 0s',
      text: 'Create wireframe'
    },
    {
      num: '30m 0s',
      text: 'Slack logo design',
    },
  ]

  return (
    <div className="m-2 bg-white w-full md:w-72 p-4 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700 font-bold text-base">Google</p>
        <i className="fa-solid fa-play  text-sm text-gray-500 border rounded-md px-1" style={{ marginRight: '10px' }}></i>
      </div>
      <div>
        <div className="flex items-center justify-between px-1 my-1 bg-orange-100  pb-1">
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-clock text-sm text-orange-500"></i>
            <p className="text-bold text-gray-500 font-bold text-xs">Create wireframe</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-bold text-gray-500 font-bold text-base">25m 20s</p>
            <i className="fa-solid fa-pause text-sm text-orange-500 border rounded-md px-1"></i>
            <i className="text-gray-500 text-sm fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-2 flex justify-between items-center">
        <p className="text-gray-700 font-bold text-base">Slack</p>
        <i className="fa-solid fa-play  text-sm text-gray-500 border rounded-md px-1" style={{ marginRight: '10px' }}></i>
      </div>
      {details.map((x, index) => (
        <div className="flex items-center justify-between my-1 border-b pb-1" key={index}>
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-clock text-sm text-gray-500"></i>
            <p className="text-bold text-gray-500 font-bold text-xs">{x.text}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-bold text-gray-500 font-bold text-xs">{x.num}</p>
            <i className="fa-solid fa-play  text-sm text-gray-500 border rounded-md px-1"></i>
            <i className="text-gray-500 text-sm fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      ))
      }
    </div >
  )
}
