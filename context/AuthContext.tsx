import React, { useContext , createContext , useEffect, useState} from 'react'
import {GoogleAuthProvider ,GithubAuthProvider,signInWithRedirect, onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'
import { auth } from '../config/firebase';

const GoProvider = new GoogleAuthProvider();
const AuthContext = createContext<any>({});
const GitProvider = new GithubAuthProvider()

export const useAuth = ()=>useContext(AuthContext)

const AuthContextProvider = ({children}:{children:React.ReactNode}) => {
    const [user,setUser] = useState<any>(null);
    const [loading,setLoading] = useState(true);

    const signin = (name:string ,email:string , password:string)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    };
    const login = (email:string , password:string)=>{
       return signInWithEmailAndPassword(auth,email,password);
    };
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, GoProvider);
    }
    const signInWithGit = ()=>{
        return signInWithPopup(auth, GitProvider);
    }
    const logout = async ()=>{
       setUser(null);
       await signOut(auth);
    }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
         if(user){
            setUser({
                uid: user.uid,
                email:user.email,
                displayName: user.displayName,
            });
         }else{
            setUser(null);
         }
         setLoading(false);
    })
    return ()=>unsubscribe();
  },[]);
    return (
    <AuthContext.Provider value = {{user , login, signin , logout,signInWithGoogle , signInWithGit}}>{loading?null:children}</AuthContext.Provider>
  )
};

export default AuthContextProvider
