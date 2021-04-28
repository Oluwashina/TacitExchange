import React from 'react';
import Sidebar from '../../../components/UserSideBar/Sidebar';
import './transaction.css'
import SentIcon from '../../../assets/images/sentIcon.svg'
import PendingIcon from '../../../assets/images/pendingIcon.svg'
import completeIcon from '../../../assets/images/completeIcon.svg'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import ImageZoom from 'react-medium-image-zoom'
import Moment from 'react-moment'

const UserTransactionDetails = (props) => {

    const {transaction} = props

    // mapping images 
    const imageLayout = transaction.imageUrl.map((item, index) => (
        <div key={index} className="col-lg-6 mb-4 mb-lg-3">
            <div className="transactImage">
            <ImageZoom
                image={{
                src: item,
                alt: 'giftcards',
                className: 'transactImageSize',
                
                }}  
                zoomImage={{
                src: item,
                alt: 'giftcards'
                }}
            />
            </div>
         </div>
      ));

    return ( 
        <>
        <Sidebar />
        <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        
                        <div className="transactDiv mt-4 mt-lg-5 mb-5">

                            {/* icons for amount sent and stat */}
                            <div className="row">
                                <div className="col-lg-6">

                                    <div className="transactStatus">
                                        <div>
                                            <img src={SentIcon} width="60" height="60" alt="sent" />
                                        </div>
                                        <div className="ml-3 mt-3">
                                            <h6 style={{fontWeight: 'bold'}}>You Sent</h6>
                                            <p>{transaction.cardAmount} USD</p>
                                        </div>
                                    </div>     

                                </div>
                                <div className="col-lg-6 mt-lg-0 mt-3">

                                  <div className="transactStatus">
                                           <div>
                                            <img 
                                            src={transaction.paymentStatus === 'Pending' ? PendingIcon : completeIcon} 
                                            width="60" height="60" alt="pending" />
                                        </div>
                                        <div className="ml-3 mt-3">
                                            <h6 style={{fontWeight: 'bold'}}>
                                                {transaction.paymentStatus === 'Pending' ? "Pending Payment" : "Payment Sent"}
                                                </h6>
                                            <p>{transaction.amount} Naira</p>
                                        </div>
                                    </div>  

                                </div>
                            </div>

                            {/* transaction Details */}
                            <div className="row mt-5">
                                <div className="col-lg-5">

                                    {/* transaction details */}
                                    <div className="">
                                        <h6 className="mb-0" style={{fontWeight: 'bold'}}>Transaction Id</h6>
                                        <p className="mb-0 mt-1" style={{fontSize: 14}}>{transaction.id}</p>
                                    </div>

                                    {/* date */}
                                    <div className=" mt-3">
                                        <h6 className="mb-0" style={{fontWeight: 'bold'}}>Date Initiated</h6>
                                        <p className="mb-0 mt-1" style={{fontSize: 14}}>
                                        <Moment format="MMMM Do, YYYY">
                                            {transaction.createdAt}
                                        </Moment></p>
                                    </div>

                                    {/* amount */}
                                    <div className=" mt-3">
                                        <h6 className="mb-0" style={{fontWeight: 'bold'}}>Amount</h6>
                                        <p className="mb-0 mt-1" style={{fontSize: 14}}>{transaction.cardAmount} USD</p>
                                    </div>

                                    {/* amount to recieve */}
                                    <div className=" mt-3">
                                        <h6 className="mb-0" style={{fontWeight: 'bold'}}>
                                           {transaction.paymentStatus === 'Pending' ? "Pending Payment" : "Payment Sent"}
                                            </h6>
                                        <p className="mb-0 mt-1" style={{fontSize: 14}}>{transaction.amount} Naira</p>
                                    </div>

                                    {/* comment */}
                                    <div className=" mt-3">
                                        <h6 className="mb-0" style={{fontWeight: 'bold'}}>Comment</h6>
                                        <p className="mb-0 mt-1" style={{fontSize: 14}}>{transaction.comment}</p>
                                    </div>

                                        {/* account info */}
                                    <div className=" mt-3">
                                        <h6 className="mb-0" style={{fontWeight: 'bold'}}>Payment will be sent to</h6>
                                        <Link to="/user/account" className="mb-0 mt-1" style={{fontSize: 14, color: '#0898D7', textDecoration: 'none'}}>Default Account</Link>
                                    </div>


                                    {/* status */}
                                    <div className=" mt-3">
                                        <h6 className="mb-0" style={{fontWeight: 'bold'}}>Status</h6>
                                        <p className="mb-0 mt-1" style={{fontSize: 14,}}>{transaction.paymentStatus}</p>
                                    </div>

                                    {/* Date completed */}
                                    {
                                        transaction.paymentStatus === 'Pending'
                                        ?
                                        ""
                                        :
                                        <div className=" mt-3">
                                        <h6 className="mb-0" style={{fontWeight: 'bold'}}>Date Completed</h6>
                                        <p className="mb-0 mt-1" style={{fontSize: 14,}}>
                                        <Moment format="MMMM Do, YYYY">
                                            {transaction.updatedAt}
                                        </Moment></p>
                                      </div>
                                    }
                                    

                                    {/* processed by admin */}
                                    <div className=" mt-3">
                                        <h6 className="mb-0" style={{fontWeight: 'bold'}}>
                                        {transaction.paymentStatus === 'Pending' ? "Payment is been processed by" : "Payment was processed by"}</h6>
                                        <p className="mb-0 mt-1" style={{fontSize: 14,}}>Admin</p>
                                    </div>


                                </div>
                                <div className="col-lg-7 mt-lg-0 mt-4">

                                    {/* cards uploaded */}
                                    <div className="">
                                        <h6 className="mb-0" style={{fontWeight: 'bold'}}>Uploaded Cards</h6>
                                    </div>

                                    {/* images uploaded */}
                                    <div className="row mt-lg-2 mt-4">
                                        {imageLayout}    
                                    </div>




                                </div>
                            </div>

                            {/* button to start trade */}
                            <div className="text-center mt-lg-5 mt-4">
                            <Link 
                               to="/user/trade"
                                type="submit"                    
                                className="btn btn-pinkTacit btn-transact">Start Trade</Link>
                            </div>

                        </div>
                        
                    </div>
                </div>

            </div>
        </div>


        </>
     );
}


const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const transactions = state.dashboard.Transaction
    const transaction = transactions.find(val => val.id === id);
    return{
        transaction: transaction,
        id: id
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserTransactionDetails);