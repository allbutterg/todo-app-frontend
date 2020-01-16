import React from 'react';
import logo from './logo.svg';
import './App.css';


class TaskHeader extends React.Component {
    render() {
        return (

            <div>
            <div className="row col-12">
            <div className="row col-7 taskHeader">
                Task
            </div>
            <div className="col-5 taskHeader">
                Complete By
            </div>
        </div>
        </div>
        );
    }
}
export default TaskHeader;
