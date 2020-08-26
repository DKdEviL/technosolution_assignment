import React from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import data from './data/data.json';
import Table from './components/table/table';
import StudentInfo from './components/studentForm/studentForm'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <div  className="App-header">
        <Switch>
          <Route path="/studentInfo">
            <Link  to="/">Result Board</Link>
            <StudentInfo />
          </Route>
          <Route path="/" >
            <Table data={data} />
            <Link to="/studentInfo">Enter Student Details</Link>
          </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
