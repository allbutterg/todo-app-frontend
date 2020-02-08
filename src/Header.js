import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskCount from './TaskCount';

class Header extends React.Component {
    render() {
      return (
        <div className="row typewriter col-lg-12">
           
            <h1>OH TODO! We've got X tasks to do...</h1>
            <TaskCount />
           
        </div>
      );
    }
  }
  export default Header;