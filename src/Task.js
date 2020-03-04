import React from 'react';
import logo from './logo.svg';
import './App.css';


class Task extends React.Component {

    editClicked = () => {
        alert(`Do you want to edit your task ${this.props.item.id}?`);
    }

    deleteClicked = () => {
        this.props.deleteTaskFunc(this.props.item.id);

    }

    doneClicked = () => {
        this.props.completedTaskFunc(this.props.item.id);
    }


    render() {

        let description;
        
        if (this.props.item.completed) {
          description = <div className="completedTask">{this.props.item.description}</div>
        } else {
            description = <div>{this.props.item.description}</div>
        }


        return (

            <>
                <div className="col-4 taskEntry">
                {description}
                </div>
                <div className="col-2 categoryName">{this.props.item.category}</div>
                <div className="col-3 goalDate">{this.props.item.goaldate}</div>
                <div className="col-3">
                    <button type="button" onClick={this.editClicked}> <i className="far fa-edit"></i></button>  <button type="button" onClick={this.deleteClicked}> <i
                        className="far fa-trash-alt"></i></button> <button type="button" onClick={this.doneClicked}> <i
                            className="far fa-paper-plane"></i></button>
                </div>


            </>


        );
    }
}
export default Task;

