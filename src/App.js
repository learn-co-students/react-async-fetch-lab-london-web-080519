// create your App component here
import React from 'react';

const URL = "http://api.open-notify.org/astros.json"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount()  {
        console.log("mounted")
        return fetch(URL).then(response=> response.json()).then(data=> this.setState({data}))
    }

    render() {
        const Comp = this.componentDidMount
        return(
            <div>
                { this.Comp }
            </div>
        )
    }

    

}