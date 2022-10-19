export default function Message() {
  const messages = [
    {
      name: "John Doe",
      text: "Hi Angelina! how are you?",
      img: "https://userstock.io/data/wp-content/uploads/2017/07/alex-lambley-205711-300x300.jpg",
      color: "green",
    },
    {
      name: "Charmie",
      text: "Do you need that design",
      img: "https://userstock.io/data/wp-content/uploads/2017/07/pexels-photo-289704-300x300.jpg",
      color: "green",
    },
    {
      name: "Jason Mandela",
      text: "What is the price of hourly...",
      img: "https://userstock.io/data/wp-content/uploads/2017/07/pexels-photo-173295-300x300.jpg",
      color: "green",
    },
    {
      name: "Charlie Chu",
      text: "Awesome",
      img: "https://userstock.io/data/wp-content/uploads/2017/07/allef-vinicius-152195-300x300.jpg",
      color: "green",
    },
  ];

  return (
    <div className="w-full p-4 m-2 bg-white card-container md:w-72 rounded-xl">
      <p className="font-bold text-gray-700">Messages</p>
      {messages.map((x, index) => (
        <div className="flex items-center gap-2 my-4" key={index}>
          <div>
            <img
              className={`rounded-full border ${`border-${x.color}-500`} p-1`}
              src={x.img}
              alt="stock"
              width={45}
              height={45}
            />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">{x.name}</p>
            <p className="text-xs font-bold text-gray-400">{x.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
