import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import TaskHeader from './TaskHeader';
import TaskList01 from './TaskList01';
import uuidv4 from 'uuid/v4'
import axios from 'axios';


class Container extends React.Component {

    state = {
        tasks: [
        ]
    };

    componentDidMount = () => {
        //Fetch tasks from API
        axios.get('https://s3rgj603ke.execute-api.eu-west-2.amazonaws.com/dev/task')
            .then((response) => {
                //handle success
                this.setState({
                    tasks: response.data.tasks
                })
            })
            .catch((error) => {
                //handle error
                console.error(error);
            });
    }


    //Tasks List
    // state = {
    //     tasks: [
    //         {
    //             id: uuidv4(),
    //             category: "Personal",
    //             description: "Complete TR homework",
    //             priority: 1,
    //             goaldate: "19/03/20",
    //             completed: false
    //         },

    //         {
    //             id: uuidv4(),
    //             category: "Personal",
    //             description: "Renew Driving Licence",
    //             priority: 1,
    //             goaldate: "16/02/20",
    //             completed: false
    //         },

    //         {
    //             id: uuidv4(),
    //             category: "Personal",
    //             description: "Book theatre tickets",
    //             priority: 2,
    //             goaldate: "29/02/20",
    //             completed: false
    //         },

    //         {
    //             id: uuidv4(),
    //             category: "Work",
    //             description: "Prepare check-in presentation",
    //             priority: 1,
    //             goaldate: "05/03/20",
    //             completed: false
    //         },

    //         {
    //             id: uuidv4(),
    //             category: "Work",
    //             description: "Read E-commerce book",
    //             priority: 3,
    //             goaldate: "14/02/20",
    //             completed: false
    //         },

    //         {
    //             id: uuidv4(),
    //             category: "Work",
    //             description: "Gain feedback from team",
    //             priority: 2,
    //             goaldate: "21/02/20",
    //             completed: false
    //         }

    //     ]
    // }

    //Task List functions

    deleteTask = (taskId) => {

        const tasks = this.state.tasks;

        axios.delete('https://s3rgj603ke.execute-api.eu-west-2.amazonaws.com/dev/task/{taskId}')
            .then((response) => {


                const updatedTasks = tasks.filter(item => item.taskId !== taskId);

                this.setState({
                    tasks: updatedTasks
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };


    addTask = (taskDescription, taskCategory, taskPriority, taskgoalDate) => {


        const taskToAdd = {

            category: taskCategory,
            description: taskDescription,
            priority: taskPriority,
            goalDate: taskgoalDate,
            completed: false
        };

        axios.post('https://s3rgj603ke.execute-api.eu-west-2.amazonaws.com/dev/task', taskToAdd)
            .then((response) => {
                taskToAdd.taskId = response.data.tasks.taskId;

                console.log(taskToAdd);
                //Get current list of tasks from state
                const currentTasks = this.state.tasks;

                //Add the 'taskToAdd' to the array of tasks in state
                currentTasks.push(taskToAdd);

                //Update the state
                this.setState({
                    tasks: currentTasks
                });
            })
            .catch((error) => {
                //handle error
                console.error(error);
            });
    };

        //Find the task that needs to be updated
        //     const tasksBeingUpdated = this.state.tasks;
        //     for (let i = 0; i < tasksBeingUpdated.length; i++) {
        //         const task = tasksBeingUpdated[i];
        //         if (task.taskId === taskId) {

        //             //Update a property of identified task
        //             task.completed = true;
        //             break;

        //         }
        //     }

        //     //Update the state to reflect changes made to this task
        //     this.setState({
        //         tasks: tasksBeingUpdated
        //     });
        // };

    
        completeTask = (taskId) => {
        axios.put('https://s3rgj603ke.execute-api.eu-west-2.amazonaws.com/dev/task/{taskId}')
            .then((response) => {

                const tasksBeingUpdated = this.state.tasks;
                for (let i = 0; i < tasksBeingUpdated.length; i++) {
                    const task = tasksBeingUpdated[i];
                    if (task.taskId === taskId) {

                        task.completed = true;
                        break;

                    }
                }

                axios.get('https://s3rgj603ke.execute-api.eu-west-2.amazonaws.com/dev/task')
                .then((response) => {

                this.setState({
                    tasks: tasksBeingUpdated
                });
            })
            .catch((error) => {
                console.error(error);
            });
    });
}




    render() {

        return (

            <div className="Container">
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