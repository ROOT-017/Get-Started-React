import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  winter: {
    text: "Burr,it chilly",
    iconName: "winterIcon",
  },
  summer: {
    text: "Let's hit the beach",
    iconName: "summerIcon",
  },
};
const GetSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  let season = GetSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display container ${season}`}>
      <h1 className="letf-icon">{iconName}</h1>
      <h1 className="text">{text}</h1>
      <h1 className="right-icon">{iconName}</h1>
    </div>
  );
};

export default SeasonDisplay;
