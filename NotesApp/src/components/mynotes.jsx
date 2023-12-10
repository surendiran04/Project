import React from 'react'
import {useSelector} from "react-redux";
import { getNoteById } from "../Redux/NoteReducer";
import "../index.css"



export default function Mynotes() {
  const { notes = [], note = {} } = useSelector((state) => state.notesReducer);
  
  function handleEditClick(title = "") {
    const matchingData = dispatcher(getNoteById(title));
    console.log(matchingData);
  }
 
  return (
    <div>  
      <div className="title-header mt-3 mx-4">
      <i class='bx bx-notepad mt-1'></i>
      <h3 className="title mx-2">My Notes</h3>
      </div>  
      <div className="d-flex">
       {notes.map((data, index) => (
          <div className="note-card mt-3" key={index}>
          <div className="title-header mt-3 mx-1">
          <h4 className="title mx-2">{data.title}</h4>
          <i class='bx bx-pencil mx-2 title'></i>
          <i class='bx bx-trash title' ></i>
          </div>
          <p className="text mx-2">{data.description}</p>
           </div>
          
        ))}
      </div>
    </div>
  )
}
