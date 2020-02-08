import React from 'react';
import logo from './logo.svg';
import './App.css';

class TaskCount1 extends React.Component {
    render() {
      return (
       <div className="col-12">
           <h1>{this.props.taskCount1}</h1>  
 
        </div>
      );
    }
  }
  export default TaskCount1;