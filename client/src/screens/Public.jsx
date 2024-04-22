import React from "react";
import PublicCards from "../components/PublicCards";

const publicData = [
  {
    _id: 1,
    title: "title 1",
    description:
      "description 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi sit, aliquid eaque iure voluptate aut, cupiditate nam assumenda cumque atque voluptas tempore. Mollitia quam, iste molestias molestiae consectetur quaerat!",
  },
  {
    _id: 2,
    title: "title 2",
    description: "description 2",
  },
  {
    _id: 3,
    title: "title 3",
    description: "description 3",
  },
  {
    _id: 4,
    title: "title 4",
    description: "description 4",
  },
  {
    _id: 5,
    title: "title 5",
    description: "description 5",
  },
];

const Public = () => {
  return (
    <div className="flex justify-center items-center p-20">
      <div className="flex flex-wrap gap-x-8 gap-y-8 w-max">
        {publicData.map((item) => (
          <PublicCards item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Public;
