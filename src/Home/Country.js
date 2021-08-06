import React from "react";

import { Link } from "react-router-dom";
export default function Country({ country, theme }) {
  return (
    <div className="country-card">
      <Link
        to={`/details/${country.name}`}
        style={
          theme === "light"
            ? { color: "black", textDecoration: "none" }
            : { color: "white", textDecoration: "none" }
        }
      >
        <div>
          <img src={country.flag} alt="flag" />
        </div>

        <div className="caption">
          <h3>{country.name}</h3>
          <p>
            <b>Population</b>: {country.population}
          </p>
          <p>
            <b>Region</b>: {country.region}
          </p>
          <p>
            <b>Capital</b>: {country.capital}
          </p>
        </div>
      </Link>
    </div>
  );
}
