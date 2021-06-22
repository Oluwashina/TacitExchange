import React, {useEffect, useState} from 'react';
import UserSideBar from '../../../components/UserSideBar/Sidebar';
import './dashboard.css'
import OtherTrade from '../../../assets/images/OthersTrade.svg'
import {Link, useHistory} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import {connect} from 'react-redux'
import { getUserDashboardCount, getUserTransaction } from '../../../store/actions/dashboard';
import Moment from 'react-moment'
import Eye from '../../../assets/images/eye.svg'

const UserDashboard = (props) => {

    const {countFetch, count, getTransaction, transaction} = props

    const [status] = useState("Pending")

    const history = useHistory()

    // make call to fetch dashboard count
    useEffect(() => {
        countFetch();
        getTransaction(status)
        document.body.classList.remove('body-hidden');
      }, [countFetch, getTransaction, status]);

    
    const columns = [
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
            name: "Trade Status",
            cell: row => <span
             className={row.tradeStatus === 'Pending' ? "defaultDiv" : "success-color"}
             > 
            {`${row.tradeStatus}`}
            </span>
          },
          {
            name: "Payment Status",
            cell: row => <span
             className={getColor(row.paymentStatus)}
             > 
            {`${row.paymentStatus}`}
            </span>
          },
          {
            name: "",
            cell: row => 
            <div style={{cursor: 'pointer'}} onClick={() => handleView(row.id)}>
                <img src={Eye}
                 alt="edit" width="20" height="20"  /> 
            </div>
            
        },
      ];

      const handleView = (id) =>{
        history.push('/user/transaction/'+id)
      }

    //   get badge colors for payment
      const getColor = (status) =>{
        switch(status){
            case 'Not Initiated':
                return 'notinitStatus'
            case 'Processing':
                return 'processingStatus'
            case 'Successful':
                return 'successStatus'
            case 'Failed':
                return 'failedStatus'
            
            default:
                break;
        }
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
                                    <h4 style={{fontWeight: 800, color: '#0898D7'}}>{count.countCompletedTrade ? count.countCompletedTrade : 0}</h4>
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
                                    <h4 style={{fontWeight: 800, color: '#2C3A50'}}>{count.countPendingTrade ? count.countPendingTrade : 0}</h4>
                                </div>

                                <div className="mt-1">
                                    <h6 style={{color: '#2C3A50'}}>Pending Trades</h6>
                                </div>        

                            </div>

                     </div>

                     {/* start trade */}
                     <div className="col-lg-4 mb-4">
                         
                         <Link to="/user/trade">
                            <div style={{height: '191.33px', position: 'relative'}}>
                                <img src={OtherTrade} className="img-fluid" alt="trade" />
                            </div>
                            </Link>

                     </div>
                </div>

                {/* Recent Trades Layout or table */}
                {
                    transaction.length ? 

                            <div className="mt-4 mb-5">
                            <DataTable
                            title="Pending Transactions"
                            columns={columns}
                            data={transaction}
                            pagination
                            persistTableHead
                            progressPending={false}
                            />
                          </div>

                          :

                          <div className="dashTrade mt-lg-0 mt-4 mb-5">

                          <div>
                              <p className="mb-0 text-center" style={{fontWeight: 'bold'}}>You currently don't have any pending <br /> transactions.</p>
                          </div>
      
                          <div className="mt-3">
                              <Link to="/user/trade" className="btn btn-blueTacit">Start Trade</Link>
                          </div>
      
                      </div>

                }
               

              


            </div>
        </div>

        </>
     );
}

const mapStateToProps = (state) =>{
    return{
        count: state.dashboard.count,
        transaction: state.dashboard.Transaction
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        countFetch: () => dispatch(getUserDashboardCount()),
        getTransaction: (status) => dispatch(getUserTransaction(status)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);