import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => { 
  const [data, setData] = useState([]);

  // funzione pre fetchare dati dall'api
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
  return <div>Vacanza</div>;
};

export default Holiday;
