import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskCount1 from './TaskCount1';
import TaskCount2 from './TaskCount2';

class TaskCount extends React.Component {

    render() {

        //the total function way?
        let TotalTaskCount = <TaskCount1 /> + 
        <TaskCount2 /> 

        //or the props way?
        //let TotalTaskCount = ({this.props.taskCount1} + {this.props.taskCount2});

        return (

            //How to print it on the page? This way doesn't print the total number,
            //but instead prints in the browser the above function details or [object Object]
            <div className="col-12">
                <h1>{TotalTaskCount}</h1>

            </div>
        );
    }
}
export default TaskCount;