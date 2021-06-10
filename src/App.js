import React from 'react';
import './App.css';
import './props.css';
import Header from "./screens/header";

import Sidebar from "./screens/sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />

    <div className="app__body">
      <h1> The Raman Effect</h1>
    </div>
          
    </div>
  );
}

export default App;
