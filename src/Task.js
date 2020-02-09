import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskGoalDate from './TaskGoalDate';
import ActionButtons from './ActionButtons';
import TaskCategory from './TaskCategory';


class Task extends React.Component {

    editClicked = () => {
        alert(`Do you want to edit your task ${this.props.item.id}?`);
    }
    
    deleteClicked = () => {
        this.props.deleteTaskFunc(this.props.item.id);

    }
    
    doneClicked = () => {
        alert(`Well done, you've completed this task ${this.props.item.id}?!`);
    }

    
    render() {
        return (

            <>
                <div className="col-5 taskEntry">
                    {this.props.item.description}
                   
                </div>
        
                <div className="col-3 goalDate">{this.props.item.goaldate}</div>
        <div className="col-4">
                <button type="button" onClick={this.editClicked}> <i className="far fa-edit"></i></button>  <button type="button" onClick={this.deleteClicked}> <i
                        className="far fa-trash-alt"></i></button>  <button type="button" onClick={this.doneClicked}> <i
                        className="far fa-paper-plane"></i></button>
            </div>
                

            </>


        );
    }
}
export default Task;


// <div className="col-7 taskEntry">Example Task @ Priority 2</div>
                    // <div className="col-7 taskEntry">Example Task @ Priority 3</div>
