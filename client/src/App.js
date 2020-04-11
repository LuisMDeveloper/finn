import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Finn</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <hr/>
                <div className="jumbotron">
                    <h1>Finn</h1>
                    <p className="lead">Personal Financial Tracker.</p>
                </div>
                <hr/>
            </div>
        </div>
    );
}

export default App;
