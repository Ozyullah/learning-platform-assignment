import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/MassContext';

const Securerouter = ({ children }) => {

    const {user, loading}=useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default Securerouter;