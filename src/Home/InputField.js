import React from "react";
import { useState } from "react";

export default function InputField({ updateSearch }) {
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateSearch(inputVal);
    setInputVal("");
    document.getElementById("formId").reset();
  };

  return (
    <div className="inputfield">
      <form onSubmit={handleSubmit} id="formId">
        <span>
          <i className="bi bi-search"></i>
        </span>
        <input
          placeholder="Search for a country..."
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
