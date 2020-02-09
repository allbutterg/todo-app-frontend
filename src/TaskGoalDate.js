import React from 'react';
import logo from './logo.svg';
import './App.css';
import ActionButtons from './ActionButtons';


class TaskGoalDate extends React.Component {
    render() {
        return (

          <>
            <div className="col-3 goalDate">{this.props.item.goaldate}</div>
           
         </>

        );
    }
}
export default TaskGoalDate;
