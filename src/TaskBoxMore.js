import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskTitle from './TaskTitle';
import TaskHeader from './TaskHeader';
import TaskList02 from './TaskList02';


class TaskBoxMore extends React.Component {

    state = {
        tasks: [
            {
                id: 1,
                category: "Work",
                description: "Prepare check-in presentation",
                priority: 1,
                completed: false
            },

            {
                id: 2,
                category: "Work",
                description: "Read E-commerce book",
                priority: 1,
                completed: false
            },

            {
                id: 3,
                category: "Work",
                description: "Gain feedback from team",
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
                    <TaskList02 taskCollection={this.state.tasks} />
                </div>

            

        );
    }
}
export default TaskBoxMore;



