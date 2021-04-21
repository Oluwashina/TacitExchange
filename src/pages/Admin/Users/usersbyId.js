import React, {useState} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import {Link} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import {movies} from '../Dashboard/data'
import {connect} from 'react-redux'
import { ActivateUser, SuspendUser } from '../../../store/actions/admin';

const UsersDetails = (props) => {

    const {user, id, HandleActivate, HandleSuspend, susloader} = props

    const [date, setDate] = useState("today");

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


    const DayToggle = (id) =>{
        setDate(id)
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
      ];
  

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
                                disabled={susloader}
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
                                        <p className="mt-1" style={{color: '#898D93'}}>{user.accountDetails.bankName}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Account Number</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{user.accountDetails.accountNumber}</p>
                                    </div>
                                </div>

                                <div className="row mt-lg-3 mt-3">
                                    <div className="col-lg-12">
                                        <p className="mb-0" >Account Name</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{user.accountDetails.accountName}</p>
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
                            data={movies}
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
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        HandleSuspend: (value) => dispatch(SuspendUser(value)),
        HandleActivate: (value) => dispatch(ActivateUser(value)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UsersDetails);