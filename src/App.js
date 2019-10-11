// create your App component here
import React from "react";

class App extends React.Component {
	componentDidMount() {
		return fetch("http://api.open-notify.org/astros.json").then(response =>
			response.json(),
		);
	}

	render() {
		return "hi";
	}
}

export default App;
