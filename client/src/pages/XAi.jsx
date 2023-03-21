import React, { useEffect } from "react";
import { Button} from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/auth";

const XAi = () => {
  const { currentColor, currentMode } = useStateContext();

  const navigate = useNavigate()
  useEffect(() =>{
		const user = auth.currentUser;
		if(!user){
			console.log(user)
			navigate('/login')
		}
	})

return (

    <div className="flex  justify-center flex-row" style={{height: "78vh"}}>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full flex justify-between">
           
            <div className="bg-gray-100 dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-9/12">
                
            </div>
            <div className=" m-2.5 p-4">
            
            <img className="w-96 h-4/6 rounded-2xl" src={product9} alt="" /> <br />
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>

              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Upload"
                  borderRadius="10px"
                />
              </div>
            
            </div>
        </div>
    </div>

);
};

export default XAi;
