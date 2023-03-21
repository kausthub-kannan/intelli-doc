import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"; 
import {db} from "./config.js"

const create_profile = async (userInfo) => {
 try {
    const docRef = await addDoc(collection(db, "users", userInfo.id), {
        name: userInfo.name,
        mobile: userInfo.mobile,
        city: userInfo.city,
        state: userInfo.state
      })
    return 200
 } catch (error) {
    console.log(error)
    return error.message
 }   
}

const read_profile = async (id) => {
    try {
       const docSnap = await getDoc(doc(db, "users/"+id))
       console.log(docSnap.data())
       return docSnap.data()
    } catch (error) {
       console.log(error)
       return error.message
    }   
}

const update_profile = async (id, userInfo) => {
    try {
        const docRef =await updateDoc(doc(db, "users/"+id), userInfo)
        return 200
    } catch (error) {
       console.log(error)
       return error.message
    }   
}

const delete_profile = async (userInfo) => {
    try {
        await deleteDoc(doc(db, "users/"+id))
        return 200
    } catch (error) {
       console.log(error)
       return error.message
    }   
}

export {create_profile, read_profile, update_profile, delete_profile}