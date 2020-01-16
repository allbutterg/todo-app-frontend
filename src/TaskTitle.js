import React from 'react';
import logo from './logo.svg';
import './App.css';


class TaskTitle extends React.Component {
    render() {
        return (

            <div>
            <div className="row col-12"></div>
            <div className="col-3 taskTitle">Personal</div>
            <div className="col-9">
                <button type="button">Update <i className="far fa-edit"></i></button> <button type="button">Delete <i
                        className="far fa-trash-alt"></i></button> <button type="button">Done <i
                        className="far fa-paper-plane"></i></button>
            </div>
            </div>
        );
    }
}
export default TaskTitle;
