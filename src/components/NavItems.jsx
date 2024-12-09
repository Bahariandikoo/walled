import { useState } from "react";
import chelsea from "../assets/chelsea.jpg";
import viewIcon from "../assets/view.png";
function NavItems({ menu, activeTab, handleClick }) {
  return (
    <div className="flex gap-x-8">
      {menu.map((item, index) => (
        <a
          onClick={() => handleClick(item.title)}
          className={
            activeTab !== item.title ? "text-black" : "text[#19918F] font-bold"
          }
          key={index}
          href={item.link}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}

function Heading() {
  return (
    <>
      <div className="mt-10 px-10 flex justify-between text-black">
        <div className="">
          <h1 className="text-black font-bold">Good Morning, Chelsea!</h1>
          <h3 className=" mt-3">
            Check all your incoming and outgoing transactions here
          </h3>
        </div>
        <div className="flex">
          <div className="px-5">
            <p className="font-bold"> Chelsea Immanuela</p>
            <p>Personal Account</p>
          </div>
          <div>
            <img
              src={chelsea}
              className="rounded-full w-12 max-w-full h-auto border-2 hover:border-green-700 transition duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function HeadBalance() {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <>
      <div className="flex mt-10 px-10 gap-x-10 text-xl">
        <div className="bg-[#19918F] p-12 rounded-2xl w-1/5">
          <p>Account No.</p>
          <p className="mt-3 font-bold text-3xl">100899</p>
        </div>

        <div className="bg-white p-12 rounded-2xl w-full text-black">
          <p>Balance</p>

          <span className="flex items-center mt-3 gap-x-2">
            <p className="font-bold text-3xl">
              {showBalance ? "Rp10.000.000,00" : "Rp ********"}
            </p>
            <img
              src={viewIcon}
              alt="view"
              className="w-4 h-4 object-cover cursor-pointer"
              onClick={() => setShowBalance((prev) => !prev)}
            />
          </span>
        </div>
      </div>
    </>
  );
}
export { NavItems, Heading, HeadBalance };
