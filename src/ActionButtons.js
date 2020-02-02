import React from 'react';
import logo from './logo.svg';
import './App.css';


class ActionButtons extends React.Component {
    render() {
        return (
            
            <div className="col-9">
                <button type="button">Update <i className="far fa-edit"></i></button> <button type="button">Delete <i
                        className="far fa-trash-alt"></i></button> <button type="button">Done <i
                        className="far fa-paper-plane"></i></button>
            </div>
    
        );
    }
}
export default ActionButtons;
