import { useEffect, useState }  from "react";
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut} from 'firebase/auth';
import './App.css';

const firebaseConfig = {
    apiKey: "AIzaSyDKjze9C2DwhAbY078tov_4rN1atWVatHU",
    authDomain: "jafar-database.firebaseapp.com",
    projectId: "jafar-database",
    storageBucket: "jafar-database.appspot.com",
    messagingSenderId: "34643689394",
    appId: "1:34643689394:web:25e72c1df09c1b6020aeab",
    measurementId: "G-PTVR449FWX"
  };

const app = initializeApp(firebaseConfig);


const auth= getAuth();


export function signup(email,password) {
    return createUserWithEmailAndPassword(auth,email,password)
}
export function login(email,password) {
    return signInWithEmailAndPassword(auth,email,password)
}
export function logout() {
    return signOut(auth)
}


export function useAuth() {
    const[currentUser,setCurrentUser]=useState();

    useEffect(()=>{
         const x= onAuthStateChanged(auth,user=>setCurrentUser(user))
         return x;
    },[])
    return currentUser;
}
