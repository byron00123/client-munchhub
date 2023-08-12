import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Other routes and components */}
      </div>
    </Router>
  );
}

export default App;
