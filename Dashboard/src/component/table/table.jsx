import React from 'react';
import './table.css';

export default function Table() {
  return (
    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className="selector">
                                    <input className="form-check-input" type="checkbox" value="" id=""/>
                                </th>
                                <th scope="col">Invoive ID</th>
                                <th scope="col">Date</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Payable Amount</th>
                                <th scope="col">Paid Amount</th>
                                <th scope="col">Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row" className="selector">
                                    <input className="form-check-input" type="checkbox" value="" id=""/>
                                </td>
                                <td>#AHGA68</td>
                                <td>29/10/2023</td>
                                <td>Watson</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td scope="row" className="selector">
                                    <input className="form-check-input" type="checkbox" value="" id=""/>
                                </td>
                                <td>#AHGA69</td>
                                <td>31/10/2023</td>
                                <td>Maddy</td>
                                <td>2000</td>
                                <td>1000</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td scope="row" className="selector">
                                    <input className="form-check-input" type="checkbox" value="" id=""/>
                                </td>
                                <td>#AHGA70</td>
                                <td>5/10/2023</td>
                                <td>Brad</td>
                                <td>3000</td>
                                <td>500</td>
                                <td>2500</td>
                            </tr>
                            <tr>
                                <td scope="row" className="selector">
                                    <input className="form-check-input" type="checkbox" value="" id=""/>
                                </td>
                                <td>#AHGA71</td>
                                <td>9/11/2023</td>
                                <td>Britto</td>
                                <td>4000</td>
                                <td>3000</td>
                                <td>1000</td>
                            </tr>
                        </tbody>
                    </table>
  );
}
