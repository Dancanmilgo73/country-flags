import React from "react";
import Nav from "./Nav";
import PageInputs from "./PageInputs";

import Countries from "./Countries";

export default function Home({
  countries,
  updateSearch,
  query,
  updateRegion,
  region,
  theme,
  updateTheme,
}) {
  return (
    <div>
      <Nav updateTheme={updateTheme} theme={theme} />
      <PageInputs updateSearch={updateSearch} updateRegion={updateRegion} />
      <Countries
        countries={countries}
        query={query}
        region={region}
        theme={theme}
      />
    </div>
  );
}
