import React from "react";
import { MdDeleteForever } from "react-icons/md";
import CardDeleteDialog from "./CardDeleteDialog";
import CardEditDialog from "./CardEditDialog";

const PrivateCards = ({ item }) => {
  return (
    <div className="w-64 h-[330px] p-4 space-y-4 text-white bg-green-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
      <div className="font-semibold text-xl capitalize text-center">
        <h1>{item.title}</h1>
      </div>
      <div className="h-52 overflow-auto">
        <p className="font-medium uppercase text-sm font-mono h-full">
          {item.description}
        </p>
      </div>
      <div className="flex justify-between px-1 ">
        {/* <button className="uppercase text-sm font-medium duration-200 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md">edit</button> */}
        {/* <button className="uppercase text-sm font-medium duration-200 bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md"><MdDeleteForever size={20} /></button> */}
        <CardEditDialog item = {item}/>
        <CardDeleteDialog item = {item} />
      </div>
    </div>
  );
};

export default PrivateCards;
