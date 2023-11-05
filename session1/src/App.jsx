import React, {useState,useEffect} from "react";
import "./App.css";
import ButtonC from "./components/Buttons/Button";

function App(){
  const [counter,setCounter] = useState(0);

  useEffect(()=>{console.log(`counter value changed to ${counter}`)},[counter]);

  return(
    <div className="App">
      <h1>{counter}</h1>
      <ButtonC name="+" onclick={()=> setCounter(counter+1)}/>
      <ButtonC name="-" onclick={()=> setCounter(counter-1)}/>
      <ButtonC name="Reset" onclick={()=> setCounter(0)}/>
    </div>
  )
}
export default App;