import NoteBox from "./NoteBox";

const Notes = () => {
    return ( 
        <div className="flex flex-row pl-28 flex-wrap"> 
        <h1 className="p-2 ml-2 inline w-72 text-6xl">Doctors Notes</h1>
                <NoteBox title="Note 1"/>
                <NoteBox title="Note 1"/>
                <NoteBox title="Note 1"/>
                <NoteBox title="Note 1"/>
                <NoteBox title="Note 1"/>
                <NoteBox title="Note 1"/>
                <NoteBox title="Note 1"/>
                <NoteBox title="Note 1"/>
		
	    </div>
     );
}
 
export default Notes;