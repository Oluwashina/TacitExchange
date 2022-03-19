import React, {useEffect, useState} from 'react';
import UserSideBar from '../../../components/UserSideBar/Sidebar';
import './dashboard.css'
import {Link, useHistory} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import {connect} from 'react-redux'
import { getUserDashboardCount, getUserTransaction } from '../../../store/actions/dashboard';
import Moment from 'react-moment'
import Eye from '../../../assets/images/eye.svg'
import briefcase from '../../../assets/images/briefcase.svg'
import eye_fill from '../../../assets/images/ri-eye-fill.svg'
import airtime_icon from '../../../assets/images/icons/plane-tickets.svg'
import electricity_icon from '../../../assets/images/icons/electricity.svg'
import tv_icon from '../../../assets/images/icons/tv-screen.svg'
import buydata_icon from '../../../assets/images/icons/shopping-cart.svg'

const UserDashboard = (props) => {

    const {countFetch, count, getTransaction, transaction,walletBalance} = props

    const [status] = useState("Pending")

    const [walletShow, setWalletShow] = useState(false)

    const history = useHistory()

    const handleToFixed = (val) =>{
        return parseFloat(val).toFixed(2)
    }

    // make call to fetch dashboard count
    useEffect(() => {
        countFetch();
        getTransaction(status)
        document.body.classList.remove('body-hidden');
      }, [countFetch, getTransaction, status]);

      const toggleWalletAmount = () =>{
         setWalletShow(walletShow ? false : true );
      }

    
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
        history.push('/transaction/'+id)
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
        <UserSideBar title="Overview" />
        <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                <div className='row mt-5'>

                     {/* wallet balance */}
                     <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="walletBalanceCard">

                            <div className='wallet_div'>
                                <div>
                                    <img src={briefcase} alt="brief" className='img-fluid' />
                                </div>
                                <div>
                                   <p className='wallet_title'>Wallet Balance</p> 
                                </div>                                
                             </div>  

                              <div className='wallet_div'>
                               
                                <div>
                                   <h4 className='wallet_amount'>NGN {walletShow ? handleToFixed(walletBalance) : "XXXX.XX"}</h4> 
                                </div>   

                                 <div>
                                    <img src={eye_fill} onClick={toggleWalletAmount} alt="brief" className='img-fluid eye' />
                                </div>                             
                             </div> 

                             <div className='mt-4'>
                                <Link to="/withdraw" className='btn btn_dash'>
                                    Withdraw Funds
                                </Link>
                             </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="walletBalanceCard">

                            <div>
                                <h4 className='trade_val'>{count.countPendingTrade ? count.countPendingTrade : 0}</h4> 
                            </div>                                
                            
                            <div>
                                   <h5 className='trade_title'>Pending Trade(s)</h5> 
                             </div> 

                             <div className='mt-4'>
                                <Link to="/trades" className='btn btn_dash'>
                                    View Trades
                                </Link>
                             </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                         
                         <Link to="/tradecard">
                            <div className='tradeCard'>
                            </div>
                        </Link>

                     </div>


                </div>

                <div>
                    <h6 className='services_title mt-5'>Our Services</h6>

                    <div className='row mt-4'>

                        <div className='col-lg-3 mb-4 mb-lg-0'>

                            <Link to="/dashboard/buyairtime"  className='service_card' style={{textDecoration: 'none'}}>
                                <div className='service_icon'>
                                    <img src={airtime_icon} alt="airtime" />
                                </div>
                                <div>
                                    <h6 className='service_title'>Buy Airtime</h6>
                                    <p className='service_subtitle'>Tap to top up airtime</p>
                                </div>
                            </Link>

                        </div>

                        <div className='col-lg-3 mb-4 mb-lg-0'>

                        <Link to="/dashboard/buyelectricity" className='service_card' style={{textDecoration: 'none'}}>
                            <div className='service_icon electricity'>
                                <img src={electricity_icon} alt="airtime" />
                            </div>
                            <div>
                                <h6 className='service_title'>Buy Electricity</h6>
                                <p className='service_subtitle'>Easily pay your electric bills</p>
                            </div>
                        </Link>

                        </div>

                        <div className='col-lg-3 mb-4 mb-lg-0'>

                        <Link to="/dashboard/tvsubscription" style={{textDecoration: 'none'}} className='service_card'>
                            <div className='service_icon tv'>
                                <img src={tv_icon} alt="airtime" />
                            </div>
                            <div>
                                <h6 className='service_title'>TV Subscription</h6>
                                <p className='service_subtitle'>Tap to pay your tv subscriptions</p>
                            </div>
                        </Link>

                        </div>

                        <div className='col-lg-3'>

                        <Link to="/dashboard/buydata" style={{textDecoration: 'none'}} className='service_card'>
                            <div className='service_icon buydata'>
                                <img src={buydata_icon} alt="airtime" />
                            </div>
                            <div>
                                <h6 className='service_title'>Buy Data</h6>
                                <p className='service_subtitle'>Tap to buy data without stress</p>
                            </div>
                        </Link>

                        </div>

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

                          <div className="dashTrade mt-lg-5 mt-4 mb-5">

                          <div>
                              <p className="mb-0 text-center" style={{fontWeight: 'bold'}}>You currently don't have any pending <br /> trades.</p>
                          </div>
      
                          <div className="mt-3">
                              <Link to="/trade" className="btn btn-blueTacit">Start Trade</Link>
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
        transaction: state.dashboard.Transaction,
        walletBalance: state.auth.walletBalance
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        countFetch: () => dispatch(getUserDashboardCount()),
        getTransaction: (status) => dispatch(getUserTransaction(status)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);