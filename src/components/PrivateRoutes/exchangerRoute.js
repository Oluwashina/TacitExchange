import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'

const UserRoute = ({
    component: Component,
    isAuthenticated,
    role,
    ...rest
}) => {
    return ( 
        <Route
        {...rest}
        render={(props) =>
        role !== 'Exchanger' ? (
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

export default connect(mapStateToProps)(UserRoute);

