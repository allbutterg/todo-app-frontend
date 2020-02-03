import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';


class TaskList extends React.Component {
    render() {
        return (
                <div className="row col-12">
                   
                    {this.props.taskCollection.map(
                            (taskItem)=><Task item={taskItem} />
                        )
                    }
                  
                </div>
            
            

        );
    }
}
export default TaskList;
