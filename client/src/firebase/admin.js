import { getStorage, ref } from "firebase/storage";
import { app } from "./config";
const storage = getStorage(app);
const d = new Date();

//Converter
const jsonToPdf = async (data,date) =>{
            //Create PDF using the JSON
            const docDefinition = {
                content: [
                    { text: 'Report : '+date, style: 'header' },
                    {
                    table: {
                        headerRows: 1,
                        widths: ['*', '*'],
                        body: 
                            data
                    }
                    }
                ],
                styles: {
                    header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                    }
                }
            };
            const pdfDoc = pdfMake.createPdf(docDefinition);
    
            //Get the Blob of the pdf
            const pdfBlob = await new Promise((resolve) => {
                pdfDoc.getBlob((blob) => {
                  resolve(blob);
                });
              });

            return pdfBlob
}

const uploadFile = async (id, data) =>{
   try {
        //Deconstruct the JSON
        const date = d.toString();
        const tableBody = [];
        for (const key in data) {
            tableBody.push([key, data[key]]);
        }

        //Get the Blob
        const pdfBlob = await jsonToPdf(tableBody, date)
        
        //Upload the File
        try {
            const snapshot = await uploadBytes(ref(storage, id), pdfBlob)
            console.log(snapshot)
            return 200
        } catch (err) {
            console.log(err)
            return err
        }

   } catch (error) {
        console.log(error)
        return error
   }
}

export {uploadFile, storage}