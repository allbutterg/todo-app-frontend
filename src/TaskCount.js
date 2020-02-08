import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskCount1 from './TaskCount1';
import TaskCount2 from './TaskCount2';

class TaskCount extends React.Component {

    render() {

        let TotalTaskCount = <TaskCount1 /> + 
        <TaskCount2 /> 

        return (

            <div className="col-12">
                <h1>TotalTaskCount</h1>

            </div>
        );
    }
}
export default TaskCount;