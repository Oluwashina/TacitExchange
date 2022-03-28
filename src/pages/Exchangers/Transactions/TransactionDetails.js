import React from "react";
import Sidebar from "../../../components/UserSideBar/Sidebar";
import "./transaction.css";
import SentIcon from "../../../assets/images/sentIcon.svg";
import PendingIcon from "../../../assets/images/pendingIcon.svg";
import completeIcon from "../../../assets/images/completeIcon.svg";
import declineIcon from "../../../assets/images/declinedIcon.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ImageZoom from "react-medium-image-zoom";
import Moment from "react-moment";

const UserTransactionDetails = (props) => {
  const { transaction } = props;

  // mapping images
  const imageLayout = transaction.imageUrl
    .filter((el) => el !== "")
    .map((item, index) => (
      <div key={index} className="col-4 mb-4 mb-lg-3">
        <div className="transactImage">
          <ImageZoom
            image={{
              src: item,
              alt: "giftcards",
              className: "transactImageSize",
            }}
            zoomImage={{
              src: item,
              alt: "giftcards",
            }}
          />
        </div>
      </div>
    ));

  const iconFormat = (val) => {
    let result;
    switch (val) {
      case "Pending":
        result = PendingIcon;
        break;
      case "Completed":
        result = completeIcon;
        break;
      case "Declined":
        result = declineIcon;
        break;
      default:
        break;
    }
    return result;
  };

  const statusName = (val) => {
    let result;
    switch (val) {
      case "Pending":
        result = "Pending Payment";
        break;
      case "Completed":
        result = "Payment Sent";
        break;
      case "Declined":
        result = "Payment Declined";
        break;
      default:
        break;
    }
    return result;
  };

  const AdminState = (val) => {
    let result;
    switch (val) {
      case "Pending":
        result = "Payment is been processed by";
        break;
      case "Completed":
        result = "Payment was processed by";
        break;
      case "Declined":
        result = "Payment was declined by";
        break;
      default:
        break;
    }
    return result;
  };

  return (
    <>
      <Sidebar title="Trade Details" />
      <div className="usermain">
        <div
          className="contain"
          style={{ width: "100%", paddingLeft: "20px", paddingRight: "20px" }}
        >
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
                        <h6 style={{ fontWeight: "bold" }}>You Sent</h6>
                        <p>{transaction.cardAmount} USD</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-lg-0 mt-3">
                    <div className="transactStatus">
                      <div>
                        <img
                          src={iconFormat(transaction.tradeStatus)}
                          width="60"
                          height="60"
                          alt="pending"
                        />
                      </div>
                      <div className="ml-3 mt-3">
                        <h6 style={{ fontWeight: "bold" }}>
                          {statusName(transaction.tradeStatus)}
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
                      <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                        Transaction Id
                      </h6>
                      <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                        {transaction.id}
                      </p>
                    </div>

                    {/* date */}
                    <div className=" mt-3">
                      <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                        Date Initiated
                      </h6>
                      <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                        <Moment format="MMMM Do, YYYY">
                          {transaction.createdAt}
                        </Moment>
                      </p>
                    </div>

                    {/* amount */}
                    <div className=" mt-3">
                      <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                        Amount
                      </h6>
                      <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                        {transaction.cardAmount} USD
                      </p>
                    </div>

                    {/* amount to recieve */}
                    <div className=" mt-3">
                      <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                        {statusName(transaction.tradeStatus)}
                      </h6>
                      <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                        {transaction.amount} Naira
                      </p>
                    </div>

                    {/* comment */}
                    <div className=" mt-3">
                      <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                        Comment
                      </h6>
                      <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                        {transaction.comment
                          ? transaction.comment
                          : "No comment"}
                      </p>
                    </div>

                   
                    {/* status */}
                    <div className=" mt-3">
                      <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                        Trade Status
                      </h6>
                      <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                        {transaction.tradeStatus}
                      </p>
                    </div>


                    {/* Date completed */}
                    {transaction.tradeStatus === "Pending" ? (
                      ""
                    ) : (
                      <div className=" mt-3">
                        <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                          {transaction.tradeStatus === "Completed"
                            ? "Date Completed"
                            : "Date Declined"}
                        </h6>
                        <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                          <Moment format="MMMM Do, YYYY">
                            {transaction.updatedAt}
                          </Moment>
                        </p>
                      </div>
                    )}

                    {/* processed by admin */}
                    <div className=" mt-3">
                      <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                        {AdminState(transaction.tradeStatus)}
                      </h6>
                      <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                        Admin
                      </p>
                    </div>

                    {/* declined reason */}
                    {transaction.tradeStatus === "Declined" ? (
                      <div className=" mt-3">
                        <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                          Reason
                        </h6>
                        <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                          {transaction.hasOwnProperty("declinedReason")
                            ? transaction.declinedReason
                            : "Card not valid!"}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-7 mt-lg-0 mt-4">
                    {/* amount */}
                    <div className="">
                      <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                        Card Name
                      </h6>
                      <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                        {transaction.subCategoryDetails.subcategoryname}
                      </p>
                    </div>

                    {/* amount */}
                    <div className=" mt-3">
                      <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                        Card Category
                      </h6>
                      <p className="mb-0 mt-1" style={{ fontSize: 14 }}>
                        {transaction.subCategoryDetails.categoryname}
                      </p>
                    </div>

                    {/* cards uploaded */}
                    <div className="mt-4">
                      <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                        Uploaded Cards
                      </h6>
                    </div>

                    {/* images uploaded */}
                    <div className="row mt-lg-1 mt-2">{imageLayout}</div>
                  </div>
                </div>

                {/* button to start trade */}
                <div className="text-center mt-lg-5 mt-4">
                  <Link
                    to="/start-trade"
                    type="submit"
                    className="btn btn-pinkTacit btn-transact"
                  >
                    Start Another Trade
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const transactions = state.dashboard.Transaction;
  const transaction = transactions.find((val) => val.id === id);
  return {
    transaction: transaction,
    id: id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTransactionDetails);
