import React from 'react';
import logo from './logo.svg';
import data from './data/data.json';
import Table from './components/table/table';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Table data={data} />
        </div>
        
      </header>
    </div>
  );
}

export default App;
