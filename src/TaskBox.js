import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskTitle from './TaskTitle';
import TaskHeader from './TaskHeader';
import TaskList01 from './TaskList01';
import TaskCount1 from './TaskCount1';


class TaskBox extends React.Component {

    state = {
        tasks: [
            {
                id: 1,
                category: "Personal",
                description: "Complete TR homework",
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
                <TaskList01 taskCollection={this.state.tasks} />
                <TaskCount1 taskCount1={this.state.tasks.length} />
            </div>



        );
    }
}
export default TaskBox;



