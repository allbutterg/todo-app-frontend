import React from 'react';
import logo from './logo.svg';
import './App.css';

class TaskCount2 extends React.Component {
    render() {
      return (
       <div className="col-12">
           <h1>{this.props.taskCount2}</h1>  
 
        </div>
      );
    }
  }
  export default TaskCount2;