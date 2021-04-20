import React, { useEffect, useState } from "react";
import DataTableComponent from "./DataTableComponent";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState(null);
  // const [isBuzy,setIsBuzy] = useState(false)
  //fetching data
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      console.log(response.data);
       setUsers(response.data);
       
    } catch (e) {
      console.log(e);
    }
  };

  //getting data whenever component loaded
  useEffect(() => {
    fetchData();
  }, []);
 
  return (
    <div className="container">
      <DataTableComponent users={users}></DataTableComponent>
    </div>
  );
};

export default App;
