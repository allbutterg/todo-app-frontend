import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';


class TaskList01 extends React.Component {

    deleteTask = (taskId) => {
        alert(`You deleted task ${taskId}`);
    }

    completeTask = (taskId) => {
        alert(`Do you want to delete ${taskId} from state?`)
    }

    render() {
        return (
            <div className="row col-12">

                {this.props.taskCollection.map(
                    (taskItem) => <Task item={taskItem} deleteTaskFunc={this.props.deleteTaskFunc} completedTaskFunc={this.props.completeTask} />
                )
                }


            </div>

        );
    }
}
export default TaskList01;
