import React from "react";

import { useAuth } from "@/lib/auth";
import Router from "next/router";

const LightNav = () => {
  const auth = useAuth();

  return (
    <div>
      <nav className='relative z-50 h-12 select-none'>
        <div className='w-full flex flex-wrap items-center justify-between h-12 overflow-hidden font-medium sm:px-4 md:px-2'>
          <div className='flex items-center justify-start w-1/4 h-full pr-4'>
            <a
              onClick={() => Router.push("/")}
              className='inline-block py-4 md:py-0'>
              <img className='w-8' src='/images/logo.png' alt='logo' />
            </a>
          </div>
          <div className='w-full h-full p-4 text-sm md:items-center md:w-3/4 lg:text-base md:p-0 md:relative flex '>
            <div className='flex items-start justify-end w-full pt-4 md:items-center flex-row md:py-0'>
              <a
                onClick={() => Router.push("/dashboard")}
                className='cursor-pointer flex flex-row items-center justify-center space-x-1 w-full px-6 py-2 mr-0 text-white md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto hover:underline transition-all duration-75'>
                <svg
                  className='w-5 h-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                  />
                </svg>
                <span>Dashboard</span>
              </a>
              <a
                onClick={() => Router.push("/cases")}
                className='cursor-pointer flex flex-row items-center justify-center space-x-1 w-full px-6 py-2 mr-0 text-white md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto hover:underline transition-all duration-75'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>Cases</span>
              </a>
              <a
                onClick={() => Router.push("/profile")}
                className='cursor-pointer flex flex-row items-center justify-center space-x-1 w-full px-6 py-2 mr-0 text-white md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto hover:underline transition transition-all duration-75'>
                <svg
                  className='w-5 h-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>Profile</span>
              </a>
              <a
                onClick={() => Router.push("/notifications")}
                className='cursor-pointer flex flex-row items-center justify-center space-x-1 w-full px-6 py-2 mr-0 text-white md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto hover:underline transition transition-all duration-75'>
                <svg
                  className='w-5 h-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </a>
              <a
                onClick={() => auth.signOut()}
                className='cursor-pointer inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-primary md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-red-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-red-600'>
                Log Out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LightNav;
