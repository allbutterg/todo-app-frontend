import React from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends React.Component {
    render() {
        return (

          <div className="box row col-lg-5">

            <form id="taskForm">
                <div className="form-group row">
                    
                    <label for="newTask" className="col-lg-5 col-form-label-lg">New Task:</label>

                    <div className="col-lg-7">
                        <input type="text" className="form-control" name="newTask" id="newTask"
                            placeholder="What's next to do?" required></input>
                    </div>
                </div>
</form>
</div>
       
                   

                    );
                  }
                }

  export default Form;