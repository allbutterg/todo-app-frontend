import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import TaskHeader from './TaskHeader';
import TaskList01 from './TaskList01';
import TaskList02 from './TaskList02';

class Container extends React.Component {

//Tasks List
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
            },

            {
                id: 4,
                category: "Work",
                description: "Prepare check-in presentation",
                priority: 1,
                goaldate: "05/03/20",
                completed: false
            },

            {
                id: 5,
                category: "Work",
                description: "Read E-commerce book",
                priority: 3,
                goaldate: "14/02/20",
                completed: false
            },

            {
                id: 6,
                category: "Work",
                description: "Gain feedback from team",
                priority: 2,
                goaldate: "21/02/20",
                completed: false
            }

        ]
    }

    //Task List functions

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
            goaldate: "19/03/20",
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

            <div className="container">
                <br></br>
                <Header />
                <br></br>
                <Form addTaskFunc={this.addTask} />
                <br></br>
                <div className="row col-lg-12 flex-wrap">

                    <div className="box row col-lg-9">
                        <div className="col-5 taskTitle">
                            My Tasks
                            </div>
                        <TaskHeader />
                        <TaskList01
                            taskCollection={this.state.tasks}
                            deleteTaskFunc={this.deleteTask}
                            completedTaskFunc={this.completeTask} />
                        {/* <TaskCount1 taskCount1={this.state.tasks.length} /> */}

        
                    </div> 

                </div>

            </div>

        );
    }
}
export default Container;