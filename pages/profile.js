import React, { useState, useEffect } from "react";

import LightNav from "@/components/dashboard/LightNav";
import { useAuth } from "@/lib/auth";
import { fetchUserData, updateUserData } from "@/lib/firestore";
import Loader from "@/components/shared/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  const [userPhone, setUserPhone] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("Male");
  const [healthStatus, setHealthStatus] = useState("Vaccinated");

  const [physicianName, setPhysicianName] = useState("");
  const [physicianEmail, setPhysicianEmail] = useState("");
  const [physicianPhone, setPhysicianPhone] = useState("");

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);
    const payload = {
      userPhone,
      age,
      gender: gender ?? "Male",
      healthStatus: healthStatus ?? "Vaccinated",
      physicianName,
      physicianEmail,
      physicianPhone,
    };

    await updateUserData(user?.uid, payload);

    setLoading(false);
    notify();
  };

  useEffect(() => {
    if (user === null) return;

    const fetchProfileData = async () => {
      const userProfileData = await fetchUserData(user?.uid);
      setUserPhone(userProfileData.userPhone);
      setAge(userProfileData.age);
      setGender(userProfileData.gender);
      setHealthStatus(userProfileData.healthStatus);
      setPhysicianName(userProfileData.physicianName);
      setPhysicianEmail(userProfileData.physicianEmail);
      setPhysicianPhone(userProfileData.physicianPhone);
    };

    fetchProfileData();
  }, [user]);

  const notify = () =>
    toast.dark("✨ Profile Updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <React.Fragment>
      <ToastContainer />
      <div className='py-3 md:py-4 xl:py-6 bg-header-dashboard'>
        <div className='mx-auto container px-4 xl:px-0'>
          <LightNav />
        </div>
      </div>
      <div className='max-w-screen-md mx-auto px-4 md:px-12 py-24'>
        <div className='bg-white shadow rounded-sm'>
          <div className='py-4 bg-gray-50 px-6'>
            <div className='flex flex-row items-center justify-between'>
              <h1 className='font-extrabold text-black text-2xl'>My Profile</h1>
              <img
                className='inline-flex w-10 h-10 rounded-full'
                src={user?.photoUrl}
                alt={user?.name}
              />
            </div>
            <div className='flex space-x-1 items-center mt-4'>
              <svg
                className='w-5 h-5 text-red-700'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
              <p className='text-sm text-gray-700'>
                All data is securely managed and encrypted to ensure data
                privacy.
              </p>
            </div>
          </div>
          <div className='py-4 bg-white px-6'>
            <form onSubmit={handleProfileUpdate}>
              {/*  My Information */}
              <div className='mb-4'>
                <h2 className='text-xl text-gray-700 border-b border-gray-200 pb-1 font-medium'>
                  My Information
                </h2>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'>
                  Full Name
                </label>
                <input
                  value={user?.name}
                  disabled
                  type='text'
                  name='name'
                  className='w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 mt-2 text-sm disabled:opacity-50 bg-gray-50'
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'>
                  Email Address
                </label>
                <input
                  value={user?.email}
                  disabled
                  type='email'
                  name='email'
                  autocomplete='email'
                  className='w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 mt-2 text-sm bg-gray-50'
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700'>
                  Phone Number
                </label>
                <input
                  onChange={(e) => setUserPhone(e.target.value)}
                  value={userPhone}
                  type='phone'
                  name='phone'
                  className='w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 mt-2 text-sm'
                  placeholder='+1555-555-5555'
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='age'
                  className='block text-sm font-medium text-gray-700'>
                  Age
                </label>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type='number'
                  name='age'
                  placeholder={28}
                  className='w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 mt-2 text-sm'
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='gender'
                  className='block text-sm font-medium text-gray-700'>
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  className='w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 mt-2'>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </select>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='healthStatus'
                  className='block text-sm font-medium text-gray-700'>
                  Health Status
                </label>
                <select
                  value={healthStatus}
                  onChange={(e) => {
                    setHealthStatus(e.target.value);
                  }}
                  className='w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring-red-500 mt-2'>
                  <option value='Vaccinated'>Vaccinated</option>
                  <option value='Unvaccinated'>Unvaccinated</option>
                  <option value='Infected'>Infected</option>
                </select>
              </div>

              {/* Physician Information */}
              <div className='mb-4'>
                <h2 className='text-xl text-gray-700 border-b border-gray-200 pb-1 font-medium'>
                  Physician Information
                </h2>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'>
                  Physician Name
                </label>
                <input
                  value={physicianName}
                  onChange={(e) => setPhysicianName(e.target.value)}
                  type='text'
                  name='name'
                  required
                  placeholder='Dr. Waymond J. Jung, MD'
                  className='w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 mt-2 text-sm'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'>
                  Physician Email
                </label>
                <input
                  value={physicianEmail}
                  onChange={(e) => setPhysicianEmail(e.target.value)}
                  type='email'
                  name='email'
                  required
                  autocomplete='email'
                  placeholder='waymondjung@sutterhealth.org'
                  className='w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 mt-2 text-sm'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700'>
                  Physician Phone Number
                </label>
                <input
                  value={physicianPhone}
                  onChange={(e) => setPhysicianPhone(e.target.value)}
                  type='text'
                  name='phone'
                  required
                  placeholder='+1555-555-5555'
                  className='w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 mt-2 text-sm'
                />
              </div>
              {loading ? (
                <button
                  type='submit'
                  className='py-2 px-8 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none disabled:opacity-50'>
                  <Loader />
                </button>
              ) : (
                <button
                  type='submit'
                  className='py-2 px-8 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none disabled:opacity-50'>
                  Save
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
