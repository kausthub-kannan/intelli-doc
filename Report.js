import ReportDoc from "./ReportDoc";
import upload from "./icons/file-plus.png";

const Report = () => {
    return ( 
        <div className="flex flex-row "> 
        
		<div className="grow rounded-xl m-6 mr-8 ml-32" style={{height: "90vh", backgroundColor:"#009ed0"}}>
        <h1 className="p-2 ml-8">Your Reports</h1>
			<ReportDoc date="20/04/23" topic="general"/>
            <ReportDoc date="20/04/23" topic="general"/>
            <ReportDoc date="20/04/23" topic="general"/>
            <button style={{ backgroundColor:"#003260"}} className="text-white p-2 rounded-xl absolute right-12 bottom-16"><img src={upload} className="inline-block w-8"/> Upload</button>
		</div>
		{/* <div className=" w-3/12 rounded-xl m-8 ml-4" style={{height: "90vh", backgroundColor:"#003260"}}>
		
		</div> */}
        
	</div>
     );
}
 
export default Report;
// #003260
// #009ed0