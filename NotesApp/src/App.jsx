import React from 'react';
import { Routes,Route, BrowserRouter,} from "react-router-dom";
import Sidebar from "./sidebar"
import Search from "./pages/Search"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import Task from "./pages/Task"
import Archive from "./pages/Archive"
import Bin from "./pages/Bin"

function App() {
  return (
 <BrowserRouter>
   <div className="d-flex">
    <Sidebar/>
    <div className="content">
 <Routes>
  <Route index element={<Home/>}/>
  <Route path="/Search" element={<Search/>}/>
  <Route path="/Notes" element={<Notes/>}/>
  <Route path="/Task" element={<Task/>}/>
  <Route path="/Archive" element={<Archive/>}/>
  <Route path="/Bin" element={<Bin/>}/>
 </Routes>
 </div>
 </div>

 </BrowserRouter>

 
  )
}

export default App
