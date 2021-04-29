import React, {useState, useEffect} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import {Link, useHistory} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import {connect} from 'react-redux'
import { ActivateUser, getUserTradeHistory, SuspendUser } from '../../../store/actions/admin';
import Moment from 'react-moment'

const UsersDetails = (props) => {

    const {user, id, HandleActivate, HandleSuspend, susloader, getUserTrade, userTrade, userRole} = props

    const [date, setDate] = useState("today");

    const history = useHistory()

    useEffect(() => {
        const values = {
            time: date,
            id: id,
          };
        getUserTrade(values);
      }, [getUserTrade, id, date]);

   const [filterData] = useState([
        { id: 1, name: 'tab-1', text: 'Today', value: 'today' },
        { id: 2, name: 'tab-2', text: 'This Week', value: 'week' },
        { id: 3, name: 'tab-3', text: 'Month', value: 'month' },
        { id: 4, name: 'tab-4', text: 'Year', value: 'year' },
    ]);

    const tabs = filterData.map((item)=>
    <div key={item.id}
        className={date === item.value ? 'filter-tab active-filter' : 'filter-tab'}
        onClick={() => DayToggle(item.value)}
        >   
        <p className="mb-0">{item.text}</p>
    </div>
    )


    const DayToggle = (val) =>{
        setDate(val)
        var values;
        switch (val) {
        case 1:
            values = {
                time: "today",
                id: id,
            };
            getUserTrade(values);
            break;
        case 2:
            values = {
                time: "week",
                id: id,
            };
            getUserTrade(values);
            break;
        case 3:
            values = {
                time: "month",
                id: id,
            };
            getUserTrade(values);
            break;
        case 4:
            values = {
                time: "year",
                id: id,
            };
            getUserTrade(values);
            break;
        default:
            break;
        }
    }

    const Suspend = (id) =>{
        const values = {
            userId: id
        }
        if(user.isEnabled){
            HandleSuspend(values)
        }
        else{
           HandleActivate(values)
        }
        
      }



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
          sortable: true,
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
             className={getStatusColor(row.paymentStatus)}
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
        history.push("/admin/usertrade/"+id)
      }

      const getStatusColor = (val) =>{
        let result;
        switch(val){
          case 'Pending':
            result = 'defaultDiv'
            break;
          case 'Completed':
            result = 'success-color'
            break;
         case 'Declined':
           result = 'declined-color'
           break;
          default:
           break;
        }
        return result;
      }
      
       // get default account details
    const account =  
        user.accountDetails.length ? user.accountDetails.find(pro => pro.isDefault === true) : ""



    return ( 
        <>
            <Sidebar />
            <div className="main">
                <div className="content">

                    {/* back button */}
                    <div className="container mt-3">

                        <Link to="/admin/users" style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center', fontSize: '18px'}}>
                            <span><i className="mdi mdi-arrow-left"></i> Go Back</span>
                        </Link>

                        <hr />

                        {/* user layout */}
                        <div className="mt-4 mb-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', alignItems: 'center',}}>
                                <div style={{width: '50px', height: '50px', borderRadius: '50%', background: '#FFDDD2', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <span style={{color:'#CB644E', fontWeight: 'bold'}}>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</span>
                                </div>
                                <div className="ml-3 mt-1">
                                    <h5>{user.firstName} {user.lastName}</h5>
                                </div>
                            </div>

                            <div>
                                <button 
                                type="submit"
                                disabled={susloader || userRole === 'SubAdmin'}
                                className={ user.isEnabled ? 'btn btn-suspend' : 'btn btn-active'}
                                onClick={() => Suspend(id)}
                                >
                                    {user.isEnabled ? (
                                        "Suspend"
                                    ) : (
                                            "Restore"
                                 )}
                                </button>
                            </div>
                        </div>

                        {/* ---- */}
                        <hr />

                        {/* users info layout */}
                        <div className="row mt-4 mb-4">
                            <div className="col-lg-7">
                                {/* general information */}
                                <div>
                                    <h6 style={{fontWeight: 'bold'}}>General Information</h6>
                                </div>

                                {/* info details */}
                                <div className="row mt-4">
                                    <div className="col-lg-6">
                                        <p className="mb-0" >First Name</p>
                                        <p className="mt-1" style={{color: '#898D93'}}>{user.firstName}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Last Name</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{user.lastName}</p>
                                    </div>
                                </div>

                                <div className="row mt-lg-3">
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Email Address</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{user.email}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Phone Number</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{user.phoneNumber}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-5 mt-lg-0 mt-4">
                                {/* bank information */}
                                <div>
                                    <h6 style={{fontWeight: 'bold'}}>Account Details</h6>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Bank Name</p>
                                        <p className="mt-1" style={{color: '#898D93'}}>{account.bankName ? account.bankName : "Not Updated yet"}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Account Number</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{account.accountNumber ? account.accountNumber : "Not Updated yet"}</p>
                                    </div>
                                </div>

                                <div className="row mt-lg-3 mt-3">
                                    <div className="col-lg-12">
                                        <p className="mb-0" >Account Name</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{account.accountName ? account.accountName : "Not Updated Yet"}</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </div>

                        <hr />

                         {/* filters layout */}
                         <div className="mt-5" style={{display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                                <div className="chart-filter">
                                        {tabs}
                                </div>
                            </div>
                        {/* Trade History for that user */}
                        <div className="mt-4 mb-5">
                         <DataTable
                            title="Trade History"
                            columns={columns}
                            data={userTrade}
                            pagination
                            persistTableHead
                            progressPending={false}
                            />
                    </div>
                        
                    </div>


                </div>
            </div>

        </>
     );
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const users = state.admin.users
    const user = users.find(val => val.id === id);
    return{
        user: user,
        id: id,
        susloader: state.admin.susloader,
        userTrade: state.admin.userTrade,
        userRole: state.auth.role
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        HandleSuspend: (value) => dispatch(SuspendUser(value)),
        HandleActivate: (value) => dispatch(ActivateUser(value)),
        getUserTrade : (values) => dispatch(getUserTradeHistory(values)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UsersDetails);