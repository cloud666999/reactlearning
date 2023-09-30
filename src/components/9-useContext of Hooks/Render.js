import React, { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import SideBar from "./SideBar";
import { AppProviver } from "./UseContext/RenderContext";

function Render() {
  //isOpen và setIsOpen sẽ bị comment để nhét vào trong useContext
  // const [isOpen, setIsOpen] = useState(false);
 
  return (
    // cách truyền dữ liệu cũ ---> truyền props vào Components Header 
    // ngoài ra tư duy ở đây tôi muốn truyền userData vào SideBar , từ SideBar truyền
    // xuống UserInformations ---> như vậy là phải truyền qua SideBar
    // và tại UserInformations mới có thể gọi ra các field chứa thông tin với dữ 
    //liệu đã gán ---> vậy sử dụng Context API tức useContext
    <div className="render">
        {/* // tại đây tôi muốn bọc provider để Header Content cũng có thể 
        //truy xuất dữ liệu đã tạo trong RenderContext */}
      
      <AppProviver>
      {/* <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Content isOpen={isOpen} />
      {isOpen && <SideBar />} */}

      <Header/>
      <Content/>
      <SideBar/>
      </AppProviver>
    </div>
  );
}

export default Render;
