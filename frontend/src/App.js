import React from 'react';
import Home from './components/Home';
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>        
        <BaseRouter />
      </div>
    </Router>    
  );
}

export default App;
