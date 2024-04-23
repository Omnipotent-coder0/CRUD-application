import React, { useEffect, useState } from "react";
import PrivateCards from "../components/PrivateCards";
import AddNewEntry from "../components/AddNewEntry";
import { useAuthUser } from "../contexts/AuthUserContext";
import axios from "axios";

const Private = () => {
  const { setAuthUser } = useAuthUser();
  const [privateData, setPrivateData] = useState([]);
  useEffect(() => {
    const getPublicData = async () => {
      try {
        const response = await axios.get("/api/entry/");
        if (response.status == 200) {
          setPrivateData(response.data);
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
      <div className="flex flex-wrap gap-x-8 gap-y-8 px-0">
        {privateData.map((item) => (
          <PrivateCards item={item} key={item._id} />
        ))}
        <AddNewEntry />
      </div>
    </div>
  );
};

export default Private;
