import React from 'react';
import logo from './logo.svg';
import './App.css';


class TaskHeader extends React.Component {
    render() {
        return (

            <>
                <div className="row col-12">
                    <div className="col-5 taskHeader">Task</div>
                    <div className="col-3 taskHeader">Complete By</div>
                    <div className="col-4 taskHeader">Edit  Delete  Done</div>
                </div>
            </>

        );
    }
}
export default TaskHeader;
