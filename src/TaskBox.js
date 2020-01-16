import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskTitle from './TaskTitle';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';


class TaskBox extends React.Component {
    render() {
        return (

            <div>
                <div className="box row col-lg-5">
                    <TaskTitle />
                    <TaskHeader />
                    <TaskList />

                </div>
            </div>

        );
    }
}
export default TaskBox;



