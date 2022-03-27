import React, {useState, useEffect} from 'react';
import Sidebar from '../../../components/UserSideBar/Sidebar';
import {connect} from 'react-redux'
import { getUserTransaction } from '../../../store/actions/dashboard';
import {Link, useHistory} from 'react-router-dom'
import Moment from 'react-moment'
import DataTable from 'react-data-table-component'
import Eye from '../../../assets/images/eye.svg'

const UserTransactions = (props) => {

    const {getTransaction, transaction} = props

    const [initialTab, setTab] = useState(1);
    const [tradeName, setTradeName] = useState('Pending')

      const history = useHistory()


    const [tabData] = useState([
        { id: 1, name: "tab-1", text: "Pending Trades"},
        { id: 2, name: "tab-2", text: "Completed Trades" },
        { id: 3, name: "tab-3", text: "Declined Trades" },
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

      const handleToggle = (id) => {
        let value
        switch(id){
          case 1:
            setTab(id)
            setTradeName('Pending') 
            value = 'Pending'
            getTransaction(value) 
            break;
          case 2:
            setTab(id);
            setTradeName('Completed')
            value = 'Completed'
            getTransaction(value)
            break;
          case 3:
            setTab(id);
            setTradeName('Declined')
             value = 'Declined'
            getTransaction(value)
            break;
          default:
            break;
        }

    }

     // make call to fetch Transactions pending
     useEffect(() => {
      var value = 'Pending'
        getTransaction(value)
      }, [getTransaction]); 

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
            name: "Trade Status",
            cell: row => <span
            className={getStatusColor(row.tradeStatus)}
             > 
            {`${row.tradeStatus}`}
            </span>
        },
        {
            name: "",
            cell: row => 
            <div>
                <img src={Eye}
                  onClick={() => handleView(row.id)}
                 alt="edit" width="20" height="20" style={{cursor: 'pointer'}} /> 
            </div>
            
        },
      ];

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

      
      const handleView = (id) =>{
          history.push('/trade/'+id)
      }

      
    return ( 
        <>
            <Sidebar title="Trades" />
            <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                     {/* trades tabs select */}
                  <div
                    className="mt-4" style={{display: 'flex', justifyContent: 'flex-start'}}>
                    {tabLayout}
                  </div>

                   {/* transactions */}
                {
                    transaction.length ? 

                            <div className="mt-4 mb-5 wallet_table">
                            <DataTable
                            // title={tradeName}
                            columns={columns}
                            data={transaction}
                            pagination
                            persistTableHead
                            progressPending={false}
                            />
                          </div>

                          :

                          <div className="dashTrade mt-lg-4 mt-4 mb-5">

                          <div>
                              <p className="mb-0 text-center" style={{fontWeight: 'bold'}}>You currently don't have any {tradeName.toLowerCase()} <br /> trade(s).</p>
                          </div>
      
                          <div className="mt-3">
                              <Link to="/start-trade" className="btn btn-blueTacit">Start Trade</Link>
                          </div>
      
                      </div>

                }
               


               
            </div>
             </div>

            </>
        );
    }

    const mapStateToProps = (state) =>{
        return{
            transaction: state.dashboard.Transaction
        }
    }


    const mapDispatchToProps = (dispatch) =>{
        return{
            getTransaction: (status) => dispatch(getUserTransaction(status))
        }
    }
    
export default connect(mapStateToProps, mapDispatchToProps)(UserTransactions);