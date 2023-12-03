import React from 'react'
import InputComponent from "./elements/Inputs/Input";
import Table from "./component/table/table";

export default function Mainbar() {
  return (
    <div className="col-10 p-5">
                <div className="row mb-5 d-flex mx-4">
                    <input type="text" id="search" className="form-control" style={{width:"600px",height:"45px"}} placeholder="search"/>
                    <div className="bell">
                    <i className='bx bx-bell'></i>
                    </div>
                </div>
                <div className="row mb-5 mx-4">
                  <h3 className='mb-4'>Sales Information</h3>
                    <div className="col-3">        
                            <InputComponent type="text" label="Customer"id="customerName" placeholder="Enter customer name"/>
                    </div>
                    <div className="col-3">
                            <InputComponent type="email" label="Invoice ID" id="invoiceId" placeholder="Enter Invoice Id"/>
                    </div>
                    <div className="col-3">  
                            <InputComponent type="date" label="Start Date" id="startDate" placeholder="Enter Start Date"/>
                    </div>
                    <div className="col-3">
                            <InputComponent type="date" label="End Date" id="endDate" placeholder="Enter End Date"/> 
                    </div>
                </div>
                <div className="row px-2 mx-4">
                   <Table />
                </div>
            </div>
  )
}
