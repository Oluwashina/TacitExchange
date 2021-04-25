import React, {useState, useEffect} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import DataTable from 'react-data-table-component'
import {connect} from 'react-redux'
import { getAllAdmins, SuspendAdmin, ActivateAdmin } from '../../../store/actions/admin';
import Moment from 'react-moment'


const ViewAdmin = (props) => {

    const {adminFetch, admins, HandleActivate, HandleSuspend, susloader, userRole} = props

    const [role] = useState("SubAdmin")

      // make call to fetch all users
      useEffect(() => {
        adminFetch(role);
      }, [adminFetch, role]);

    const columns = [
      {
        name: "First Name",
        selector: "firstName",
        sortable: true
      },
      {
        name: "Last Name",
        selector: "lastName",
        sortable: true
      },
      {
        name: "Email Address",
        selector: "email",
        sortable: true,
      },
      {
        name: "Date Registered",
        cell: row => <span>
          <Moment format="MMMM Do, YYYY">
          {row.createdAt}
          </Moment>
      </span>
    },
      {
          name: "Phone Number",
          selector: "phoneNumber",
          sortable: true,
        },
        {
          name: "Status",
          cell: row => <span>
            {row.isEnabled ? (
                          "Active"
                          ) : (
                        "Inactive"
                      )}
          </span>
        },
          {
            name: 'Actions',
            button: true,
            cell: row => <button
            disabled={susloader || userRole === 'SubAdmin'}
            className="btn btn-sm btn-view"
            onClick={() => {
                Suspend(row.id, row.isEnabled)}}
             >
                  {row.isEnabled ? (
                                    "Suspend"
                                ) : (
                                        "Restore"
                     )}
             </button>
          }
      ];

      
      const Suspend = (id, status) =>{
        const values = {
            userId: id
        }
        if(status){
            HandleSuspend(values)
        }
        else{
          HandleActivate(values)
      }
    }

    const [val, setVal] = useState(2);

    const [tabData] = useState([
        { id: 1, name: "tab-1", text: "New", value: "1" },
        { id: 2, name: "tab-2", text: "View All", value: "2" },
        { id: 3, name: "tab-5", text: "Profile", value: "3" },
      ]);

      const tabs = tabData.map((item) => (
        <div
          key={item.id}
          className={val === item.id ? "filter-tab active-filter" : "filter-tab"}
          onClick={() => TabToggle(item.id)}
        >
          <p className="mb-0">{item.text}</p>
        </div>
      ));

      const TabToggle = (id) => {
        // route to all admin
        if (id === 1) {
            setVal(id)
          props.history.push("/admin/admin");
        }
        // route to all admin
        if (id === 2) {
            setVal(id)
        //   props.history.push("/admin/view");
        }
        // route to admin profile
        if (id === 3) {
          props.history.push("/admin/profile");
        setVal(id)
        }
      };


    return ( 
        <>  
        <Sidebar/>
        <div className="main">
            <div className="content">

            <div
                className="mt-4"
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                 <div className="chart-filter">{tabs}</div>
             </div>

             {/* table to view all admins and susoend button */}
             <div className="mt-5 mb-5">
                         <DataTable
                            title="Administrators"
                            columns={columns}
                            data={admins}
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
    admins: state.admin.admins,
    susloader: state.admin.susloader,
    userRole: state.auth.role
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    adminFetch: (val) => dispatch(getAllAdmins(val)),
    HandleSuspend: (value) => dispatch(SuspendAdmin(value)),
    HandleActivate: (value) => dispatch(ActivateAdmin(value)),
  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(ViewAdmin);