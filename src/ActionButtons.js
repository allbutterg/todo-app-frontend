import React from 'react';
import logo from './logo.svg';
import './App.css';


class ActionButtons extends React.Component {


editClicked = () => {
    alert("Do you want to edit your task?");
}

deleteClicked = () => {
    alert("Are you sure you want to delete this button?");
}

doneClicked = () => {
    alert("Well done, you've completed this task!");
}

    render() {
        return (
            
            <div className="col-9">
                <button type="button" onClick={this.editClicked}>Update <i className="far fa-edit"></i></button> <button type="button" onClick={this.deleteClicked}>Delete <i
                        className="far fa-trash-alt"></i></button> <button type="button" onClick={this.doneClicked}>Done <i
                        className="far fa-paper-plane"></i></button>
            </div>
    
        );
    }
}
export default ActionButtons;
