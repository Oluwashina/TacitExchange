import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import DataTable from 'react-data-table-component'
import {movies} from '../Dashboard/data'


const AdminUsers = () => {

    const columns = [
        {
          name: "First Name",
          selector: "id",
          sortable: true
        },
        {
          name: "Last Name",
          selector: "title",
          sortable: true
        },
        {
          name: "Email Address",
          selector: "amount",
          sortable: true,
        },
        {
            name: "Date Registered",
            selector: "date",
            sortable: true,
        },
        {
            name: "Phone Number",
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
                
               
                 {/* Users layout */}
                 <div className="mt-5 mb-5">
                         <DataTable
                            title="Users"
                            columns={columns}
                            data={movies}
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
 
export default AdminUsers;