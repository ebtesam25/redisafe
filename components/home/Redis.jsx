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
          web platform and mobile application. From caching to
          publisher-subscriber modeling, we've done it all
        </p>
        <div className='grid grid-cols-3 gap-5 mt-10 sm:grid-cols-8 lg:grid-cols-12'>
          <div className='max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50'>
            <div className='box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left'>
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
              <div className='mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50'>
                <span className='box-border text-xl font-bold leading-none tracking-wider border-solid text-gray-50'>
                  Redis Caching
                </span>
                <p className='box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-white border-solid sm:text-left'>
                  We strictly only deal with vendors that provide top notch
                  security infrastructure.
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50'>
            <div className='box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left'>
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
                    d='M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z'
                  />
                </svg>
              </span>
              <div className='mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50'>
                <span className='box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50'>
                  Redis Pub/Sub
                </span>
                <p className='box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-white border-solid sm:text-left'>
                  We provide world-class support to help you integrate into your
                  system.
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50'>
            <div className='box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left'>
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
                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                  />
                </svg>
              </span>
              <div className='mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50'>
                <span className='box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50'>
                  RedisJSON
                </span>
                <p className='box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-white border-solid sm:text-left'>
                  Fully configurable interface to fit into your application and
                  website.
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50'>
            <div className='box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left'>
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
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>
              </span>
              <div className='mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50'>
                <span className='box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50'>
                  RedisAI
                </span>
                <p className='box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-white border-solid sm:text-left'>
                  The Developer API will allow you to leverage our tools and
                  build quicker.
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50'>
            <div className='box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left'>
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
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </span>
              <div className='mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50'>
                <span className='box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50'>
                  RedisTimeSeries
                </span>
                <p className='box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-white border-solid sm:text-left'>
                  Our system has a 99.9% uptime and is extremely fast and
                  reliable.
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-xs col-span-4 font-sans border-0 border-gray-200 text-gray-50'>
            <div className='box-border flex flex-col items-center h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:items-start sm:text-left'>
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
                    d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
                  />
                </svg>
              </span>
              <div className='mt-6 font-sans text-center border-0 border-gray-200 sm:text-left text-gray-50'>
                <span className='box-border text-xl font-bold leading-none tracking-wider text-center border-solid sm:text-left text-gray-50'>
                  Smartcache
                </span>
                <p className='box-border mx-0 mt-2 mb-0 font-normal leading-snug text-center text-white border-solid sm:text-left'>
                  Free and open-source tools that will continue to grow.
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
