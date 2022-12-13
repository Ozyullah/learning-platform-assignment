import React from 'react';



const AuthContext =React.createContext();

const MassContext = ( {children} ) => {

    const par ={}
    return (
       <AuthContext.Provider value={par}>
            { children }
       </AuthContext.Provider>
    );
};

export default MassContext;