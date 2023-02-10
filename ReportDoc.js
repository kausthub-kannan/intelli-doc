import file from "./icons/file.png";
import download from "./icons/Icon.png";
const ReportDoc = (props) => {
    return ( 
        <div className="h-20 w-auto m-8 rounded-xl  text-white text-2xl" style={{ backgroundColor:"#003260"}}>
        <img src={file} className="w-16 py-2.5 pl-2 inline-block"/> <h2 className="inline-block mr-96">{props.date}</h2><h2 className="inline-block">{props.topic}</h2>
        <img src={download} className="w-16 py-2.5 pl-2 inline-block mr-0 ml-96"/> <h4 className="inline-block mr-0 ml-4">Download</h4>
        </div>
     );
}
 
export default ReportDoc;