import React from 'react';
import Charts from '../../../components/Charts/Chart';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './dashboard.css'
import DataTable from 'react-data-table-component'
import {movies} from "./data";


const AdminDashboard = () => {
    
const columns = [
    {
      name: "Trade Id",
      selector: "id",
      sortable: true
    },
    {
      name: "Card Name",
      selector: "title",
      sortable: true
    },
    {
      name: "Amount Due",
      selector: "amount",
      sortable: true,
    },
    {
        name: "Date Initiated",
        selector: "date",
        sortable: true,
    },
    {
        name: "Status",
        selector: "status",
        sortable: true,
      },
      {
        name: 'Actions',
        button: true,
        cell: row => <button
        className="btn btn-sm btn-view"
        onClick={() => {
            ViewTransact(row.id)}}
         >View</button>,
      }

  ];

  const ViewTransact = (id) =>{
      alert(id)
  }

    return ( 
        <>
            <Sidebar />
            <div className="main">
                <div className="contain">

                    {/* overview count */}
                    <div className="row mt-3">

                            <div className="col-lg-3">
                                {/* cc */}
                                <div className="dash-div">

                                    <div>
                                        <p className="mb-0" style={{color: '#0898D7'}}>Pending Trades</p>
                                    </div>

                                    <div className="mt-4">
                                        <h5 style={{color: '#dc3545'}}>50</h5>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3">
                                {/* trades count */}
                                <div className="dash-div">

                                    <div>
                                        <p className="mb-0" style={{color: '#0898D7'}}>Completed Trades</p>
                                    </div>

                                    <div className="mt-4">
                                        <h5 style={{color: '#13AA52'}}>50,000</h5>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                {/* Users */}
                            <div className="dash-div">

                                <div>
                                    <p className="mb-0" style={{color: '#0898D7'}}>Users</p>
                                </div>

                                <div className="mt-4">
                                    <h5>50</h5>
                                </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                    {/* hhh */}
                          <div className="dash-div">

                                <div>
                                    <p className="mb-0" style={{color: '#0898D7'}}>Trades</p>
                                </div>

                                <div className="mt-4">
                                    <h5>50,000</h5>
                                </div>

                                </div>
                            </div>
                    </div>

                    {/* end of overview count */}

                                
                    {/* charts display */}

                    <div className="mt-5">
                        <Charts />
                    </div>

                    {/* recent Trades */}
                    <div className="mt-5 mb-5">
                         <DataTable
                            title="Pending Trades"
                            columns={columns}
                            data={movies}
                            pagination
                            persistTableHead
                            progressPending={false}
                            />
                    </div>
                    
                </div>
            </div>
        </>
     );
}
 
export default AdminDashboard;