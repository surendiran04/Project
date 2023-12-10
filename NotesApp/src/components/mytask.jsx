import React from "react";
import {  useSelector } from "react-redux";
import { getTaskById } from "../Redux/TaskReducer";
import "../index.css"


export default function Mytask() {

  
  const { tasks = [], task={} } = useSelector((state) => state.tasksReducer);

  console.log(tasks)
  

  function handleEditClick(title = "") {
    const matchingData = dispatcher(getTaskById(title));
    console.log(matchingData);
  }

  return (
    <div>
      <div className="title-header mt-3 mx-4">
      <i class='bx bx-check-circle mt-1'></i>
      <h3 className="title mx-2">My Tasks</h3>
      </div>  
      <div className="mx-3 bg p-3">
      {tasks.map((data, index) => (
          <div className="d-flex task-card mt-3" key={index}>
          <i class='bx bx-circle mx-5 mt-5' ></i>
          <div>
          <h4 className="title mx-5 mt-1">{data.title}</h4>
          <p className="text mx-3">{data.description}</p>
          <p className="mx-3">Recently Added</p>
          </div>
          <i class='bx bx-star i'></i>
          </div>
        ))}
      </div>
    </div>
  )
}


