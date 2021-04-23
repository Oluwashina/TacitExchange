import React from 'react';
import UserSideBar from '../../../components/UserSideBar/Sidebar';
import './dashboard.css'
import OtherTrade from '../../../assets/images/OthersTrade.svg'
import {Link} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import {movies} from '../../Admin/Dashboard/data'

const UserDashboard = () => {

    
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
          cell: row => <span> 
              {`NGN ${row.amount}`}
           </span>
        },
        {
            name: "Date Initiated",
            cell: row => <span>
              
              {row.date}
              
          </span>
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
        <UserSideBar />
        <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                {/* trade overview */}
                <div className="row mt-5">

                    {/* completed trades */}
                    <div className="col-lg-4 mb-4">
                        <div className="TradeLayout">

                                <div>
                                    <h4 style={{fontWeight: 800, color: '#0898D7'}}>20</h4>
                                </div>

                                <div className="mt-1">
                                    <h6 style={{color: '#0898D7'}}>Completed Trades</h6>
                                </div>
                                

                        </div>

                    </div>

                    {/* pending payments */}
                    <div className="col-lg-4 mb-4">
                        <div className="TradeLayout">

                                <div>
                                    <h4 style={{fontWeight: 800, color: '#2C3A50'}}>5</h4>
                                </div>

                                <div className="mt-1">
                                    <h6 style={{color: '#2C3A50'}}>Pending Payments</h6>
                                </div>        

                            </div>

                     </div>

                     {/* start trade */}
                     <div className="col-lg-4 mb-4">
                         
                         <Link to="/user/trade">
                            <div style={{height: '191.33px', position: 'relative'}}>
                                <img src={OtherTrade} className="img-fluid" alt="trade" />

                                <div style={{position: 'absolute', bottom: '40px', left: '100px'}}>
                                    <h5 style={{color: '#fff', fontWeight: 'bold'}}>Trade Cards</h5>
                                </div>
                            </div>
                            </Link>

                     </div>
                </div>

                {/* Recent Trades Layout or table */}
                <div className="dashTrade mt-lg-0 mt-4 mb-5">

                    <div>
                        <p className="mb-0 text-center" style={{fontWeight: 'bold'}}>You currently don't have any pending <br /> transactions.</p>
                    </div>

                    <div className="mt-3">
                        <Link to="/user/trade" className="btn btn-blueTacit">Start Trade</Link>
                    </div>

                </div>

                {/* trade history */}
                <div className="mt-4 mb-5">
                         <DataTable
                            title="Pending Transactions"
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
 
export default UserDashboard;