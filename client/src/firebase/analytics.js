import { getDoc, doc} from "firebase/firestore";
import {db} from "./config.js"

const read_analytics = async (id) =>{
    try {
        const docSnap = await getDoc(doc(db, "users/"+id))
        console.log(id)
        if(docSnap){
            const dota=docSnap.data()
            const data=dota.medical_data
            console.log(data)
            const response_data=[]

            for (let param in data){
                const json = {
                    dataSource: data[param],
                    xName: 'date',
                    yName: 'value',
                    name: param,
                    width: '2',
                    marker: { visible: true, width: 10, height: 10 },
                    type: 'Line' }  
                response_data.push(json)
            }

            console.log(response_data)

            return response_data
        }else 
            return 404
    } catch (error) {
        console.log(error)
        return error.message
    }
}

export {read_analytics}