import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import ImageZoom from 'react-medium-image-zoom'
import { ApproveTradePayment, DeclineTradePayment } from '../../../store/actions/admin';


const UserTradeDetails = (props) => {

    const {trade, id, ApproveTrade, DeclineTrade, approveloader, declineloader} = props
    const history = useHistory()
    // mapping images 
    const imageLayout = trade.imageUrl.map((item, index) => (
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
        var confirm_flag = window.confirm("You are about to approve this payment?");

        if(confirm_flag){
            ApproveTrade(id)

            setTimeout(() => {
                history.push('/admin/trades')
              }, 2000);
        }
      }

      const Decline = (id) =>{
        var confirm_flag = window.confirm("You are about to decline this payment?");

        if(confirm_flag){
            DeclineTrade(id)

            setTimeout(() => {
                history.push('/admin/trades')
              }, 2000);
        }
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

    return ( 
        <>
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

                           {
                               trade.paymentStatus === 'Pending'
                               ?
                               <div>
                                <button 
                                type="submit" 
                                className='btn btn-active mt-lg-0 mt-3'
                                disabled={approveloader}
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
                            :
                            ""
                           } 
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
                                        <p className="mt-1" style={{color: '#898D93'}}>{trade.cardCategory}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Subcategory</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{trade.cardName}</p>
                                    </div>
                                </div>

                                <div className="row mt-lg-3 mt-3">
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Amount</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>$ {trade.cardAmount ? trade.cardAmount : 0.00}</p>
                                    </div>
                                    <div className="col-lg-6 mt-lg-0 mt-3">
                                        <p className="mb-0" >Amount to get</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>NGN {trade.amount}</p>
                                    </div>
                                </div>

                                <div className="row mt-lg-4 mt-3">
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Comment/Notes</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{trade.comment}</p>
                                    </div>
                                    <div className="col-lg-6 mt-lg-0 mt-3">
                                        <p className="mb-0" >Status</p>
                                        <p className="mt-1 mb-0" 
                                        style={{
                                            color: getColor(trade.paymentStatus)
                                            
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
                                        <p className="mt-1" style={{color: '#898D93'}}>{trade.userDetails.accountDetails.bankName ? trade.userDetails.accountDetails.bankName : 'GTB'}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="mb-0" >Account Number</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{trade.userDetails.accountDetails.accountNumber ? trade.userDetails.accountDetails.accountNumber : '0010020002'}</p>
                                    </div>
                                </div>

                                <div className="row mt-lg-3 mt-3">
                                    <div className="col-lg-12">
                                        <p className="mb-0" >Account Name</p>
                                        <p className="mt-1 mb-0" style={{color: '#898D93'}}>{trade.userDetails.accountDetails.accountName ? trade.userDetails.accountDetails.accountName : 'Bola dea'}</p>
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
        ApproveTrade: (id) => dispatch(ApproveTradePayment(id)),
        DeclineTrade: (id) => dispatch(DeclineTradePayment(id))
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(UserTradeDetails);