import React from "react";
import Select from "./Select";
import InputField from "./InputField";

export default function PageInputs({ updateSearch, updateRegion }) {
  return (
    <div className="PageInputs">
      <div>
        <InputField updateSearch={updateSearch} />
      </div>
      <div className="select-tag">
        <Select updateRegion={updateRegion} />
      </div>
    </div>
  );
}
