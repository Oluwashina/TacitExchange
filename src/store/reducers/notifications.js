

const initState = {
    Notifications: [],
    countUnread: 0
  };
  
  const notificationReducer = (state = initState, action) => {
    switch (action.type) {
    case 'UserNotifications':
        return{
            ...state,
            Notifications: action.data.findNotification,
            countUnread: action.data.unReadCount
        }
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  