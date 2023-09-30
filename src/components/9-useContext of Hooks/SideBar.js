import React, { useContext } from "react";
import UserInformations from "./UserInformations";
import { RenderContext } from "./UseContext/RenderContext";

function SideBar() {
  const { isOpen } = useContext(RenderContext);

  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: "rgb(228, 228, 228)",
        padding: 10,
        gridColumn: "1 / 2",
        gridRow: "1 / 3",
      }}
    >
      <h2>Sidebar</h2>
      <UserInformations />
    </div>
  );
}

export default SideBar;
