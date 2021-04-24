import React, {useEffect} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import DataTable from 'react-data-table-component'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getGiftCards } from '../../../store/actions/admin';
import Moment from 'react-moment'

const AdminRates = (props) => {

  const {cards, getRates} = props

  // fetch all pending trades on load of page
  useEffect(() =>{
    getRates()
  }, [getRates])

    const columns = [
        {
          name: "Category",
          selector: "categoryname",
          sortable: true
        },
        {
          name: "SubCategory",
          selector: "subcategoryname",
          sortable: true
        },
        {
          name: "Minimum Amount",
          cell: row => <span> 
                  {`${row.minimumAmount}`}
          </span>
        },
        {
            name: "Maximum Amount",
            cell: row => <span> 
                    {`${row.maximumAmount}`}
            </span>
          },
        {
            name: "Date Added",
            cell: row => <span>
            <Moment format="MMMM Do, YYYY">
            {row.createdAt}
            </Moment>
        </span>
        },
        {
            name: "Naira Rate",
            selector: "nairarate",
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
                            data={cards}
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
    cards: state.admin.giftcards
  } 
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getRates : (status) => dispatch(getGiftCards(status)),
  }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(AdminRates);