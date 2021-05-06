import React, {useEffect} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import DataTable from 'react-data-table-component'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import { deleteGiftCards, getGiftCards } from '../../../store/actions/admin';
import Moment from 'react-moment'

const AdminRates = (props) => {

  const {cards, getRates, userRole, deleteRates} = props

  const history = useHistory()

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
            name: "Naira Rate",
            selector: "nairarate",
            sortable: true,
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
            name: 'Actions',
            button: true,
            cell: row => 
            <button
            className="btn btn-sm btn-view"
            onClick={() => {
                ViewTransact(row.id)}}
             >View</button>,
          },
          {
            name: '',
            button: true,
            cell: row => 
            <button
            disabled={userRole === 'SubAdmin'}
            className="btn btn-sm btn-view"
            onClick={() => {
                DeleteTransact(row.id, row.categoryId)}}
             >Delete</button>,
          }
      ];

      const ViewTransact = (id) =>{

        history.push('/admin/edit/rate/'+id)
    }

    const addButton = () =>{
      history.push('/admin/add/rates')
    }

    const DeleteTransact = (id, categoryId) =>{
    
      var confirm_flag = window.confirm("You are about to delete this giftcard?");

        if(confirm_flag){
           deleteRates(id, categoryId)

           setTimeout(() => {
             getRates()
           }, 1000);
        }
    }


    return ( 
        <>
        <Sidebar />
        <div className="main">
            <div className="contain">

                    {/* add giftcard button */}
                <div className="mt-4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button 
                    onClick={addButton}
                    disabled={userRole === 'SubAdmin'}
                     className="btn btn-pinkTacit">Add New Giftcard</button>
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
    cards: state.admin.giftcards,
    userRole: state.auth.role
  } 
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getRates : (status) => dispatch(getGiftCards(status)),
    deleteRates : (id, categoryId) => dispatch(deleteGiftCards(id, categoryId)),
  }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(AdminRates);