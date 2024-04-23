import React, { useEffect, useState } from "react";
import PublicCards from "../components/PublicCards";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthUser } from "../contexts/AuthUserContext";

const Public = () => {
  const { setAuthUser } = useAuthUser();
  const [publicData, setPublicData] = useState([]);
  useEffect(() => {
    const getPublicData = async () => {
      try {
        const response = await axios.get("/api/entry/public");
        if (response.status == 200) {
          setPublicData(response.data);
        } else {
          toast.error("Something went wrong !");
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
    getPublicData();
  }, []);
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
