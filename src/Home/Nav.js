import React, { useState } from "react";

export default function Nav({ updateTheme, theme }) {
  const [mode, setMode] = useState("Dark");
  const handleClick = () => {
    updateTheme(theme === "light" ? "dark" : "light");
    setMode(mode === "Dark" ? "Light" : "Dark");
  };
  return (
    <div className="nav">
      <div className="title">
        <h3>Where in the world?</h3>
      </div>
      <div className="toggleMode" onClick={handleClick}>
        <i className="bi bi-brightness-low-fill">{mode} Mode</i>
      </div>
    </div>
  );
}
