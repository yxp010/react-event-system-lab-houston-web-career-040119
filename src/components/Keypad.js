// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {

    render() {
        return(
            <input type="password" onKeyUp={this.event}/>
        )
    }

    event = () => {
        console.log('Entering password...')
    }
}

export default Keypad