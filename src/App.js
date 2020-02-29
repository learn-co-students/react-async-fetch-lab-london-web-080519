// create your App component here
import React, {Component} from 'react';
import Astronauts from './Astronauts'

class App extends React.Component {

state= {
    astronauts: []
}

componentDidMount(){
    fetch('http://api.open-notify.org/astros.json').then(resp=>resp.json().then(data => this.setState({astronauts:data.people})))
}

    render(){
        return <div>
            <h1>People In Space</h1>
            <ul>
                {/* <Astronauts>astros={this.state.astronauts} */}
                    {this.state.astronauts.map(person => <Astronauts astro={person}/>)}
                {/* </Astronauts> */}
            </ul>
            </div>
    }

}

export default App;