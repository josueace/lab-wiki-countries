import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import countries from "./countries.json";
import Country from "./components/Country";
import CountryDetail from "./components/CountryDetail";
import { Switch, Route } from "react-router-dom";

const styles = {
  maxHeight: "90vh",
  overflow: "scroll"
};

class App extends Component {
  state = {
    countries: countries
  };

  showCountries = () => {
    const countryList = this.state.countries.map(country => {
      return <Country country={country} />;
    });
    return countryList;
  };



  render() {
   
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-5" style={styles}>
              <div className="list-group" style={{ textAlign: "left" }}>
                {this.showCountries()}
              </div>
            </div>
            <Route
              exact
              path="/country/:cca3"
              component={CountryDetail}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
