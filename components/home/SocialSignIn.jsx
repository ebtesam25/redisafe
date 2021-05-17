import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useAuth } from "@/lib/auth";

import Router from "next/router";

const SocialSignIn = ({ setOpen }) => {
  const auth = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      className='fixed inset-0 z-50 overflow-auto h-screen w-full flex flex-row items-center justify-center md:px-0 px-12'>
      <div className='z-20 bg-gray-50 shadow-lg rounded-sm relative p-4 w-full max-w-md m-auto flex-col flex border-primary border-t-4 pb-8'>
        <svg
          className='w-6 h-6 absolute top-4 right-4 text-gray-300 cursor-pointer'
          onClick={() => setOpen(false)}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
        <div className='flex flex-col justify-center items-center w-full p-4'>
          <div className='flex'>
            <img className='w-16' src='/images/logored.png' alt='logo' />
          </div>
          <p className='text-center text-md mt-4 text-black font-bold'>
            Log in to get access to your dashboard
          </p>
        </div>
        <div className='mt-4 px-4 flex flex-col space-y-4 items-center justify-center'>
          <button
            onClick={() =>
              auth.signInWithGoogle().then(() => Router.push("/dashboard"))
            }
            className='bg-white w-full flex flex-row justify-center items-center rounded shadow-sm transition duration-200 ease-in-out transform hover:-translate-y-1'>
            <div className='bg-white inline-block p-2 rounded m-1'>
              <FcGoogle size={32} />
            </div>
            <span className='mx-auto pr-8 text-lg text-primary font-bold'>
              Google
            </span>
          </button>
          <button
            onClick={() => auth.signInWithGithub()}
            className='bg-gray-900 w-full flex flex-row justify-center items-center rounded shadow-sm transition duration-200 ease-in-out transform hover:-translate-y-1'>
            <div className='bg-transparent inline-block p-2 rounded m-1'>
              <FaGithub fill='white' size={32} />
            </div>
            <span className='mx-auto pr-8 text-lg text-white font-bold'>
              GitHub
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialSignIn;
