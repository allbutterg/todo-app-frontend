import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskWork from './TaskWork';


class TaskList02 extends React.Component {

    deleteTaskWork = (taskId) => {
        alert(`You deleted task ${taskId}`);
    }

    
    render() {
        return (
                <div className="row col-12">
                   
                    {this.props.taskCollectionWork.map(
                            (taskItem)=><TaskWork item={taskItem} deleteTaskFuncWork={this.props.deleteTaskFuncWork} />
                        )
                    }
                  
                </div>
            
            

        );
    }
}
export default TaskList02;
