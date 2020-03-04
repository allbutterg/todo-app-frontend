import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import TaskHeader from './TaskHeader';
import TaskList01 from './TaskList01';
import uuidv4 from 'uuid/v4'


class Container extends React.Component {

//Tasks List
    state = {
        tasks: [
            {
                id: uuidv4(),
                category: "Personal",
                description: "Complete TR homework",
                priority: 1,
                goaldate: "19/03/20",
                completed: false
            },

            {
                id: uuidv4(),
                category: "Personal",
                description: "Renew Driving Licence",
                priority: 1,
                goaldate: "16/02/20",
                completed: false
            },

            {
                id: uuidv4(),
                category: "Personal",
                description: "Book theatre tickets",
                priority: 2,
                goaldate: "29/02/20",
                completed: false
            },

            {
                id: uuidv4(),
                category: "Work",
                description: "Prepare check-in presentation",
                priority: 1,
                goaldate: "05/03/20",
                completed: false
            },

            {
                id: uuidv4(),
                category: "Work",
                description: "Read E-commerce book",
                priority: 3,
                goaldate: "14/02/20",
                completed: false
            },

            {
                id: uuidv4(),
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


    addTask = (taskDescription, taskCategory, taskPriority, taskgoalDate) => {


        const taskToAdd = { 
            
            id: uuidv4(),
            category: taskCategory,
            description: taskDescription,
            priority: 2,
            goaldate: "19/03/20",
            completed: false
        };


        const currentTasks = this.state.tasks;

        currentTasks.push(taskToAdd);

        this.setState({
            tasks: currentTasks
        });
    }

    // completeTask = (taskId) => {
    //     alert(`Do you want to delete ${taskId} from state?`)
    // }


    // completeTask = (taskId) => {

    //     const tasksUpdated = this.state.tasks
    //     for (let i = 0; i < tasks.length; i++) {
    //         const task = tasksUpdated[i];
    //         if (taskId.id === taskId) {

    //             task.completed = truebreak;

    //         }
    //     }
    //     this.setState({
    //         tasks: tasksUpdated
    //     });
    //         }


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
                            completedTaskFunc={this.completeTask}/>
                        {/* <TaskCount1 taskCount1={this.state.tasks.length} /> */}

        
                    </div> 

                </div>

            </div>

        );
    }
}
export default Container;