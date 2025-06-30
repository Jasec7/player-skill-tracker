//import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import React from "react";
import NavBar from './NavBar';

function App() {
 return(
  <div>
    <NavBar />
    <Outlet />
      
    </div>
  );
}

export default App;
