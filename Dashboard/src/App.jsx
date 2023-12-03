import React from 'react';
import './App.css';
import Sidebar from "./component/sidebar/sidebar";
import Mainbar from './mainbar';
//import { Routes,Route } from 'react-router-dom';



function App() {
 
  return (<div className="App">
      <div className="container">
        <div className="row">
            <div className="col-2">
              <Sidebar/>
            </div>
            <Mainbar/>
        </div>
    </div>
  </div> );
}

export default App;
