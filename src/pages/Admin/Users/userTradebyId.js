import React,{useRef, useState} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import ImageZoom from 'react-medium-image-zoom'
import { ApproveTradePayment, DeclineTradePayment } from '../../../store/actions/admin';
import Modal from 'react-bootstrap/Modal'
import accountCircle from '../../../assets/images/accountCircle.svg'
import closeIcon from '../../../assets/images/closeIcon.svg'


const UserTradeDetails = (props) => {

    const {trade, id, ApproveTrade, DeclineTrade, approveloader, declineloader} = props
    const history = useHistory()
    const ref = useRef()

    const [editShow, setEditShow] = useState(false);

    const handleEditClose = () => setEditShow(false);

    const handleEditShow = () => {
        setEditShow(true);
    }

    // mapping images 
    const imageLayout = trade.imageUrl.filter(el => el !== "").map((item, index) => (
        <div key={index} className="col-lg-3 mb-4">
            <ImageZoom
                image={{
                src: item,
                alt: 'cards',
                className: 'card-image',
                
                }}  
                zoomImage={{
                src: item,
                alt: 'cards'
                }}
            />
         </div>
      ));

      const Approve = (id) =>{
        handleEditShow()
      }

      const RetryPayment = () =>{
        handleEditShow()
    }

      const Decline = (id) =>{
        var confirm_flag = window.confirm("You are about to decline this payment?");

        if(confirm_flag){
            DeclineTrade(id)

            setTimeout(() => {
                history.push('/admin/trades')
              }, 3000);
        }
      }

     
      const Transfer = () =>{
        const res = {
          account_bank: account.bankCode,
          account_number: account.accountNumber,
          amount : trade.amount,
          narration: "Giftcard Payment from Tacit Exchange",
          currency: "NGN",
          debit_currency: "NGN"
        }

        console.log(res)


        ApproveTrade(res, id)

      setTimeout(() => {
              history.push('/admin/trades')
       }, 3000);
    }

      const getColor = (status) =>{
        switch(status){
            case 'Pending':
                return '#ff0000'
            case 'Completed':
                return '#00B327'
            case 'Declined':
                return '#ff0000'
            default:
                break;
        }
    }

    
    const getPayColor = (status) =>{
        switch(status){
            case 'Failed':
                return '#ff0000'
            case 'Not Initiated':
                return '#0898D7'
            case 'Successful':
                return '#00B327'
            case 'Processing':
                return '#FEC400'
            default:
                break;
        }
    }

    

    // approve and decline layout show based on payment status
    const PayLayout = (status, tradeStatus) =>{
        switch(status){
            case 'Not Initiated':
               return tradeStatus === "Declined" ?
                <div>

                </div>      
                :
                <div>
                <button 
                type="submit" 
                className='btn btn-active mt-lg-0 mt-3'
                onClick={() => {
                    Approve(id)}}
                >
                    Approve
                </button>
                <button 
                type="submit" 
                disabled={declineloader}
                className='btn btn-suspend ml-lg-3 mt-lg-0 mt-3'
                onClick={() => {
                    Decline(id)}}
                >
                    Decline
                </button>
            </div>
            
            case 'Procesing':
                return(
                    <div>

                    </div>
                )
            case 'Failed':
                return(
                    <div>
                    <button 
                    type="submit" 
                    className='btn btn-active mt-lg-0 mt-3'
                    onClick={() => {
                        RetryPayment(id)}}
                    >
                        Retry Payment
                    </button>
                    <button 
                    type="submit" 
                    disabled={declineloader}
                    className='btn btn-suspend ml-lg-3 mt-lg-0 mt-3'
                    onClick={() => {
                        Decline(id)}}
                    >
                        Decline
                    </button>
                </div>
                )
            case 'Successful':
                return(
                    <div>
                        
                    </div>
                )
            default:
                return(
                    <div>

                    </div>
                )
        }
    }

     // get default account details  
     const account =  
     trade.userDetails.accountDetails.length ? trade.userDetails.accountDetails.find(pro => pro.isDefault === true) : ""


    return ( 
        <>
           {/* modal for details */}
      <Modal show={editShow}
            ref={ref}
            {...props}
            backdrop="static"
         onHide={handleEditClose}>

              <Modal.Header >
             <div onClick={handleEditClose} style={{position: 'absolute', right: '35px', top: '20px', cursor: 'pointer'}}>
                <img src={closeIcon} alt="close" width="40" height="40" />
            </div>
             </Modal.Header>

            {/*container */}
            <div className="d-none d-md-block" style={{position: 'absolute', left: '70px', top: '0px'}}>
                    <img alt="login" src={accountCircle} width="350" height="140" />
             </div>
            

            <div className="text-center contain-head mt-4 mt-lg-5" style={{position: 'relative'}}>
                <h3 className="login-text">Confirm Payment
                </h3>
            </div>

            
            <div className="container modal-contain">
                
                {/* confirm details layout */}
               
                <div className="text-center">
                        <h6 style={{fontWeight: 'bold', lineHeight: '22px'}}>Kindly confirm that the credentials are correct!.</h6>
                 </div>

             {/* account name */}
                 <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p>Account Name:</p>
                    </div>
                    <div>
                        <p>{account.accountName ? account.accountName : ""}</p>
                    </div>
                 </div>

            {/* Account Number */}
                 <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p>Account Number:</p>
                    </div>
                    <div>
                        <p>{account.accountNumber ? account.accountNumber : ""}</p>
                    </div>
                 </div>

                 {/* Bank Name */}
                 <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p>Bank Name:</p>
                    </div>
                    <div>
                        <p>{account.bankName ? account.bankName : ""}</p>
                    </div>
                 </div>

                 {/* bank code */}
                 <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p>Bank Code:</p>
                    </div>
                    <div>
                        <p>{account.bankCode ? account.bankCode : ""}</p>
                    </div>
                 </div>

                 {/* amount */}
                 <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p>Amount:</p>
                    </div>
                    <div>
                        <p>NGN {trade.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ? trade.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</p>
                    </div>
                 </div>


                {/* end of details layout */}

                <div className="text-center mt-4">
                <button 
                type="submit"
                disabled={approveloader}
                onClick={Transfer}
                className="btn btn-blueTacit">Transfer Now</button>
                </div>
             
            </div>
        
      </Modal>
      {/* end of  details modal */}
            <Sidebar />
            <div className="main">
                <div className="contain">

                
                    {/* back button */}
                    <div className="container mt-3 mb-5">

                        <Link to={`/admin/user/${trade.userId}`} style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center', fontSize: '18px'}}>
                            <span><i className="mdi mdi-arrow-left"></i> Go Back</span>
                        </Link>

                        <hr />

                        
                        {/* Card layout */}
                        <div className="mt-4 mb-4 card-head">
                            <div style={{display: 'flex', alignItems: 'center',}}>
                                <div style={{width: '50px', height: '50px', borderRadius: '50%', background: '#FFDDD2', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <span style={{color:'#CB644E', fontWeight: 'bold'}}>{trade.userDetails.firstName ? trade.userDetails.firstName.charAt(0) : 'O'}{trade.userDetails.lastName ? trade.userDetails.lastName.charAt(0) : 'O'}</span>
                                </div>
                                <div className="ml-3 mt-1">
                                    <h5>{trade.userDetails.firstName ? trade.userDetails.firstName : ''} {trade.userDetails.lastName ? trade.userDetails.lastName : ""}</h5>
                                </div>
                            </div>

                            {PayLayout(trade.paymentStatus, trade.tradeStatus)}

                        </div>

                          {/* ---- */}
                          <hr />

                          
                        {/* Card info layout */}
                        <div className="row mt-4 mb-4">
                            <div className="col-lg-7">
                                {/* general information */}
                                <div>
                                    <h6 style={{fontWeight: 'bold'}}>Gift Card Details</h6>
                                </div>

                                {/* Card details */}
                                <div className="row mt-4">
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Category</p>
                                        <p className="mt-1" style={{color: '#898D93'}}>{trade.subCategoryDetails.categoryname ? trade.subCategoryDetails.categoryname : ""}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Subcategory</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{trade.subCategoryDetails.subcategoryname ? trade.subCategoryDetails.subcategoryname : ""}</p>
                                    </div>
                                </div>

                                <div className="row mt-lg-3 mt-3">
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Amount</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>$ {trade.cardAmount ? trade.cardAmount : 0.00}</p>
                                    </div>
                                    <div className="col-lg-6 mt-lg-0 mt-3">
                                        <p className="mb-0" >Amount to get</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>NGN {trade.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                    </div>
                                </div>

                                <div className="row mt-lg-4 mt-3">
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Comment/Notes</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{trade.comment}</p>
                                    </div>
                                    <div className="col-lg-6 mt-lg-0 mt-3">
                                        <p className="mb-0" >Trade Status</p>
                                        <p className="mt-1 mb-0" 
                                        style={{
                                            color: getColor(trade.tradeStatus)
                                            }}
                                        >{trade.tradeStatus}</p>
                                    </div>
                                   
                                </div>

                                
                                <div className="row mt-lg-4 mt-3">
                                   
                                    <div className="col-lg-6 mt-lg-0 mt-3">
                                        <p className="mb-0" >Payment Status</p>
                                        <p className="mt-1 mb-0" 
                                        style={{
                                            color: getPayColor(trade.paymentStatus)
                                            }}
                                        >{trade.paymentStatus}</p>
                                    </div>
                                   
                                </div>

                            </div>

                            <div className="col-lg-5 mt-lg-0 mt-4">
                                {/* bank information */}
                                <div>
                                    <h6 style={{fontWeight: 'bold'}}>Account Details</h6>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Bank Name</p>
                                        <p className="mt-1" style={{color: '#898D93'}}>{account.bankName ? account.bankName : ''}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Account Number</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{account.accountNumber ? account.accountNumber : ''}</p>
                                    </div>
                                </div>

                                <div className="row mt-lg-3 mt-3">
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Account Name</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{account.accountName ? account.accountName : 'Bola dea'}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Bank Code</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{account.bankCode ? account.bankCode : ""}</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </div>

                        <hr />

                        {/*  */}
                        <div className="mt-4 mb-4">
                           <h6 style={{fontWeight: 'bold'}}>Uploaded Cards</h6>
                        </div>

                        {/* cards images */}
                        <div className="row mt-4">
                            {imageLayout}
                        </div>

                    </div>


                </div>
            </div>

        </>
     );
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const trades = state.admin.userTrade
    const trade = trades.find(val => val.id === id);
    return{
        trade: trade, 
        id: id,
        approveloader: state.admin.approveloader,
        declineloader: state.admin.declineloader
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        ApproveTrade: (res, id) => dispatch(ApproveTradePayment(res, id)),
        DeclineTrade: (id) => dispatch(DeclineTradePayment(id))
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(UserTradeDetails);