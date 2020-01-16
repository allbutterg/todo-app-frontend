import React from 'react';
import logo from './logo.svg';
import './App.css';


class TaskTitle extends React.Component {
    render() {
        return (

            <div className="row col-12">
            <div className="row col-7 taskHeader">
                Task
            </div>
            <div className="col-5 taskHeader">
                Complete By
            </div>
        </div>
        );
    }
}
export default TaskTitle;
