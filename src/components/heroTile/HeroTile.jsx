import React from "react";
import "./style.scss";

export const HeroTile = ({ weather }) => {
  console.log(weather);
  return (
    <div className="heroTile">
      <div className="heroContainer">
        HeroTile
        <p>City name: {weather?.location?.name}</p>
        <p>Temperature: {weather?.current?.temperature}</p>
      </div>
    </div>
  );
};
