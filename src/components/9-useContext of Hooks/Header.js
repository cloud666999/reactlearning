import React, { useContext } from "react";
import { RenderContext } from "./UseContext/RenderContext";

function Header() {
  const {userData,isOpen,setIsOpen } = useContext(RenderContext);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "right",
        backgroundColor: "rgb(228, 228, 228)",
        padding: "10px",
        gridColumn: isOpen ? "2 / 4" : "1 / 4",
        gridRow: "1 / 2",
      }}
    >
      <div>Hello! {userData.name} </div>
      <p style={{ cursor: "pointer" }} onClick={toggleSidebar}>
        My profile
      </p>
      <label className="switch">
        <input type='checkbox'/>
        <span className='slider round'></span>
      </label>
    </div>
  );
}

export default Header;
