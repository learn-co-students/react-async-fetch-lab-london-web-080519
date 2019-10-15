// create your App component here
import React, { Component } from 'react';

export class App extends Component {
    state = {
        people: []
    }
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json").then(res => res.json()).then(resObj => this.setState({people: resObj.people}))
    }
    
    render() {
        return (
            <ul>
                {this.state.people.map(person => <li>{person.name} - {person.craft}</li>)}  
            </ul>
        );
    }
}

export default App;
