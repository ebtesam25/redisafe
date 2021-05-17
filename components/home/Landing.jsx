import React, { useState } from "react";
import Navbar from "./Navbar";
import SocialSignIn from "./SocialSignIn";
import { Link, animateScroll as scroll } from "react-scroll";

const Landing = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Navbar />
      <section className='px-2 py-8 bg-white dark:bg-black md:px-0'>
        <div className='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
          <div className='flex flex-wrap items-center sm:-mx-3'>
            <div className='w-full md:w-5/12 md:px-3'>
              <div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-8'>
                <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl'>
                  <span className='block text-transparent bg-clip-text bg-gradient-to-br from-primary-light to-primary'>
                    RediSafe
                  </span>
                </h1>
                <p className='mx-auto text-base text-gray-500 sm:max-w-md lg:text-lg md:max-w-xl'>
                  RediSafe is a modern app that allows you to monitor your
                  health data offline and prevent contracting the COVID-19
                  virus.
                </p>
                <div className='relative flex flex-col sm:flex-row sm:space-x-4'>
                  <a
                    onClick={() => setOpen(true)}
                    target='_blank'
                    className='cursor-pointer flex items-center justify-center w-full px-6 py-3 mb-3 text-lg text-white bg-primary hover:bg-primary-light rounded-md sm:mb-0 hover:bg-primary-dark transition-colors duration-150 sm:w-auto'>
                    Get Started
                  </a>
                  <Link
                    className='item-link'
                    activeClass='active'
                    to='features'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <a className='cursor-pointer flex items-center justify-center px-6 py-3 text-primary font-bold transition-colors duration-150 bg-white border-2 border-primary rounded-md hover:bg-primary hover:text-white'>
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex sm:w-7/12 md:w-1/2 mx-auto md:ml-16'>
              <div className='mx-auto h-auto overflow-hidden rounded-md sm:rounded-xl'>
                <img
                  className='floating shadow-xl'
                  src='images/phones.png'
                  alt='Hero Image'
                />
              </div>
            </div>
          </div>
        </div>
        {open && <SocialSignIn setOpen={setOpen} />}
      </section>
    </React.Fragment>
  );
};

export default Landing;
