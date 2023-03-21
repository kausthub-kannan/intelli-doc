import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useStateContext } from '../contexts/ContextProvider';
import { logout } from '../firebase/auth';
import { add_note, update_note } from '../firebase/note';
import { update_profile } from '../firebase/user_data';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, type, content, id }) => {
  const { setIsClicked, initialState } = useStateContext();
  const navigate =useNavigate();

const eventHandler = async (type) =>{
  if(type=="logout"){
    const response = await logout()
    console.log(response)
    navigate('/login')
  }else if(type=="Edit"){
    const response = await update_note(id, content)
    if(response==200)
      navigate('/notes')
  }else if(type=="Add"){
    const response = await add_note (id, content)
    if(response==200)
      navigate('/notes')
  }else if(type=="editprofile"){
    const response = await update_profile(id, content)
    if(response==200)
      navigate('/reports')
  }
}

  return (
    <button
      type="button"
      onClick={() => {setIsClicked(initialState)
                      eventHandler(type)}}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
