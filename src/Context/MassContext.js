import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../firebase.Config';



export const AuthContext = createContext();

const auth = getAuth(app)

const MassContext = ({ children }) => {

    const [user, setUser] = useState('');
    const [loading,setLoading]= useState(true)

// create user wwith email password
    const addedUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // for added name and photo

    const updateCase = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
        
    }


    const signInWithGoogle =(provider)=>{
        return signInWithPopup(auth, provider)
    }


    const signInWithGithub =(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // login with email and password
    
    const loginWithEmail =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (actualUser) => {
            setUser(actualUser);
            setLoading(false)
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