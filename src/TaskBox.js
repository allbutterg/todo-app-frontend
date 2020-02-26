import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskTitle from './TaskTitle';
import TaskHeader from './TaskHeader';
import TaskList01 from './TaskList01';
import TaskCount1 from './TaskCount1';
import TaskGoalDate from './TaskGoalDate';
import ActionButtons from './ActionButtons';
import Task from './Task';


class TaskBox extends React.Component {

    state = {
        tasks: [
            {
                id: 1,
                category: "Personal",
                description: "Complete TR homework",
                priority: 1,
                goaldate: "19/03/20",
                completed: false
            },

            {
                id: 2,
                category: "Personal",
                description: "Renew Driving Licence",
                priority: 1,
                goaldate: "16/02/20",
                completed: false
            },

            {
                id: 3,
                category: "Personal",
                description: "Book theatre tickets",
                priority: 2,
                goaldate: "29/02/20",
                completed: false
            }

        ]
    }

    deleteTask = (taskId) => {

        const updatedTasks = this.state.tasks.filter(item => item.id !== taskId);

        this.setState({
            tasks: updatedTasks
        });

    }


    addTask = (taskDescription) => {


        const taskToAdd = {
            id: 10,
            category: "Personal",
            description: taskDescription,
            priority: 1,
            goalDate: "19/03/20",
            completed: false
        };

        const currentTasks = this.state.tasks;

        currentTasks.push(taskToAdd);

        this.setState({
            tasks: currentTasks
        });
    }

    completeTask = (taskId) => {
        alert(`Do you want to delete ${taskId} from state?`)
    }


    render() {
        return (

            <div className="box row col-lg-8">
                <TaskTitle taskCollection={this.state.tasks} />
                <TaskHeader />
                <TaskList01 
                taskCollection={this.state.tasks}
                deleteTaskFunc={this.deleteTask} 
                completedTaskFunc={this.completeTask} />
                {/* <TaskCount1 taskCount1={this.state.tasks.length} /> */}

            </div>



        );
    }
}
export default TaskBox;



