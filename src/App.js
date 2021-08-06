import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Home from "./Home/Home";
import Details from "./Details/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const API = "https://restcountries.eu/rest/v2/all";
  const [countryList, setCountryList] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [theme, setTheme] = useState("light");
  const getCountries = async (endpoint) => {
    const res = await fetch(endpoint);
    const countries = await res.json();
    setCountryList(countries);
  };

  useEffect(() => {
    getCountries(API);
  }, []);
  const updateSearch = (str) => {
    setQuery(str);
  };
  const updateRegion = (str) => {
    setRegion(str);
  };
  const updateTheme = (str) => {
    setTheme(str);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home
                countries={countryList}
                updateSearch={updateSearch}
                updateRegion={updateRegion}
                query={query}
                region={region}
                theme={theme}
                updateTheme={updateTheme}
              />
            </Route>
            <Route path="/details/:countryName">
              <Details
                countries={countryList}
                updateTheme={updateTheme}
                theme={theme}
              />
            </Route>
          </Switch>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
