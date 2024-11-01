import React, { useState } from "react";

const HogForm = ({ addHog }) => {
  const [newHog, setNewHog] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    "highest medal achieved": "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHog({
      ...newHog,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(newHog);
    setNewHog({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      "highest medal achieved": "",
      image: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={newHog.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="specialty"
        value={newHog.specialty}
        onChange={handleChange}
        placeholder="Specialty"
        required
      />
      <input
        name="weight"
        type="number"
        value={newHog.weight}
        onChange={handleChange}
        placeholder="Weight"
        required
      />
      <input
        name="image"
        value={newHog.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <label>
        Greased:
        <input
          name="greased"
          type="checkbox"
          checked={newHog.greased}
          onChange={handleChange}
        />
      </label>
      <input
        name="highest medal achieved"
        value={newHog["highest medal achieved"]}
        onChange={handleChange}
        placeholder="Highest Medal"
        required
      />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;
