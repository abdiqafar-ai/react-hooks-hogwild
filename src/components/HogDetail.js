import React from "react";

const HogDetail = ({ hog }) => {
  return (
    <div className="hog-detail">
      <h2>{hog.name}</h2>
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight} kg</p>
      <p>Greased: {hog.greased ? "Yes" : "No"}</p>
      <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
    </div>
  );
};

export default HogDetail;
