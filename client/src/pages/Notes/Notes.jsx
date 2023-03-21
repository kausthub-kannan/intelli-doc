import React, { useEffect, useState } from 'react';
import { dropdownData} from '../../data/dummy';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../../contexts/ContextProvider';
import { auth } from '../../firebase/auth';
import { useNavigate } from 'react-router-dom';
import { delete_note, read_note } from '../../firebase/note';
import { Button } from '../../components';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Notes = () => {
  const { currentColor, currentMode } = useStateContext();
  const [id, setId] = useState()
  const [data, setData] = useState([])

  const navigate = useNavigate()
  useEffect( async () =>{
		const user = auth.currentUser;
		if(!user){  
			navigate('/login')
		}else{
      setId(user.uid)
      const response = await read_note(id)
      
      if(response){
        console.log(response)
        setData(response)
        console.log(data)
      }
    }
	},[id])

  const deleteNote = async (nid) => {
    const response = await delete_note(id, nid)
    console.log(response)
    navigate('/notes')
  };

  return (
 <div className="flex flex-wrap justify-center">



{data.map((item) => (

        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-gray-400 ">{item.doctors_name}</p>
              <p className="mt-8 text-sm text-gray-400">
                {item.content}
              </p>
              <form>
                <input type="button" value="Edit" 
                onClick={() => navigate('/note/edit', { state: { id: item.id, title: item.title, doctor_name: item.doctors_name, content: item.content} })} style={{backgroundColor:"#CCCCCC", margin:"5px", padding:"5px", borderRadius:"5px", cursor: "pointer"}}/>
                <input type="button" value="Delete"  onClick={() => deleteNote(item.id)} style={{backgroundColor:"#F2F2F2", margin:"5px", padding:"5px", borderRadius:"5px", cursor: "pointer"}}/>
              </form>
        </div>
          ))}

        <Button onClick={() => navigate('/note/add')} 
                color="white"
                bgColor={currentColor}
                text="Add Note"
                borderRadius="10px"/>

      </div>
  );
};

export default Notes;