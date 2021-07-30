import React, { Component } from "react";
import { SeasonDisplay } from "./Components/SeasonDisplay/SeasonDisplay";
import LoadingAnimation from "./Components/LoadingSpinner/loading";

export class App extends Component {
  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.lat && this.state.long && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }
    if (!this.state.lat && !this.state.long && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return (
      <LoadingAnimation message='Please Accept Location Request'></LoadingAnimation>
    );
  }
}

export default App;
