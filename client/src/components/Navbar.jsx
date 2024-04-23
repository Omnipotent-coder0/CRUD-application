import React from "react";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { useAuthUser } from "../contexts/AuthUserContext";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const { authUser, setAuthUser } = useAuthUser();
  const handleLogout = async (e) => {
    try {
      const response = await axios.post("/api/auth/logout");
      if (response.status == 200) {
        toast.success("User is successfully logged out !");
        localStorage.clear();
        setAuthUser(null);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      localStorage.clear();
      setAuthUser(null);
    }
  };
  return (
    <div
      className={`h-20 fixed top-0 left-0 w-screen flex justify-between align-middle items-center px-6 text-white`}
    >
      <div className="font-bold text-3xl w-[82px] cursor-pointer">
        <Link to={"/"}>LOGO</Link>
      </div>
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
        {authUser && (
          <>
            <div>
              <div className="bg-gradient-to-br from-cyan-600 to-purple-600 cursor-pointer  overflow-hidden rounded-full duration-200 ring-2 w-14">
                <img
                  src={`https://api.minimalavatars.com/avatar/${authUser?.displayName}/svg`}
                  alt=""
                />
              </div>
            </div>
            <div
              onClick={handleLogout}
              className="fixed left-8 bottom-8 bg-white/50 hover:bg-white text-red-500 p-2 rounded-full cursor-pointer duration-200"
            >
              <IoMdExit size={40} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
