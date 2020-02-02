import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import TaskTile from './TaskTile';
import TaskHeader from './TaskHeader';
import TaskBox from './TaskBox';
import TaskBoxMore from './TaskBoxMore';

import Test_Task_List from './Test_Task_List';

function App() {
  return (
    <div className="container">
      <br></br>
      <Header/>
      <br></br>
      <Form/>
      <br></br>
      <TaskTile/>
    </div>
  );
}

export default App; 