import React,{useState} from 'react';
import Sidebar from '../../../components/UserSideBar/Sidebar';
import './Wallet.css'
import briefcase from '../../../assets/images/briefcase.svg'
import eye_fill from '../../../assets/images/ri-eye-fill.svg'
import {Link} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import Moment from 'react-moment'
import Eye from '../../../assets/images/eye.svg'


const UserWallet = () => {


  const [walletShow, setWalletShow] = useState(false)

//   const history = useHistory();


  const toggleWalletAmount = () =>{
    setWalletShow(walletShow ? false : true );
 }

 const data = [
    {
        id: 1,
        type: 'Credit',
        amount: '1000',
        createdAt : '2021/01/20',
        status: 'Completed'
    },
    {
        id: 2,
        type: 'Deebit',
        amount: '12000',
        createdAt : '2021/01/20',
        status: 'Completed'
    },
]

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

 const columns = [
   
    {
      name: "Transaction ID",
      cell: row => <span
      > 
    { row['id']  }
     </span>,
      sortable: true
    },
      {
        name: "Transaction Type",
        cell: row => <span> 
            {`${row.type}`}
         </span>
      },
      {
        name: "Amount",
        cell: row => <span>
          {`NGN ${row.amount}`}
      </span>
    },
      {
          name: "Date Initiated",
          cell: row => <span
          className={row.tradeStatus}
           > 
          <Moment format="MMMM Do, YYYY">
          {`${row.createdAt}`}
             </Moment>  
          </span>
      },
      {
        name: "Status",
        cell: row => <span
        className={getStatusColor(row.status)}>
          {row.status}
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

const handleView = (id) =>{
   alert(id)
}


    return ( 
        <>
         <Sidebar title="My Wallet" />
            <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                {/*wallet balance  */}
            <div className='row mt-5'>
                <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="walletBalanceCard">
                    <div className='wallet_div'>
                            <div>
                                <img src={briefcase} alt="brief" className='img-fluid' />
                            </div>
                            <div>
                            <p className='wallet_title'>Wallet Balance</p> 
                            </div>                                
                        </div>  

                        <div className='wallet_div'>
                        
                            <div>
                            <h4 className='wallet_amount'>NGN {walletShow ? "2,000.00" : "XXXX.XX"}</h4> 
                            </div>   

                            <div>
                                <img src={eye_fill} onClick={toggleWalletAmount} alt="brief" className='img-fluid eye' />
                            </div>                             
                        </div> 

                        <div className='mt-4'>
                            <Link to="/withdraw" className='btn btn_dash'>
                                Withdraw Funds
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


                    {/* table for transactions on wallet */}
                <div className="mt-4 mb-5 wallet_table">
                        <DataTable
                        title="Wallet Transactions"
                        columns={columns}
                        data={data}
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
 
export default UserWallet;

