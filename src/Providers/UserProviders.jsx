import React ,{createContext ,useState,useEffect, useContext,  } from 'react'
import {auth} from '../Firebase'

import 'firebase/auth'

export const AuthContext=createContext()

    export function useAuth(){
        return useContext(AuthContext)
    }

export function AuthProvider({children}){
const [currentUser,setCurrentUser]=useState()
const[loading,setLoading]=useState(true)


    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    function Login(email,password){
            return auth.signInWithEmailAndPassword(email,password)
    }
    function Logout(){
        return auth.signOut()
    }
useEffect(()=>{
   const unsubscribe= auth.onAuthStateChanged(user=>{
      
        setCurrentUser(user)
         setLoading(false);
    })
        return unsubscribe
},[])
const value = { currentUser, signup , Login , Logout};
return(
    <AuthContext.Provider value={value}>
       {!loading && children}
    </AuthContext.Provider>
);
}
// export default UserProviders;