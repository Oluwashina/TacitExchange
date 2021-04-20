import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import DataTable from 'react-data-table-component'
import {movies} from '../Dashboard/data'


const AdminTrades = () => {

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

                {/* trades*/}
                 {/* recent Trades */}
                 <div className="mt-5 mb-5">
                         <DataTable
                            title="Trades"
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
 
export default AdminTrades;