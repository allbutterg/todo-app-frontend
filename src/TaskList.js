import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskGoalDate from './TaskGoalDate';


class TaskList extends React.Component {
    render() {
        return (

            <div>
            <div className="row col-12">
                <div className="col-7 taskEntry">Example Task @ Priority 1</div>
                <TaskGoalDate/>
            </div>
            </div>

        );
    }
}
export default TaskList;
