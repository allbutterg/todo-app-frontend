import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import TaskTile from './TaskTile';
import Test_Task_List from './Test_Task_List';

function App() {
  return (
    <div className="container">
      <br></br>
      <Header/>
      <br></br>
      <Form/>
      <br></br>
      <Test_Task_List/>
    </div>
  );
}

export default App;