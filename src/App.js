import React from "react";

export default class App extends React.Component {
  state = {
    api: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          api: data
        })
      );
  }

  render() {
    return;
    <div></div>;
  }
}