import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">EquipAdmin</span>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer">
            <Settings />
          </div>
          {/*<img src="" alt="" className="topPhoto" /> */}
        </div>
      </div>
    </div>
  );
}
