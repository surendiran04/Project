import React from 'react'
import './App.css';
import { NavLink} from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="sidebar h-full">
      <div className="d-flex mx-4 mt-4 mb-4">
        <img src="https://th.bing.com/th/id/OIP.gyKDFdIHDLAtPkuCY3yIdwHaJJ?rs=1&pid=ImgDetMain"/>
        <div>
          <h4 className="mx-4 mb-2 brand-name mb-2">John Doe</h4>
          <p className="mx-4 brand-name1">johndoe@gmail.com</p>
        </div>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-link"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/"
            >
              <i class="bx bx-home-alt me-3 me-6 "></i>
              <p className="mb-0">Home</p>
            </NavLink>
          </li>
          <li className="li">
          <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-link"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/Search"
            >
            <i class="bx bx-search-alt-2 me-3 me-6"></i>
            <p className="mb-0">Search</p>
            </NavLink>
          </li>
          <li>
          <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-link"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/Notes"
            >
          <i class='bx bx-notepad me-3 me-6'></i>
           <p className="mb-0">Notes</p> 
           </NavLink>
            </li>
          <li>
          <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-link"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/Task"
            >
          <i class='bx bx-task me-3 me-6' ></i>
            <p className="mb-0">Task</p>
            </NavLink>
            </li>
          <li>
          <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-link"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/Archive"
            >
          <i class='bx bx-archive-in me-3 me-6' ></i>
            <p className="mb-0">Archive</p>
            </NavLink>
            </li>
          <li>
          <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-link"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/Bin"
            >
          <i class='bx bx-trash me-3 me-6'></i>
            <p className="mb-0">Bin</p>
            </NavLink>
            </li>
        </ul>
      </div>
    </div>
 
  )
}

