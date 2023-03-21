import React, { useEffect, useState } from 'react';
import { Button } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { auth } from '../../firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const EditNote = (params) => {
  const { currentColor, currentMode } = useStateContext();
  const navigate = useNavigate()
  const [id, setId] = useState("")
  const [data, setData] = useState([])
  const location = useLocation();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log(data)
  };
  
    useEffect( async () =>{
        const user = auth.currentUser;
        if(!user){  
            navigate('/login')
        }else{
            setId(user.uid)
            if (location.state)
            if(params.type=="Edit"){
                setData(location.state)
            }
        }
    },[id])

  return (
    <div >
      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 border-4">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">{params.type} Note</p>
          </div>
          <div className="mt-10">
            <div className="mt-8">
              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="mt-0  ">
          <div className="flex justify-between mt-4 gap-4">
                <form action="/editProfile" method='POST'>

                    <p className="text-sm text-gray-400">Title</p>
                    <input type="text" 
                           name="title"
                           onChange={handleChange}
                           value={data.title}
                           style={{background: "#F0F0F0", padding: "5px", display: "inline-block", 
                           borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)"}}/>

                    <p className="text-sm text-gray-400">Doctor's Name</p>
                    <input type="text"
                           name="doctor_name"
                           onChange={handleChange}
                           value={data.doctor_name}
                           style={{background: "#F0F0F0", padding: "5px", display: "inline-block", 
                           borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)"}}/>

                    <p className="text-sm text-gray-400">Content</p>
                    <textarea name="content"
                    onChange={handleChange}
                    value={data.content} 
                    cols="30" rows="10" style={{background: "#F0F0F0"}} />

                  </form>
              </div>
          </div>
        </div>           
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Save Changes"
                  borderRadius="10px"
                  type={params.type}
                  content={data}
                  id={id}
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default EditNote;