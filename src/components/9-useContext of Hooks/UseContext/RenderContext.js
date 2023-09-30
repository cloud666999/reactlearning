import { createContext, useEffect, useState } from "react";

export const RenderContext = createContext({});

export const AppProviver = ({ children }) => {
  const [userData, setUserData] = useState({});
  const  [isOpen,setIsOpen] = useState(false);

  useEffect(() => {
    // lấy dữ liệu từ API và gán vào setUserData
    fetch("https://reqres.in/api/user2").then((res) =>
      res.json().then((res) => {
        setUserData(res.data);
      })
    );
  }, []);


  //những dữ liệu nào mà component con cháu muốn sử dụng thì sẽ truyền vào value
  return (
    <RenderContext.Provider value={{ userData , isOpen, setIsOpen }}>
      {children}
    </RenderContext.Provider>
  );
};
