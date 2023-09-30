import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchAPIandAxios = () => {
  const [salary, setSalary] = useState([]);
  const [randomSal, setRandomSal] = useState("");

  // tại đây tôi có một điểm nhấn , vì component sẽ được mount và unmount tức là sẽ gắn 2 lần
  //và render ra , lý do nó sẽ lặp vòng lặp vô tận  vì axios sẽ hiện thị ra mỗi khi component được cập nhật
  //và nó lại thiết lập yêu cầu setSalary(res.data.salary)
  // vì vậy lý do khi fetchAPI ta cần sử dụng useEffect
  useEffect(() => {
    //tôi có thể tạo ra 1 arrow function để fetch vào dữ liệu và gọi nó vào trong useEffect
    fetchSalaries();
  },[]);

    const fetchSalaries = () => {
        axios
        .get("https://639b1c53d5141501974b8c46.mockapi.io/persons")
        .then((res) => {
          const fetchedSalaries = res.data.map((person) => person.salary);
              setSalary(fetchedSalaries);
        });
    }

    const generateRandomSalary = () => {
        const randomValue = Math.floor(Math.random() * salary.length);
        const randomSalary = salary[randomValue];
        setRandomSal(randomSalary);
    }
  return (
    <div>
      <button onClick={generateRandomSalary}>Generate a salary</button>
      <p>{randomSal}</p>
      
    </div>
  );
};

export default FetchAPIandAxios;
