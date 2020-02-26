import React from 'react';
import logo from './logo.svg';
import './App.css';


class ActionButtons extends React.Component {


editClicked = () => {
    alert("Do you want to edit your task ${this.props.item.id}?");
}

deleteClicked = () => {
    alert("Are you sure you want to delete this button?");
}

// doneClicked = () => {
//     this.props.completedTaskFunc(this.props.item.id);
// }

    render() {
        return (
            
            <div className="col-4">
                <button type="button" onClick={this.editClicked}> <i className="far fa-edit"></i></button>  <button type="button" onClick={this.deleteClicked}> <i
                        className="far fa-trash-alt"></i></button>  <button type="button" onClick={this.doneClicked}> <i
                        className="far fa-paper-plane"></i></button>
            </div>
    
        );
    }
}
export default ActionButtons;
