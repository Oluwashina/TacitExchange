import React, {useEffect, useState} from 'react';
import Charts from '../../../components/Charts/Chart';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './dashboard.css'
import DataTable from 'react-data-table-component'
import {connect} from 'react-redux'
import CountUp from 'react-countup'
import {getDashboardCount, getDropletBalance, getTrades} from '../../../store/actions/admin'
import Moment from 'react-moment'

const AdminDashboard = (props) => {

    const {count, getCount, getTrade, trade, history, getDroplet, droplet} = props

    const [status] = useState('Pending')

   useEffect(() => {
        getCount();
        getDroplet()
        getTrade(status)
      }, [getCount, getTrade, status, getDroplet]);
    
const columns = [
    {
      name: "Card Category",
      cell: row => <span
          > 
        { row['subCategoryDetails']['categoryname']  }
         </span>,
          sortable: true
    },
    {
      name: "Card Name",
      cell: row => <span
      > 
    { row['subCategoryDetails']['subcategoryname']  }
     </span>,
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
        cell: row => <span
             className={row.paymentStatus === 'Pending' ? "defaultDiv" : "success-color"}
             > 
            {`${row.paymentStatus}`}
            </span>
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
      history.push("/admin/trade/"+id)
  }

    return ( 
        <>
            <Sidebar />
            <div className="main">
                <div className="contain">

                    {/* overview count */}
                    <div className="row mt-3">

                    <div className="col-lg-3">
                                    {/* hhh */}
                          <div className="dash-div">

                                <div>
                                    <p className="mb-0" style={{color: '#0898D7'}}>Total Outflow (NGN)</p>
                                </div>

                                <div className="mt-4">
                                    <h5 style={{fontWeight: 500}}>
                                            <CountUp
                                                start={0}
                                                end= {count.sumTotalTrade ? count.sumTotalTrade : 0.00}
                                                duration={2.5}
                                                separator=","
                                            />
                                     </h5>
                            
                                </div>

                                </div>
                    </div>

                    {/*  */}
                    <div className="col-lg-9">
                        <div className="row">
                            
                            
                        <div className="col-lg-3 mt-lg-0 mt-3">
                                {/* cc */}
                                <div className="dash-div">

                                    <div>
                                        <p className="mb-0" style={{color: '#0898D7'}}>Pending Trades</p>
                                    </div>

                                    <div className="mt-4">
                                        <h5 style={{color: '#dc3545'}}>
                                            <CountUp
                                                start={0}
                                                end= {count.countPendingTrade ? count.countPendingTrade : 0}
                                                duration={2.5}
                                                separator=","
                                            />
                                            </h5>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3 mt-lg-0 mt-3">
                                {/* trades count */}
                                <div className="dash-div">

                                    <div>
                                        <p className="mb-0" style={{color: '#0898D7'}}>Completed Trades</p>
                                    </div>

                                    <div className="mt-4">
                                        <h5 style={{color: '#13AA52'}}>
                                        <CountUp
                                            start={0}
                                            end= {count.countCompletedTrade ? count.countCompletedTrade : 0}
                                            duration={2.5}
                                            separator=","
                                        />
                                           
                                       </h5>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3 mt-lg-0 mt-3">
                                {/* Users */}
                            <div className="dash-div">

                                <div>
                                    <p className="mb-0" style={{color: '#0898D7'}}>Users</p>
                                </div>

                                <div className="mt-4">
                                    <h5>
                                    <CountUp
                                            start={0}
                                            end= {count.countAllExchanger ? count.countAllExchanger : 0}
                                            duration={2.5}
                                            separator=","
                                        />
                                       
                                        </h5>
                                </div>

                                </div>
                            </div>

                            <div className="col-lg-3 mt-lg-0 mt-3">
                                {/* Droplet Balance/Usage */}
                            <div className="dash-div">

                                <div>
                                    <p className="mb-0" style={{color: '#0898D7'}}>Droplet Usage</p>
                                </div>

                                <div className="mt-4">
                                    <h5>
                                        ${droplet.month_to_date_balance ? droplet.month_to_date_balance : "0.00"}
                                        </h5>
                                </div>

                                </div>
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
        trade: state.admin.Trades,
        droplet: state.admin.droplet
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
     getCount : () => dispatch(getDashboardCount()),
     getDroplet: () => dispatch(getDropletBalance()),
     getTrade : (status) => dispatch(getTrades(status)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);