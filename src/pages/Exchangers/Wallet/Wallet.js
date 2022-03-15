import React,{useState} from 'react';
import Sidebar from '../../../components/UserSideBar/Sidebar';
import './Wallet.css'
import briefcase from '../../../assets/images/briefcase.svg'
import eye_fill from '../../../assets/images/ri-eye-fill.svg'
import {Link} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import Moment from 'react-moment'
import Eye from '../../../assets/images/eye.svg'
import hamburger from "../../../assets/images/align-left.svg";
import { connect } from 'react-redux';
import Modal from "../../../components/ModalComponents/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Formik } from "formik";
import { filterValidator } from "../../../validationSchema/validator";


const UserWallet = ({walletBalance}) => {


  const [walletShow, setWalletShow] = useState(false)

  const [search, setSearchValue] = useState("");


  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [showModal, setShowModal] = useState(false);

  const [showFilterModal, setFilterModal] = useState(false);

//   const history = useHistory();


  const toggleWalletAmount = () =>{
    setWalletShow(walletShow ? false : true );
 }

 const handleToFixed = (val) =>{
  return parseFloat(val).toFixed(2)
}

const handleChange = (e) => {
  setSearchValue(e.target.value);
};

 const data = [
    {
        id: 1,
        type: 'Credit',
        amount: '1000',
        createdAt : '2021/01/20',
        status: 'Successful'
    },
    {
        id: 2,
        type: 'Debit',
        amount: '12000',
        createdAt : '2021/01/20',
        status: 'Successful'
    },
    {
      id: 3,
      type: 'Debit',
      amount: '12000',
      createdAt : '2021/03/2',
      status: 'Failed'
  },
  {
    id: 4,
    type: 'Debit',
    amount: '12000',
    createdAt : '2021/01/25',
    status: 'Pending'
},
]

const getStatusColor = (val) =>{
    let result;
    switch(val){
      case 'Pending':
        result = 'defaultDiv'
        break;
      case 'Successful':
        result = 'success-color'
        break;
     case 'Failed':
       result = 'declined-color'
       break;
      default:
       break;
    }
    return result;
  }

 const columns = [
   
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
          name: "Date",
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
          name: "Actions",
          cell: row => 
          <div>
              <img src={Eye}
                onClick={() => handleView(row.id)}
               alt="edit" width="20" height="20" style={{cursor: 'pointer'}} /> 
          </div>
          
      },
];

const handleView = (id) =>{
  //  alert(id)
  //  filterDetails(id);
   setShowModal(true);
}

const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const handleSubmit = async (values, setSubmitting) => {
  let res;
  res = {
    from_date: formatDate(startDate),
    to_date: formatDate(endDate),
    status: values.status,
  };
  setFilterModal(false);
  console.log(res)
  // await filterTransact(res);
};



    return ( 
        <>
         <Sidebar title="My Wallet" />
            <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                 {/* dialog for filter transactions */}
          <Modal
            title="Filter"
            show={showFilterModal}
            onClose={() => setFilterModal(false)}
          >
            <div>
              <Formik
                onSubmit={(values, { setSubmitting }) =>
                  handleSubmit(values, setSubmitting)
                }
                validationSchema={filterValidator}
                initialValues={{
                  amount: "",
                  status: "",
                }}
              >
                {({
                  handleChange,
                  isSubmitting,
                  handleSubmit,
                  handleBlur,
                  setFieldValue,
                  values,
                  touched,
                  errors,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* Date*/}
                    <div className="row mt-4">
                      <div className="col-lg-6">
                        <div className="form-group input-container">
                          <label htmlFor="startDate">Start Date</label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="form-control input-style"
                            dateFormat="yyyy-MM-dd"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group input-container">
                          <label htmlFor="startDate">End Date</label>
                          <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            className="form-control input-style"
                            dateFormat="yyyy-MM-dd"
                          />
                        </div>
                      </div>
                    </div>

                    {/* status */}
                    <div className="form-group mt-lg-2 input-container">
                      <label htmlFor="status">Status</label>
                      <select
                        name="status"
                        values={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue=""
                        className="form-control select-style"
                        id="status"
                      >
                        <option value="" disabled>
                          --Select--
                        </option>
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Successful">Successful</option>
                        <option value="Failed">Failed</option>
                      </select>
                      <small style={{ color: "#dc3545" }}>
                        {touched.status && errors.status}
                      </small>
                    </div>

                    <div className="text-center mt-4 ">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-filter"
                        style={{ fontWeight: "normal" }}
                      >
                        Filter
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Modal>
          {/* end of filter dialog */}

          {/* start of modal dialog for transaction details */}
          <Modal
            title="Transaction Details"
            show={showModal}
            onClose={() => setShowModal(false)}
          >
            <div className="row mt-4">
              {/* id and time */}
              <div className="col-lg-6 mb-3">
                <div>
                  <p
                    className="mb-0"
                    style={{ color: "#2C3A50", fontWeight: "bold" }}
                  >
                    Transaction Reference
                  </p>
                  <p
                    className="mb-0 mt-1"
                    style={{ color: "#2C3A50", fontSize: 14 }}
                  >
                    12345
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div>
                  <p
                    className="mb-0"
                    style={{ color: "#2C3A50", fontWeight: "bold" }}
                  >
                    Date
                  </p>
                  <p
                    className="mb-0 mt-1"
                    style={{ color: "#2C3A50", fontSize: 14 }}
                  >
                      Trade Date
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div>
                  <p
                    className="mb-0"
                    style={{ color: "#2C3A50", fontWeight: "bold" }}
                  >
                    Type
                  </p>
                  <p
                    className="mb-0 mt-1"
                    style={{ color: "#2C3A50", fontSize: 14 }}
                  >
                    Credit
                  </p>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div>
                  <p
                    className="mb-0"
                    style={{ color: "#2C3A50", fontWeight: "bold" }}
                  >
                    Amount
                  </p>
                  <p
                    className="mb-0 mt-1"
                    style={{ color: "#2C3A50", fontSize: 14 }}
                  >
                    NGN 1,000
                  </p>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div>
                  <p
                    className="mb-0"
                    style={{ color: "#2C3A50", fontWeight: "bold" }}
                  >
                    Account Number
                  </p>
                  <p
                    className="mb-0 mt-1"
                    style={{ color: "#2C3A50", fontSize: 14 }}
                  >
                    0148800246
                  </p>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div>
                  <p
                    className="mb-0"
                    style={{ color: "#2C3A50", fontWeight: "bold" }}
                  >
                  Bank
                  </p>
                  <p
                    className="mb-0 mt-1"
                    style={{ color: "#2C3A50", fontSize: 14 }}
                  >
                    Guaranty Trust Bank
                  </p>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div>
                  <p
                    className="mb-0"
                    style={{ color: "#2C3A50", fontWeight: "bold" }}
                  >
                    Narration
                  </p>
                  <p
                    className="mb-0 mt-1"
                    style={{ color: "#2C3A50", fontSize: 14 }}
                  >
                    Wallet Credited
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div>
                  <p
                    className="mb-0"
                    style={{ color: "#2C3A50", fontWeight: "bold" }}
                  >
                    Trade Status
                  </p>
                  <div className="mt-2" style={{ display: "flex" }}>
                    <p
                      className={getStatusColor(
                        "Successful"
                      )}
                      style={{ fontSize: 14 }}
                    >
                      Successful
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          {/* end of transactions */}

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
                            <h4 className='wallet_amount'>NGN {walletShow ? handleToFixed(walletBalance) : "XXXX.XX"}</h4> 
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

                      <div className="transaction-filter-container">
                        <div className="transaction-search">
                          <div className="form-group search-container mb-3">
                            <input
                              className="form-control input-style"
                              type="text"
                              placeholder="Search by Amount, Type"
                              id="reference"
                              value={search}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="ml-lg-4 ml-0">
                        <button
                          className="btn filter-div"
                          onClick={() => setFilterModal(true)}
                        >
                          <img
                            src={hamburger}
                            width="20"
                            height="20"
                            alt="hamburger"
                            className="mr-2"
                          />
                          Filter By
                        </button>
                      </div>

                      </div>

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


const mapStateToProps = (state) =>{
  return{
      walletBalance: state.auth.walletBalance
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserWallet);

