import React from 'react';
import logo from './logo.svg';
import './App.css';

class TaskWork extends React.Component {

    editClicked = () => {
        alert(`Do you want to edit your task ${this.props.item.id}?`);
    }
    
    deleteClicked = () => {
        this.props.deleteTaskFuncWork(this.props.item.id);

    }
    
    doneClicked = () => {
        this.props.completedTaskFuncWork(this.props.item.id);
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
export default TaskWork;
