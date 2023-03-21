import React, { useEffect, useState } from 'react';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/auth';
import { read_profile } from '../firebase/user_data';



const EditProfile = () => {
  const { currentColor, currentMode } = useStateContext();
  const navigate = useNavigate()
  const [id, setId] = useState("")
  const [data, setData] = useState([])

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
            const response = await read_profile(id)
            if(response){
              console.log(response)
              setData(response)
            }
        }
    },[id])
  

  return (
    <div >
      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 border-4">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Edit Profile</p>
          </div>
          <div className="mt-10">
            <img className=" h-50  md:w-96 border-4 rounded-2xl"  src={product9} alt="" />
            <div className="mt-8">
              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="mt-0  ">
              <div className="flex justify-between mt-4 gap-4">
                  <p className="text-sm text-gray-400">Name</p>
                  <form action="/editProfile" method='POST'>
                    <input type="text" style={{background: "#F0F0F0", padding: "5px", display: "inline-block", 
                    borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)"
                    }} value={(data.name? data.name: "")}/>
                  </form>
              </div>
              <div className="flex justify-between mt-4 gap-4">
                  <p className="text-sm text-gray-400">Email</p>
                  <form action="/editProfile" method='POST'>
                    <input type="text" style={{background: "#F0F0F0", padding: "5px", display: "inline-block", 
                    borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)"}}
                    value={(data.email? data.email: "")}/>
                  </form>
              </div>
              <div className="flex justify-between mt-4 gap-4">
                  <p className="text-sm text-gray-400">Age</p>
                  <form action="/editProfile" method='POST'>
                  <input type="number" style={{background: "#F0F0F0", padding: "5px", display: "inline-block", 
                    borderRadius: "20px", border: "3px solid linear-gradient(21deg, #10abff, #1beabd)"}}
                    value={(data.age? data.age: 0)}/>
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
                  type="editprofile"
                  id={id}
                  content={data}
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default EditProfile;







