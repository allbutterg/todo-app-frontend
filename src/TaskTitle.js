import React from 'react';
import logo from './logo.svg';
import './App.css';
import ActionButtons from './ActionButtons';


class TaskTitle extends React.Component {
    render() {
        return (

            <>
            <div className="row col-12">
            <div className="col-3 taskTitle">Personal</div>
            <ActionButtons/>
            </div>
            </>
        );
    }
}
export default TaskTitle;
