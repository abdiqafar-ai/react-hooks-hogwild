import React from "react";

const HogTile = ({ hog, onSelect, onHide }) => {
  return (
    <article className="hog-tile" onClick={() => onSelect(hog)}>
      <header>
        <img src={hog.image} alt={hog.name} />
        <h3>{hog.name}</h3>
        <p>{hog.specialty}</p>
      </header>
      <section>
        <p>Weight: {hog.weight} kg</p>
        <p>Greased: {hog.greased ? "Yes" : "No"}</p>
        <p>Highest Medal: {hog["highest medal achieved"]}</p>
      </section>
      <footer>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onHide(hog);
          }}
        >
          Hide
        </button>
      </footer>
    </article>
  );
};

export default HogTile;
