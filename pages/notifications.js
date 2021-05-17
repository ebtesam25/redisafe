import LightNav from "@/components/dashboard/LightNav";
import { useAuth } from "@/lib/auth";
import { getUserNotifications } from "lib/firestore";
import React, { useState, useEffect } from "react";

const Notifications = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (user === null) return;

    const fetchNotifications = async () => {
      const notifications = await getUserNotifications({ uid: user?.uid });
      setNotifications(notifications);
    };

    fetchNotifications();
  }, [user]);

  return (
    <React.Fragment>
      <div className='py-3 md:py-4 xl:py-6 bg-header-dashboard'>
        <div className='mx-auto container px-4 xl:px-0'>
          <LightNav />
        </div>
      </div>
      <div className='max-w-screen-md mx-auto px-4 py-16'>
        <div
          className='flex justify-between items-end
        '>
          <h1 className='text-primary text-3xl font-extrabold'>
            Notifications
          </h1>
          <p className='text-gray-400 font-medium'>
            {notifications.length} notifications
          </p>
        </div>
        <div className='flex flex-col space-y-4 mt-8'>
          {notifications &&
            notifications.map(({ time, description, read }) => {
              if (read) {
                return (
                  <div className='bg-primary text-white p-4 shadow-lg rounded'>
                    <p className='text-sm '>{time}</p>
                    <p className='text-white text-md font-bold'>
                      {description}
                    </p>
                  </div>
                );
              } else
                return (
                  <div className='bg-white border-2 border-opacity-50 border-primary text-primary p-4 shadow-lg rounded'>
                    <p className='text-sm'>{time}</p>
                    <p className='text-primary text-md font-bold'>
                      {description}
                    </p>
                  </div>
                );
            })}
          {/* <div className='bg-primary text-white p-4 shadow-lg rounded'>
            <p className='text-sm '>1 hour ago</p>
            <p className='text-white text-md font-bold'>
              You were in contact with a potential infected COVID-19 patient
            </p>
          </div>
          <div className='bg-white border-2 border-opacity-50 border-primary text-primary p-4 shadow-lg rounded'>
            <p className='text-sm'>10 hours ago</p>
            <p className='text-primary text-md font-bold'>
              45 new COVID-19 cases in the area today
            </p>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notifications;
