import React, {useEffect} from 'react';
import UserSideBar from '../../../components/UserSideBar/Sidebar';
import './notifications.css'
import Circle from '../../../assets/images/circle.svg'
import {connect} from 'react-redux'
import { getUserNotifications } from '../../../store/actions/notifications';
import {Link} from 'react-router-dom'
import moment from 'moment'


const UserNotifications = (props) => {

    const {notifications, getNotification} = props

     // make call to fetch notifications
     useEffect(() => {
        getNotification()
      }, [ getNotification]);

    //   mapping notifications
 const notificationsLayout = notifications.length ? (
    notifications.map((value) => {
      return (
        <div key={value.id} className="col-lg-6 mb-4">

            <div className="notifyDiv">

                {/* notify head and date */}
                <div style={{display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{display: 'flex'}}>
                        <div>
                        <img src={Circle} alt="circle" width="20" height="20" />
                        </div> 
                        <div className="ml-2">
                            <p className="mb-0" style={{color: '#F2F2F2'}}>{value.title}</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-0" style={{color: '#F2F2F2', fontSize: 14}}>
                            {moment(value.createdAt).fromNow()}
                            </p>
                    </div>

                </div>

                {/* notifications message */}
                <div className="mt-4">
                    <p className="mb-0" style={{color: '#F2F2F2'}}>{value.message}</p>
                </div>

            </div>

        </div>
      );
    })
  ) : (
    <div>

    </div>
  );

    return ( 
        <>
        <UserSideBar />
        <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

            {/* check if there is notifications */}

            {
                notifications.length ? 

                <div className="notify-lay mt-4 mb-5">

                {/* first row */}
                    <div className="row">

                        {notificationsLayout}

                    </div>


                </div>
                :

                <div className="dashTrade mt-lg-4 mt-5 mb-5">

                <div>
                    <p className="mb-0 text-center" style={{fontWeight: 'bold'}}>No notifications yet!</p>
                </div>

                    <div className="mt-3">
                        <Link 
                        to="/user/trade"
                        className="btn btn-blueTacit">Start Trade</Link>
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
        notifications: state.notification.Notifications
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        getNotification: () => dispatch(getUserNotifications()),
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(UserNotifications);