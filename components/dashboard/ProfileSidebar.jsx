import { useAuth } from "@/lib/auth";
import React from "react";

const ProfileSidebar = () => {
  const auth = useAuth();

  return (
    <div className='bg-white shadow rounded-sm p-4'>
      <div className='flex flex-row justify-center items-center space-x-4'>
        <img
          className='w-12 h-12 rounded-full'
          src={auth?.user?.photoUrl}
          alt={auth?.user?.name}
        />
        <h3 className='font-bold'>{auth?.user?.name}</h3>
      </div>
    </div>
  );
};

export default ProfileSidebar;
