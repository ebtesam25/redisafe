import React from "react";

const Redis = () => {
  return (
    <section className='relative w-full px-8 font-sans leading-6 bg-primary border-0 border-gray-200 border-solid text-gray-50'>
      <div className='flex flex-col items-center max-w-6xl px-8 py-20 mx-auto leading-6 border-solid md:items-stretch md:justify-center md:py-24'>
        <h2 className='w-full m-0 font-sans text-4xl font-black tracking-wide text-center border-0 border-gray-200 sm:text-5xl text-gray-50'>
          ⚡️ Supercharged with Redis
        </h2>
        <p className='w-full max-w-3xl mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-gray-200 border-0 border-gray-200 lg:text-lg md:text-base'>
          Explore how we leveraged Redis Technologies to <i>supercharge</i> our
          web platform and mobile application.
        </p>
        <div className='grid grid-cols-3 gap-5 mt-10 lg:grid-cols-12 justify-center mx-auto'>
          <div className='text-center max-w-xs col-span-6 font-sans border-0 border-gray-200 text-gray-50'>
            <div className='box-border flex flex-col items-center justify-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-center sm:text-center'>
              <span className='flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50'>
                <svg
                  className='w-8 h-8 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
              </span>
              <div className='mt-6 font-sans text-center border-0 border-gray-200 sm:text-center text-gray-50'>
                <span className='box-border text-xl font-bold leading-none tracking-wider border-solid text-gray-50'>
                  RedisJSON
                </span>
                <p className='box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-white border-solid sm:text-center'>
                  Storing location and healthcare data collected from on body
                  sensors in realtime
                </p>
              </div>
            </div>
          </div>
          <div className='text-center max-w-xs col-span-6 font-sans border-0 border-gray-200 text-gray-50'>
            <div className='box-border flex flex-col items-center justify-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-center sm:text-center'>
              <span className='flex-shrink-0 p-5 font-sans border-0 border-gray-200 rounded-full bg-gray-50 text-gray-50'>
                <svg
                  className='w-8 h-8 text-primary'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
              </span>
              <div className='mt-6 font-sans text-center border-0 border-gray-200 sm:text-center text-gray-50'>
                <span className='box-border text-xl font-bold leading-none tracking-wider border-solid text-gray-50'>
                  Redis Enterprise Cloud
                </span>
                <p className='box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-white border-solid sm:text-center'>
                  Hosting the database as a RedisJSON datastore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Redis;
