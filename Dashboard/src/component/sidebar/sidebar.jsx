import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

  
  return (
    <div className="sidebar h-full py-3 d-flex flex-column justify-content-between g-0">
      <div className="row  branding-container">
        <h5 className="text-center brand-name mt-4" >Medico Sales</h5>
      </div>
      <div className="row nav-links ">
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
              to="./dashboard"
            >
            <i className="bx bxs-grid-alt me-3"></i>
            <p >Dashboard</p>
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
              to="./labtest"
            >
            <i className="bx bx-test-tube me-3"></i>
            <p>Labtest</p>
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
              to="./appointment"
            >
            <i className="bx bxs-calendar-plus me-3"></i>
            <p>Appointment</p>
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
              to="./medicine"
            >
            <i className="bx bx-shopping-bag me-3"></i>
            <p>Medicine Order</p>
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
              to="./message"
            >
            <i className="bx bx-chat me-3"></i>
            <p>Message</p>
            </NavLink>
          </li>
          <li >
          <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-link"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              to="./payment"
            >
            <i className="bx bx-wallet me-3"></i>
            <p>Payment</p>
            </NavLink>
          </li>
          <li >
          <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-link"
                  : isActive
                  ? "nav-link active"
                  : "nav-link"
              }
              to="./setting"
            >
            <i className="bx bx-cog me-3"></i>
            <p>Settings</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer">
        <div className="d-flex align-items-center justify-content-start nav-links">
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
              to="./help"
            >
          <i className="bx bx-help-circle me-3 mx-2"></i>
          <p>Help</p>
          </NavLink>
        
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
