import React, { useState } from "react";
import { useDispatch } from "react-redux";

function MyTask({ item, i }) {
  const [show, setShow] = useState("none");
  const [newitem, setNewitem] = useState()

  const dispatch = useDispatch();

  // Create a function called it deleteTask
  const deleteTask = () => {
    if (window.confirm("Are you sure you want to delete task?")) {
      dispatch({ type: "DELETE_TASK", payload: item });
    }
  };

  // Create a function called editTask
  const editTask = () => {
    setShow('block')
  };

  // Create a function called finalEdit
  const finalEdit = ()=>{
    dispatch({type: "EDIT_TASK", payload: {olditem: item, newitem: newitem}})
    setShow('none')
  }

  return (
    <div className="row">
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">{i + 1}</th>
            <td className="col-md-8">{item}</td>
            <td className="col-md-2">
              <button
                className="btn btn-primary"
                onClick={() => editTask(item)}
              >
                Edit
              </button>
            </td>
            <td className="col-md-2">
              <button
                className="btn btn-danger"
                onClick={() => deleteTask(item)}
              >
                Delete
              </button>
            </td>
          </tr>
          <tr style={{display: show}}>
            <td>
                <input type='text' value={newitem} onChange= {(e)=>setNewitem(e.target.value)} placeholder="Enter task"/>
                <button className="btn btn-success" onClick={()=>finalEdit(item)}>Final Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyTask;
