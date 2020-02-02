import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskGoalDate from './TaskGoalDate';


class Task extends React.Component {
    render() {
        return (

            <>
                <div className="col-7 taskEntry">
                    {this.props.item.description}
                </div>
                <TaskGoalDate />
            </>


        );
    }
}
export default Task;


// <div className="col-7 taskEntry">Example Task @ Priority 2</div>
                    // <div className="col-7 taskEntry">Example Task @ Priority 3</div>
