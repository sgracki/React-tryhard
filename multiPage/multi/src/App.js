import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/index.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <h1> Main ls </h1>
            </div>
        );
    }
}

export default App;
