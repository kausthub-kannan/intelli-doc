const XAi = () => {
    return ( 
        <div className="flex flex-row "> 
        {/* <h2 className="text-6xl pl-48 block grow">XAi</h2> */}
        {/* <h2 className="text-6xl pl-48 h-16">XAi</h2> <br/> */}
		<div className="grow rounded-xl m-8 mr-4 ml-32 shadow-xl" style={{height: "90vh", backgroundColor:"#003260"}}>
        <h1 className="p-2 ml-8 text-white">XAi</h1>
		</div>
		<div className=" w-3/12 rounded-xl m-8 ml-4 shadow-xl" style={{height: "90vh", backgroundColor:"#003260"}}>
		<div className="h-4/6 m-12 rounded-xl" style={{ backgroundColor:"#009ed0"}}>

        </div>
        <div className="h-16 m-12 rounded-xl text-center text-3xl font-semibold pt-2.5 cursor-pointer" style={{ backgroundColor:"#b9ddff"}}>
        <a>Upload X-ray</a>
        </div>
		</div>
	</div>
     );
}
 
export default XAi;