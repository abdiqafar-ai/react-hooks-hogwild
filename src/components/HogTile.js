import React from "react";

const HogTile = ({ hog, onSelect, onHide }) => {
  return (
    <div className="pigTile" onClick={() => onSelect(hog)}>
      <img src={hog.image} alt={hog.name} />
      <h3>{hog.name}</h3>
      <p>{hog.specialty}</p>
      <p>Weight: {hog.weight} kg</p>
      <p>Greased: {hog.greased ? "Yes" : "No"}</p>
      <p>Highest Medal: {hog["highest medal achieved"]}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onHide(hog);
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default HogTile;
