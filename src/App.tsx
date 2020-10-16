import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import Examples from './Examples/Examples';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Examples/>
            <div>
                <h1></h1>
                <button></button>
            </div>
            <div>
                <h1></h1>
                <form>
                    <input type="text"/>
                    <input type='phone'/>
                    <textarea name="message" id="12"/>
                </form>
                <button>Send</button>
            </div>
            <div>
                <h1></h1>
                <div className={'links'}>
                    1   2   3   4
                </div>
                <span> c 2020 </span>
            </div>
        </div>
    );
}

export default App;
