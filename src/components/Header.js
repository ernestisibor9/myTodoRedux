import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Header() {

    const [task, setTask] = useState('')

  const taskObj = useSelector((store) => store.taskReducer);
  const dispatch = useDispatch()

    // Function called addTask
    const addTask = ()=>{
       dispatch({type: "ADD_TASK", payload:task })
    }

  return (
    <div className="container">
      <h1>The number of tasks = {taskObj.tasks.length}</h1>
      <div className="row">
        <div className="col-md-4">
          <div class="mb-3">
            <input type="text" value={task} onChange= {(e)=>setTask(e.target.value)} class="form-control" placeholder="Enter task" />
          </div>
          <button className="btn btn-primary" onClick={addTask}>ADD TASK</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
