import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchNameOfObject = () => {
  const [newName, setNewName] = useState("");
  const [personData, setPersonData] = useState(null);

  const fetchData = () => {
    axios
      .get("https://639b1c53d5141501974b8c46.mockapi.io/persons")
      .then((res) => {
        setPersonData(res.data);
      });
  };

  const updateName = () => {
    if (!personData) {
      console.log("wait for data loading ...");
      return;
    }
  };

  const updateData = { ...personData, name: newName };

  axios
    .put("https://639b1c53d5141501974b8c46.mockapi.io/persons/1", updateData)
    .then(() => {
      console.log("Updated successfully");
      fetchData();
    });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Name</h1>
      {personData && (
        <div>
          <h1>Name: {personData.name}</h1>
          <p>Position: {personData.position}</p>
          <p>Salary: {personData.salary}</p>
        </div>
      )}
      <input
        type="text"
        placeholder="insert name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={updateName}>Click to Change</button>
    </div>
  );
};

export default FetchNameOfObject;
