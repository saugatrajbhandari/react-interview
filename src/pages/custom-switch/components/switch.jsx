import React from "react";
import "./switch.css";

function Switch({ isOn, handleToggle, label = "" }) {
  return (
    <div className="switch">
      <label>
        <input
          type="checkbox"
          role="switch"
          aria-checked={isOn}
          checked={isOn}
          onChange={handleToggle}
        />

        <span className="slider"></span>
        {/* <span className="switch-label">{label}</span> */}
      </label>
    </div>
  );
}

export default Switch;
