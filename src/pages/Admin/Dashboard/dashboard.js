import React, {useEffect, useState} from 'react';
import Charts from '../../../components/Charts/Chart';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './dashboard.css'
import DataTable from 'react-data-table-component'
import {connect} from 'react-redux'
import {getDashboardCount, getTrades} from '../../../store/actions/admin'
import Moment from 'react-moment'

const AdminDashboard = (props) => {

    const {count, getCount, getTrade, trade} = props

    const [status] = useState('Pending')

   useEffect(() => {
        getCount();
        getTrade(status)
      }, [getCount, getTrade, status]);
    
const columns = [
    {
      name: "Trade Id",
      selector: "id",
      sortable: true
    },
    {
      name: "Card Name",
      selector: "cardName",
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
             <Moment format="MMMM Do, YYYY">
              {row.createdAt}
             </Moment>
            
      </span>
    },
    {
        name: "Status",
        selector: "paymentStatus",
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
                                        <h5 style={{color: '#dc3545'}}>{count.countPendingTrade ? count.countPendingTrade : 0}</h5>
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
                                        <h5 style={{color: '#13AA52'}}>{count.countCompletedTrade ? count.countCompletedTrade : 0}</h5>
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
                                    <h5>{count.countAllExchanger ? count.countAllExchanger : 0}</h5>
                                </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                    {/* hhh */}
                          <div className="dash-div">

                                <div>
                                    <p className="mb-0" style={{color: '#0898D7'}}>Total Outflow</p>
                                </div>

                                <div className="mt-4">
                                    <h5 style={{fontWeight: 500}}>NGN {count.sumTotalTrade ? count.sumTotalTrade : 0.00}</h5>
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
                            data={trade}
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

const mapStateToProps = (state) =>{
    return{
        count: state.admin.count,
        trade: state.admin.Trades
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
     getCount : () => dispatch(getDashboardCount()),
     getTrade : (status) => dispatch(getTrades(status)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);