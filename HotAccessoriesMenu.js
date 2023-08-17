import React from "react";
import "../Styles/HotAccessoriesMenu.css";
import { Link } from "react-router-dom";

const HotAccessoriesMenu = () => {
  return (
    <div className="Hotaccessoriesmenu">
      <Link className="Hotaccessorieslink" to="/music">
        Music Store
      </Link>
      <Link className="Hotaccessorieslink" to="/smartDevices">
        Smart Devices
      </Link>
      <Link className="Hotaccessorieslink" to="/home">
        Home
      </Link>
      <Link className="Hotaccessorieslink" to="/lifestyle">
        Lifestyle
      </Link>
      <Link className="Hotaccessorieslink" to="/mobileAccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;
