// Testing:
// All functions sucessfully tested -> 'OK'

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {app} from "./config.js"

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
    
//Email auth
const register = async (authInfo) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, authInfo.email, authInfo.password)
        return 200
    } catch (error) {
        console.log(error)  
        return error.message
    }
}

const login = async (authInfo) => {
    try {
        const response = await signInWithEmailAndPassword(auth, authInfo.email, authInfo.password)
        return 200
    } catch (error) {
        console.log(error)
        return error.message
    }
}

//OAuth
const google_signin = async (auth_info) => {
    try {
        const response = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(response);
        return credential
    } catch (error) {
        console.log(error)
        return error.message
    }
}

//Logout
const logout = async () => {
    try {
        const response = await signOut(auth)
        console.log(response)
        return 200
    } catch (error) {
        console.log(error)
        return error.message
    }
}

export {google_signin, logout, login, register, auth}