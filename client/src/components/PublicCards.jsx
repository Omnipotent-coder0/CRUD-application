import React from "react";

const PublicCards = ({ item }) => {
  return (
    <div className="h-[330px] w-64 p-4 space-y-4 text-white bg-green-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
      <div className="font-semibold text-xl capitalize text-center">
        <h1>{item.title}</h1>
      </div>
      <div>
        <p className="overflow-auto font-medium uppercase text-sm font-mono">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default PublicCards;
