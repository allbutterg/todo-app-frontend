import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskTitle from './TaskTitle';
import TaskHeader from './TaskHeader';
import TaskList02 from './TaskList02';
import TaskCount2 from './TaskCount2';


class TaskBoxMore extends React.Component {

    state = {
        tasks: [
            {
                id: 1,
                category: "Work",
                description: "Prepare check-in presentation",
                priority: 1,
                goaldate: "05/03/20",
                completed: false
            },

            {
                id: 2,
                category: "Work",
                description: "Read E-commerce book",
                priority: 1,
                goaldate: "14/02/20",
                completed: false
            },

            {
                id: 3,
                category: "Work",
                description: "Gain feedback from team",
                priority: 2,
                goaldate: "21/02/20",
                completed: false
            }

        ]
    }


    deleteTask = (taskId) => {
        const updatedTasks = this.tasks.filter(item => item.id !== taskId);

        this.setState({
            tasks: updatedTasks
        });

    }



    render() {
        return (
            
                <div className="box row col-lg-8">
                    <TaskTitle />
                    <TaskHeader />
                    <TaskList02 taskCollection={this.state.tasks} deleteTaskFunc={this.deleteTask}/>
                    {/* <TaskCount2 taskCount2={this.state.tasks.length} /> */}
                </div>

            

        );
    }
}
export default TaskBoxMore;



