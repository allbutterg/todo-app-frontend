import React from 'react';
import logo from './logo.svg';
import './App.css';


class TaskCategory extends React.Component {
    render() {
        return (
                <div className="col-5 taskItem">
                    {this.props.item.category}
                </div>

          


        );
    }
}
export default TaskCategory;