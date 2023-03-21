import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { useNavigate } from 'react-router-dom';

const UserProfile = (params) => {
  const { currentColor } = useStateContext();
  const navigate = useNavigate()

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
      <button type="button" >
              <img
          className="rounded-full h-24 w-24"
          src={(params.url?params.url:avatar)}
          alt="user-profile"
        />
            </button>
        
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> {params.name} </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  {params.age} yrs old   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {params.email} </p>
        </div>
      </div>
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          type="logout"
        />
        <button onClick={() => navigate('/profile/edit')}>Edit</button>
    </div>

  );
};

export default UserProfile;
