import { FcGoogle } from "react-icons/fc";

import Slack from "../Assets/slack.svg";

export default function Card({ text1, text2, text3, text4, blue, comp }) {
  const stockImg = [
    "https://userstock.io/data/wp-content/uploads/2020/06/women-s-white-and-black-button-up-collared-shirt-774909-2-300x300.jpg",
    "https://userstock.io/data/wp-content/uploads/2020/05/warren-wong-VVEwJJRRHgk-300x300.jpg",
    "https://userstock.io/data/wp-content/uploads/2017/09/bewakoof-com-official-208957-300x300.jpg",
    "https://userstock.io/data/wp-content/uploads/2017/07/matheus-ferrero-193466-300x300.jpg",
    "https://userstock.io/data/wp-content/uploads/2017/09/yingchou-han-261533-300x300.jpg",
  ];

  return (
    <div className="w-full p-4 m-2 bg-white card-container md:w-72 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <div className="p-1 bg-orange-100 border rounded-lg">
            {comp ? (
              <img src={Slack} width={25} height={25} alt="slack" />
            ) : (
              <FcGoogle className="text-3xl" />
            )}
          </div>
          <div>
            <p className="text-base font-bold text-slate-700">
              {text1 ? text1 : text3}
            </p>
            <p className="text-xs font-semibold text-gray-500">
              {text2 ? text2 : text4}
            </p>
          </div>
        </div>
        <div>
          <i className="p-1 mr-2 text-yellow-400 border rounded-full fa-solid fa-star"></i>
          <i className="text-gray-500 fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      {/* button */}
      <div className="flex items-center justify-between mt-4">
        <button
          className={`text-xs font-bold py-1 px-2 border uppercase rounded-md ${comp
            ? " bg-green-100 text-green-700"
            : "bg-slate-100 text-slate-700"
            }`}
        >
          {comp ? comp : "Select Progress"}
        </button>
        <button
          className={`text-xs py-1 px-2 font-bold border uppercase rounded-md ${comp
            ? "border-green-700 bg-white text-green-700"
            : "border-orange-700 bg-white text-orange-700"
            }`}
        >
          {comp ? "Medium Priority" : "High Priority"}
        </button>
      </div>
      {/* progress */}
      <div className="my-4">
        {comp ? (
          <p className="text-sm font-bold text-gray-500">
            Task done: <span className="text-gray-700">30</span>/30
          </p>
        ) : (
          <p className="text-sm font-bold text-gray-500">
            Task done: <span className="text-gray-700">25</span>/50
          </p>
        )}
        {/*  */}
        <div className="w-full bg-gray-200 rounded-full h-1.5 my-4 dark:bg-gray-700">
          <div
            className={` h-1.5 ${blue
              ? "bg-blue-600 dark:bg-blue-500"
              : "bg-purple-600 dark:bg-purple-500"
              } rounded-full`}
            style={{ width: comp ? "75%" : "55%" }}
          ></div>
        </div>
      </div>
      {/* button */}
      <div className="flex items-center gap-2 mt-4">
        <button className="px-2 py-1 text-xs font-bold text-green-700 uppercase bg-green-100 border rounded-md">
          iOS App
        </button>
        <button
          className={`text-xs font-bold py-1 px-2 border uppercase rounded-md ${comp ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"
            }`}
        >
          {comp ? "Android" : "UI/UX"}
        </button>
      </div>
      {/* Badges */}
      <div className="badges">
        {stockImg.map((c, index) => (
          <img src={c} key={index} alt="stock" />
        ))}
        <div className="bg-white border rounded-full text">
          <p className="text-xs font-bold text-gray-500">+5</p>
        </div>
      </div>
      {/* button */}
      <div className="mt-4">
        <button className="px-2 py-1 text-xs font-bold text-orange-700 uppercase bg-orange-100 border rounded-md">
          due date : 20th june
        </button>
      </div>
    </div>
  );
}
