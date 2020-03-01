import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import TaskHeader from './TaskHeader';
import TaskList01 from './TaskList01';
import TaskList02 from './TaskList02';

class Container extends React.Component {

    //Personal Tasks
    state = {
        tasksPersonal: [
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

        ],

        tasksWork: [
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
                priority: 3,
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

    //Personal Task List functions

    deleteTaskPersonal = (taskId) => {

        const updatedTasksPersonal = this.state.tasksPersonal.filter(item => item.id !== taskId);

        this.setState({
            tasksPersonal: updatedTasksPersonal
        });

    }


    addTaskPersonal = (taskDescription) => {


        const taskToAddPersonal = { 
            
            id: 10,
            category: "Personal",
            description: taskDescription,
            priority: 1,
            goaldate: "19/03/20",
            completed: false
        };


        const currentTasksPersonal = this.state.tasksPersonal;

        currentTasksPersonal.push(taskToAddPersonal);

        this.setState({
            tasksPersonal: currentTasksPersonal
        });
    }

    completeTaskPersonal = (taskId) => {
        alert(`Do you want to delete ${taskId} from state?`)
    }

    // Work Task List functions

    deleteTaskWork = (taskId) => {

        const updatedTasksWork = this.state.tasksWork.filter(item => item.id !== taskId);

        this.setState({
            tasksWork: updatedTasksWork
        });

    }

    render() {
        return (

            <div className="container">
                <br></br>
                <Header />
                <br></br>
                <Form addTaskFuncPersonal={this.addTaskPersonal} />
                <br></br>
                <div className="row col-lg-12 flex-wrap">

                    <div className="box row col-lg-8">
                        <div className="col-5 taskTitle">
                            Personal
                            </div>
                        <TaskHeader />
                        <TaskList01
                            taskCollectionPersonal={this.state.tasksPersonal}
                            deleteTaskFuncPersonal={this.deleteTaskPersonal}
                            completedTaskFuncPersonal={this.completeTaskPersonal} />
                        {/* <TaskCount1 taskCount1={this.state.tasks.length} /> */}

                  

                    {/* <div className="box row col-lg-8">
                        <div className="col-5 taskTitle">
                            Work
                </div>
                        <TaskHeader />
                        <TaskList02 taskCollectionWork={this.state.tasksWork} deleteTaskFuncWork={this.deleteTaskWork} />
                        {/* <TaskCount2 taskCount2={this.state.tasks.length} /> */}
                    </div> 

                </div>

            </div>

        );
    }
}
export default Container;