import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskBox from './TaskBox';

class Form extends React.Component {


  addTask = () => {
    this.props.addTaskFunc("Book train ticket");
  }


  taskDescriptionChanged = (event) => {
    this.setState({
   taskDescription: event.target.value
    }); 
  }


  render() {
    return (

      <div className="box row col-lg-5">

        <form id="taskForm">
          <div className="form-group row">

            <label for="newTask" className="col-lg-5 col-form-label-lg">New Task:</label>

            <div className="col-lg-7">
              <input type="text" className="form-control" name="newTask" id="newTask"
                placeholder="What's next to do?" required onChange={this.taskDescriptionChanged} ></input>
            </div>
          </div>

          <div className="form-group row">

            <label for="categoryTask" className="col-lg-5 col-form-label-lg">Category:</label>
            <div className="col-lg-7">
              <input type="text" class="form-control" name="categoryTask" id="categoryTask"
                placeholder="Work? Personal?"></input>
            </div>
          </div>


          <div className="form-group row">

            <label for="priority" className="col-lg-5 col-form-label-lg">Priority:</label>
            <div className="col-lg-3">
              <select className="form-control" name="priority" id="priority">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div className="form-group row">

            <label for="completeBy" className="col-lg-5 col-form-label-lg">Complete By:</label>
            <div className="col-lg-7">
              <input type="date" className="form-control" name="completeBy" id="completeBy"></input>

            </div>
          </div>

          <div className="form-group row">

            <div className="col-lg-5">
              <button type="submit" className="form-control" onClick={this.addTask}>Add</button>
            </div>

          </div>


        </form>
      </div>

    );

   
  }

 
}

export default Form;