export default function Google() {
  const details = [
    {
      num: "30m 0s",
      text: "Dashborad design",
    },
    {
      num: "30m 0s",
      text: "Create wireframe",
    },
    {
      num: "30m 0s",
      text: "Slack logo design",
    },
  ];

  return (
    <div className="w-full p-4 m-2 bg-white md:w-72 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-base font-bold text-gray-700">Google</p>
        <i
          className="px-1 text-sm text-gray-500 border rounded-md fa-solid fa-play"
          style={{ marginRight: "10px" }}
        ></i>
      </div>
      <div>
        <div className="flex items-center justify-between px-1 py-1 pb-1 my-1 bg-orange-100">
          <div className="flex items-center gap-4">
            <i className="text-sm text-orange-500  fa-solid fa-clock"></i>
            <p className="text-xs font-bold text-gray-500 text-bold">
              Create wireframe
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base font-bold text-gray-500 text-bold">
              25m 20s
            </p>
            <i className="px-1 text-sm text-orange-500 border rounded-md fa-solid fa-pause"></i>
            <i className="text-sm text-gray-500 fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 mb-2">
        <p className="text-base font-bold text-gray-700">Slack</p>
        <i
          className="px-1 text-sm text-gray-500 border rounded-md fa-solid fa-play"
          style={{ marginRight: "10px" }}
        ></i>
      </div>
      {details.map((x, index) => (
        <div
          className="flex items-center justify-between pb-1 my-1 border-b"
          key={index}
        >
          <div className="flex items-center gap-4">
            <i className="text-sm text-gray-500 fa-solid fa-clock"></i>
            <p className="text-xs font-bold text-gray-500 text-bold">
              {x.text}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs font-bold text-gray-500 text-bold">{x.num}</p>
            <i className="px-1 text-sm text-gray-500 border rounded-md fa-solid fa-play"></i>
            <i className="text-sm text-gray-500 fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      ))}
    </div>
  );
}
