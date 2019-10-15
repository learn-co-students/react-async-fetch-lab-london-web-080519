import React, {Component} from 'react';


class Astronauts extends React.Component {

    render(){
        return <li>
            {this.props.astro.name}, {this.props.astro.craft}
            </li>
    }

}

export default Astronauts;