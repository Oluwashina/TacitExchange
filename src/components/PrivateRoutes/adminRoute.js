import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'

const AdminRoute = ({
    component: Component,
    isAuthenticated,
    role,
    ...rest
}) => {
    return ( 
        <Route
        {...rest}
        render={(props) =>
          // check for role SubAdmin too
        role !== 'Admin' ? (
        <>
         <Redirect to={'/'} />
        </>
      ) : (
        <Component {...props} />
      )
        }
     />
     );
}


const mapStateToProps = (state) =>{
    return{
        isAuthenticated: state.auth.isAuthenticated,
        role: state.auth.role
    }
}

export default connect(mapStateToProps)(AdminRoute);

