import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBox from './TaskTitle';


class TaskTile extends React.Component {
    render() {
        return (

            <div className="row col-lg-12 flex-wrap">
                <TaskBox/>

            </div>
        );
    }
}
export default TaskTile;
