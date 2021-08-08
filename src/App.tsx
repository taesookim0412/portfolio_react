import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Portfolio} from "./Portfolio/Portfolio";
import {EmptyLanding} from "./Portfolio/EmptyLanding/EmptyLanding";

function App() {
  return (
    <div className="App">
        <EmptyLanding/>
        <Portfolio/>
    </div>
  );
}

export default App;
