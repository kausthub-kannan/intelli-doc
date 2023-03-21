import { collection, addDoc, getDoc, doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore"; 
import {db} from "./config.js"

const add_note = async (id, data) => {
    try {
        const docRef = await addDoc(collection(db, "users/"+id+"/notes"), data)
        return 200
    } catch (error) {
        console.log(error)
        return error.message
    }
}


const delete_note = async (id, nid)=>{
    try {
        const response = await deleteDoc(doc(db, "users/"+id+"/notes/"+nid))
        return 200
    } catch (error) {
        console.log(error)
        return error.message
    }
}

const update_note = async (id, data) =>{
    try {
        const docSnap = await updateDoc(doc(db, "users/"+id+"/notes/"+data.id), {
            content: data.content,
            doctors_name: data.doctor_name,
            title: data.title
        })
        return 200
    } catch (error) {
        console.log(error)
        return error.message
    }
}

const read_note = async (id) => {
    try {
        const array =[]
        const response = await getDocs(collection(db, "users/"+id+"/notes"))
        response.forEach(doc => {
            const json = doc.data()
            json["id"] = doc.id
            array.push(json)
        });
        return array
    } catch (error) {
        console.log(error)
        return error.message
    }
}

export{add_note, delete_note, update_note, read_note}