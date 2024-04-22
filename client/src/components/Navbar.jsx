import React from "react";
import { Link } from "react-router-dom";
import { avatar } from "../utils/Styles.mjs";
import { IoMdExit } from "react-icons/io";

const Navbar = () => {
  return (
    <div
      className={`h-20 fixed top-0 left-0 w-screen flex justify-between align-middle items-center px-6 text-white`}
    >
      <div className="font-bold text-3xl w-[82px] cursor-pointer"><Link to={"/"}>LOGO</Link></div>
      <div className="w-full flex justify-center">
        <ul className="flex gap-16 font-medium text-xl">
          <li>
            <Link to={"/"}>Public</Link>
          </li>
          <li>
            <Link to={"/private"}>Private</Link>
          </li>
        </ul>
      </div>
      <div className="w-[82px] flex justify-center">
        <div className="bg-white/80 cursor-pointer hover:bg-white overflow-hidden rounded-full duration-200 ring-2 w-14">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="fixed left-8 bottom-8 bg-white/50 hover:bg-white text-red-500 p-2 rounded-full cursor-pointer duration-200">
        <IoMdExit size={40} />
      </div>
    </div>
  );
};

export default Navbar;
