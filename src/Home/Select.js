import React from "react";

export default function Select({ updateRegion }) {
  const handleChange = (e) => {
    updateRegion(e.target.value);
  };

  return (
    <div className="select-form">
      <select className="form-select" onChange={handleChange}>
        <option defaultValue value="">
          Filter by region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}
