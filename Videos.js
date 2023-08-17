import React from "react";
import VideoCard from "./VideoCard.js";
import "../Styles/Videos.css";

const Videos = ({ Videos }) => {
  return (
    <div className="Videos">
      {Videos.map((item, index) => (
        <VideoCard
          index={index}
          name={item.name}
          image={item.image}
          key={item.key}
        />
      ))}
    </div>
  );
};

export default Videos;
