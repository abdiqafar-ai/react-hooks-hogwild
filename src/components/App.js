import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./HogTile";
import HogDetail from "./HogDetail";
import HogForm from "./HogForm";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [filteredHogs, setFilteredHogs] = useState(hogs);
  const [selectedHog, setSelectedHog] = useState(null);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const handleGreasedToggle = () => {
    setShowGreased(!showGreased);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    sortHogs(e.target.value);
  };

  const sortHogs = (criteria) => {
    const sortedHogs = [...filteredHogs].sort((a, b) => {
      if (criteria === "weight") {
        return a.weight - b.weight;
      }
      return a.name.localeCompare(b.name);
    });
    setFilteredHogs(sortedHogs);
  };

  const handleHogSelect = (hog) => {
    setSelectedHog(hog);
  };

  const hideHog = (hogToHide) => {
    setFilteredHogs(filteredHogs.filter((hog) => hog.name !== hogToHide.name));
  };

  const addHog = (newHog) => {
    setHogList([...hogList, newHog]);
    setFilteredHogs([...filteredHogs, newHog]);
  };

  const displayedHogs = showGreased
    ? filteredHogs.filter((hog) => hog.greased)
    : filteredHogs;

  return (
    <div className="App">
      <Nav />
      <button onClick={handleGreasedToggle}>
        {showGreased ? "Show All Hogs" : "Show Greased Hogs"}
      </button>
      <select onChange={handleSortChange}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
      <div className="hog-list">
        {displayedHogs.map((hog) => (
          <HogTile
            key={hog.name}
            hog={hog}
            onSelect={handleHogSelect}
            onHide={hideHog}
          />
        ))}
      </div>
      {selectedHog && <HogDetail hog={selectedHog} />}
      <HogForm addHog={addHog} />
    </div>
  );
}

export default App;
