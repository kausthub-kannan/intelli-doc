import { collection, addDoc, getDoc, doc, getDocs } from "firebase/firestore"; 
import { uploadFile } from "./admin.js";
import { getStorage, ref } from "firebase/storage";
import {db} from "./config.js"

const add_report = async (name, data) => {
    try {

        //Query for the Patient
        const q = query(collection(db, "users"), where("name", "==", name))
        const querySnapshot = await getDocs(q);

        if(querySnapshot){
            //If the Patient exists
            querySnapshot.forEach((doc) => {
                id=doc.id
                prev_data=doc.data()
              });
            
            if(prev_data.reports){
                //If the report json exits
                prev_data=prev_data.reports
                prev_data.forEach((key, value) =>{
                    if(length(value)>10){
                        value.pop()
                        value.unshift(data[key])
                    }else{
                        value.unshift(data[key])
                    }
                })
                const docRef = await updateDoc(db.collection("users/"+id ), {
                    reports: prev_data
                })
            }else{
                //If the report json doesn't exist
                add_data={}
                data.forEach((key, value) =>{
                    add_data[key]=[]
                    add_data.push(value)
                })
                const docRef = await addDoc(db.collection("users/"+id ), {
                    reports: add_data
                })
            }
            
            const response = await uploadFile(id, data)
            return response
        }else{
            return 404
        }
    } catch (error) {
        console.log(error)
        return error.message
    }
}

const read_report = async (id) => {
    try {
        const array =[]
        const response = await getDocs(collection(db, 'users/'+id+'/reports'))
        response.forEach(doc => {
            console.log(doc.data())
            array.push(doc.data())
        });
        return array
    } catch (error) {
        console.log(error)
        return error.message
    }
}

const delete_report = async (id) => {
    try {
        //Delete Filed Operation to be added with delete pdf from strorage 
    } catch (error) {
        console.log(error)
        return error.message
    }
}

const update_report = async (id) => {
    try {
        //Update json and replace report in storage to be added
    } catch (error) {
        console.log(error)
        return error.message
    }
}

export {add_report, delete_report, update_report, read_report}