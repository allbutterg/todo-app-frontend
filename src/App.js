import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import TaskTile from './TaskTile';
import TaskBox from './TaskBox';
import Test_Task_List from './Test_Task_List';

function App() {
  return (
    <div className="container">
      <br></br>
      <Header/>
      <br></br>
      <Form/>
      <br></br>
      <TaskBox/>
    </div>
  );
}

export default App;