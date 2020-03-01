import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';


class TaskList01 extends React.Component {

    deleteTaskPersonal = (taskId) => {
        alert(`You deleted task ${taskId}`);
    }

    completeTaskPersonal = (taskId) => {
        alert(`Do you want to delete ${taskId} from state?`)
    }

    render() {
        return (
            <div className="row col-12">

                {this.props.taskCollectionPersonal.map(
                    (taskItem) => <Task item={taskItem} deleteTaskFuncPersonal={this.props.deleteTaskFuncPersonal} completedTaskFuncPersonal={this.props.completeTaskPersonal} />
                )
                }


            </div>




        );
    }
}
export default TaskList01;
