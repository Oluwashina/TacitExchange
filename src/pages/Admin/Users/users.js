import React, {useEffect, useState} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import DataTable from 'react-data-table-component'
import {connect} from 'react-redux'
import { getAllUsers } from '../../../store/actions/admin';
import Moment from 'react-moment'


const AdminUsers = (props) => {

  const {history, usersFetch, users} = props

  const [role] = useState("Exchanger")

  // make call to fetch all users
  useEffect(() => {
    usersFetch(role);
  }, [usersFetch, role]);

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
            className="btn btn-sm btn-view"
            onClick={() => {
                ViewTransact(row.id)}}
             >View</button>,
          }
      ];

      const ViewTransact = (id) =>{
        history.push("/admin/user/"+id)
    }

    return ( 
        <>
        <Sidebar />
        <div className="main">
            <div className="contain">
                
               
                 {/* Users layout */}
                 <div className="mt-5 mb-5">
                         <DataTable
                            title="Users"
                            columns={columns}
                            data={users}
                            pagination
                            persistTableHead
                            progressPending={false}
                            />
                    </div>
                    {/* end of users layout */}
            </div>
        </div>

        </>
     );
}

const mapStateToProps = (state) =>{
  return{
    users: state.admin.users
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    usersFetch: (val) => dispatch(getAllUsers(val)),
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);