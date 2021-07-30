import React, { Component } from "react";
import { SeasonDisplay } from "./Components/SeasonDisplay";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
    };
    console.log(props);
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return (
      <div>
        Latitude
        <SeasonDisplay></SeasonDisplay>
      </div>
    );
  }
}

export default App;
