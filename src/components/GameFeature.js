import React from "react";

const GameFeature = ({ popularVr }) => {
  return (
    <div>
      <div className="info">
        <div className="featured-tag">
          <h5>Featured Title:</h5>
        </div>
        <h1> {popularVr[0] ? popularVr[0].name : `Half-Life: Alyx`}</h1>
        <h4>Released: {popularVr[0] ? popularVr[0].released : `2020-03-23`}</h4>
      </div>
    </div>
  );
};

export default GameFeature;
