import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';


class TaskList02 extends React.Component {

    deleteTask = (taskId) => {
        alert(`You deleted task ${taskId}`);
    }

    
    render() {
        return (
                <div className="row col-12">
                   
                    {this.props.taskCollection.map(
                            (taskItem)=><Task item={taskItem} deleteTaskFunc={this.props.deleteTaskFunc} />
                        )
                    }
                  
                </div>
            
            

        );
    }
}
export default TaskList02;
