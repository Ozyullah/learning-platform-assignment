import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../firebase.Config';
import { Navigate } from 'react-router-dom';


export const AuthContext = createContext();

const auth = getAuth(app)

const MassContext = ({ children }) => {

    const [user, setUser] = useState('');
    const [loading,setLoading]= useState(false)


    const addedUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)

    }

    const updateCase = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
        
    }

    const signInWithGoogle =(provider)=>{
        return signInWithPopup(auth, provider)
    }

    const signInWithGithub =(provider)=>{
        return signInWithPopup(auth, provider)
    }


    const loginWithEmail =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }




    const logOut =()=>{
        return signOut(auth)
        setLoading(true)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (actualUser) => {
            setUser(actualUser);
        })
        return()=>{
            return unSubscribe();
        }

    }, [])

    const par = {
        addedUserWithEmail,
        updateCase,
        user,
        signInWithGoogle,
        loginWithEmail,
        logOut,
        loading,
        signInWithGithub,
        setUser
    }
    return (
        <AuthContext.Provider value={par}>
            {children}
        </AuthContext.Provider>
    );
};

export default MassContext;