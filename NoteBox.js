const NoteBox = (props) => {
    return ( 
        <div className="rounded-xl h-64 w-72 m-6" style={{ backgroundColor:"#b9ddff"}}>
			<h3 className="h-16 m-8 rounded-xl  text-xl font-semibold" style={{ backgroundColor:"#b9ddff"}}> {props.title}</h3>
		</div>
     );
}
 
export default NoteBox;