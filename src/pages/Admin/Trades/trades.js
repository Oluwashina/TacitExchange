import React, {useState, useEffect} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import DataTable from 'react-data-table-component'
import './trades.css'
import {connect} from 'react-redux'
import { getTrades } from '../../../store/actions/admin';
import Moment from 'react-moment'


const AdminTrades = (props) => {

   const {getTrade, trade, history} = props

    const [initialTab, setTab] = useState(1);
    const [tradeName, setTradeName] = useState('Pending')

      const [tabData] = useState([
        { id: 1, name: "tab-1", text: "Pending Trades"},
        { id: 2, name: "tab-2", text: "Completed Trades" },
      ]);

      // tab Layout
      const tabLayout = tabData.map((item) => (
        <div 
        key={item.id}
          className={initialTab === item.id ? "activeOrderTab tabSpace" : "orderTab tabSpace"}
          onClick={() => handleToggle(item.id)}
            >
          <p className="mb-0 text-center">{item.text}</p>
        </div>
      ));

      // fetch all pending trades on load of page
      useEffect(() =>{
        getTrade(tradeName)
      }, [getTrade, tradeName])

      // switch and make call for trade based on active tab
      const handleToggle = (id) => {
        if(id === 1){
          setTab(id)
          setTradeName('Pending') 
          const value = 'Pending'
          getTrade(value)       
        }
        else if(id === 2){
          setTab(id);
          setTradeName('Completed')
          const value = 'Completed'
          getTrade(value)
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
          selector: "cardName",
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
            name: "Status",
            selector: "paymentStatus",
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
        history.push("/admin/trade/"+id)
      }
  

    return ( 
        <>
        <Sidebar />
        <div className="main">
            <div className="contain">

                 {/* trades tabs select */}
                  <div
                    className="mt-4" style={{display: 'flex', justifyContent: 'flex-start'}}>
                    {tabLayout}
                  </div>

                {/* trades*/}
                 {/* recent Trades */}
                 <div className="mt-5 mb-5">
                         <DataTable
                            title={`${tradeName} Trades`}
                            columns={columns}
                            data={trade}
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
      trade: state.admin.Trades
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getTrade : (status) => dispatch(getTrades(status)),
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminTrades);