import React, { Component } from 'react';
import './index.css';
import Nav from '../Nav/index';
import Header from '../Header/index';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Header />
                <h1> Main view </h1>
            </div>
        );
    }
}

export default App;
