import React, { Component } from "react";

import '../styles/App.css';
import { get } from '../services/service.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest() {
        //TODO Replace string with env var process.env.REACT_APP_API_URI
        get("http://localhost:8080" + '/init', (response) => {
            console.log("response", response);
        });
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <button onClick={this.sendRequest}>Send request</button>
            </div>
        );
    }
}

export default App;