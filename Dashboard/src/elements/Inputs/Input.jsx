import React from "react";
import "./Input.css/";

export default function InputComponent(props){
    return (
          <div className="mb-3">      
          <label for={props.id} className ="form-label">
          {props.label}</label>
          <input type={props.type} className ="form-control"
           id={props.id} placeholder={props.placeholder} onChange={(e)=>{console.log(e.target.id,e.target.value)}}/>             
         </div>
    );
}