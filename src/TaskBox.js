import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskTitle from './TaskTitle';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';


class TaskBox extends React.Component {

    state = {
        tasks: [
            {
                id: 1,
                category: "Personal",
                description: "Complete BBC homework",
                priority: 1,
                completed: false
            },

            {
                id: 2,
                category: "Personal",
                description: "Renew Driving Licence",
                priority: 1,
                completed: false
            },

            {
                id: 3,
                category: "Personal",
                description: "Book theatre tickets",
                priority: 2,
                completed: false
            }

        ]
    }

    render() {
        return (

            <div className="box row col-lg-5">
                <TaskTitle />
                <TaskHeader />
                <TaskList taskCollection={this.state.tasks} />
            </div>



        );
    }
}
export default TaskBox;



