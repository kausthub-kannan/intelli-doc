import logo from "./icons/428-injection-lineal.gif";
import SVG from "./icons/Stethoscope.png";
const MainPage = () => {
    return ( 
        <div className="flex flex-row max-h-screen overflow-hidden"> 
		<div className="grow rounded-xl m-8 mr-8 ml-32 drop-shadow-md md:filter-none" style={{height: "90vh"}}>
        <img src={logo} style={{width: "100px"}} className="inline-block"/>
        <h1  className="inline-block font-black text-6xl">IntelliDoc</h1>
        {/* <ul className="inline-block">
            <li><a>Link1</a></li> 
            <li><a>Link2</a></li>
        </ul> */}
        <img src={SVG} className="m-auto mb-0"/>
        </div></div>
     );
}
 
export default MainPage;