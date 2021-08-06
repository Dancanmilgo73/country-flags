import React from "react";
import Country from "./Country";

export default function Countries({ countries, query, region, theme }) {
  if (query.length > 0) {
    countries = countries.filter((country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
    if (countries.length < 1)
      return (
        <div className="no-country">
          <p>No search country</p>
        </div>
      );
  }
  if (region.length > 0) {
    countries = countries.filter((country) =>
      country.region.toLowerCase().includes(region)
    );
  }
  console.log(countries);
  return (
    <div className="countries">
      {countries.map((country) => (
        <div key={country.name}>
          <Country country={country} theme={theme} />
        </div>
      ))}
    </div>
  );
}
