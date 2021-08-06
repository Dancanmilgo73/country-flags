import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Nav from "../Home/Nav";

import { Link } from "react-router-dom";
export default function Details({ countries, updateTheme, theme }) {
  let { countryName } = useParams();

  const country = countries.filter((country) => country.name === countryName);
  if (!country[0]) {
    return <Redirect to={"/"} />;
  }
  //console.log(country);
  return (
    <div className="details">
      <Nav updateTheme={updateTheme} theme={theme} />

      <div className="wrapper">
        <div className="button">
          <Link to="/">
            <button>
              <i className="bi bi-arrow-left">Back</i>
            </button>
          </Link>
        </div>
        <div className="flag">
          <img src={country[0].flag} alt="flag" />
        </div>
        <div className="name-n-cap">
          <h3>{country[0].name}</h3>
          <p>
            <b>Native name</b>:{country[0].nativeName}
          </p>
          <p>
            <b>Population</b>:{country[0].population}
          </p>
          <p>
            <b>Region</b>:{country[0].region}
          </p>
          <p>
            <b>Sub Region</b>:{country[0].subregion}
          </p>
          <p>
            <b>Capital</b>:{country[0].capital}
          </p>
        </div>
        <div className="curr-n-code">
          <p>
            <b>Top Level Domain</b>:{country[0].alpha2Code}
          </p>
          <p>
            <b>Currencies</b>: &nbsp;
            {country[0].currencies.map((currency) => (
              <span key={currency.name}>{currency.name}, </span>
            ))}
          </p>

          <p>
            <b>Languages</b>: &nbsp;
            {country[0].languages.map((language) => (
              <span key={language.name}>{language.name}, </span>
            ))}
          </p>
        </div>

        <div className="border-countries">
          <div className="border-countries-head">
            <b>Border Countries</b>:
          </div>
          <div className="bordersCon">
            {country[0].borders.map((country) => (
              <div className="borderCountry" key={country}>
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
