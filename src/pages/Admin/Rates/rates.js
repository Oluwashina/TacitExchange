import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import DataTable from 'react-data-table-component'
import {movies} from '../Dashboard/data'
import {Link} from 'react-router-dom'

const AdminRates = () => {

    const columns = [
        {
          name: "Category",
          selector: "id",
          sortable: true
        },
        {
          name: "SubCategory",
          selector: "title",
          sortable: true
        },
        {
          name: "Minimum Amount",
          cell: row => <span> 
                  {`NGN ${row.amount}`}
          </span>
        },
        {
            name: "Maximum Amount",
            cell: row => <span> 
                    {`NGN ${row.amount}`}
            </span>
          },
        {
            name: "Date Added",
            selector: 'date'
        },
        {
            name: "Naira Rate",
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

                    {/* add giftcard button */}
                <div className="mt-4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/admin/add/rates" className="btn btn-pinkTacit">Add New Giftcard</Link>
                </div>

                {/* rates table */}
                <div className="mt-4 mb-5">
                         <DataTable
                            title="Rates Table"
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
 
export default AdminRates;