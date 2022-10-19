
export default function Task() {

  const messages = [
    {
      num: '01',
      text: 'Create wireframe'
    },
    {
      num: '02',
      text: 'Slack logo design',
      fol: true,
    },
    {
      num: '03',
      text: 'Dashborad design',
      fol: true,
    },
    {
      num: '04',
      text: 'Create wireframe',
      col: true,
    },
    {
      num: '05',
      text: 'Google logo design',
      col: true,
    },
    {
      num: '06',
      text: 'Slack logo design'
    },
    {
      num: '07',
      text: 'Dashborad design'
    },

  ]

  return (
    <div className="card-container m-2 bg-white w-full md:w-72 p-4 rounded-xl">
      <p className="font-bold text-gray-700">My Tasks <span className="text-gray-500">(05)</span></p>
      {messages.map((x, index) => (
        <div className="flex justify-between border-b items-center my-4 gap-2" key={index}>

          <div className="flex gap-2 items-center">
            <p className="text-sm font-bold text-gray-700">{x.num}</p>
            <p className={`text-xs ${x.col ? 'line-through' : ''} font-bold text-gray-400`}>{x.text}</p>
            {x.fol ? <p className="text-xs text-gray-400">3 <i className="fa-regular fa-message text-xs"></i></p> : ''}
          </div>
          <div>
            <i className={`fa-regular fa-circle-check ${x.col ? 'text-green-500' : ''}`}></i>
          </div>
        </div>
      ))}
    </div>
  )
}
