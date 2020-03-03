import React from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends React.Component {

  state = {
    taskDescription: "Enter your task..."
  }

  addTask = () => {
    this.props.addTaskFunc(this.state.taskDescription);
  }


  taskDescriptionChanged = (event) => {
    this.setState({
      taskDescription: event.target.value
    });
  }


  render() {
    return (

      <div className="box row col-lg-5">


        <div className="form-group row taskForm">

          <>
            <label for="newTask" className="col-lg-5 col-form-label-lg">New Task:</label>


            <div className="col-lg-6">
              <input type="text" className="form-control" name="newTask" id="newTask"
                placeholder="What's next to do?" onChange={this.taskDescriptionChanged}></input>
            </div>
          </>



          <>
            <label for="categoryTask" className="col-lg-5 col-form-label-lg">Category:</label>
            <div className="col-lg-6">
              <input type="text" class="form-control" name="categoryTask" id="categoryTask"
                placeholder="Work? Personal?"></input>
            </div>
          </>



          <>
            <label for="priority" className="col-lg-5 col-form-label-lg">Priority:</label>
            <div className="col-lg-2">
              <select className="form-control" name="priority" id="priority">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col-lg-1"></div>

          </>


          <>
            <label for="completeBy" className="col-lg-5 col-form-label-lg">Complete By:</label>
            <div className="col-lg-6">
              <input type="date" className="form-control" name="completeBy" id="completeBy"></input>

            </div>
          </>


          <>
            <div className="col-lg-4 my-3">
              <button type="submit" className="form-control" onClick={this.addTask}>Add</button>
            </div>

          </>

        </div>
      </div>







    );


  }


}

export default Form;