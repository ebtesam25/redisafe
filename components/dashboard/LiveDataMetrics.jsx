import React from "react";

const LiveDataMetrics = ({ data }) => {
  console.log(data);
  const { pulse, oxygen, temperature, times } = data;

  return (
    <div className='mb-12'>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='flex flex-col items-between justify-start py-6 px-4 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-lg shadow-lg'>
          <div className='inline-block h-8 w-8 bg-white rounded-lg p-1'>
            <svg
              style={{ color: "#B442EE" }}
              className='h-6 w-6 font-bold'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </div>
          <div className='mt-4 flex flex-row items-end justify-start text-white'>
            <h3 className='text-white font-extrabold text-5xl'>
              {pulse[times.length - 1]}
            </h3>
            <span className='font-medium text-md mb-1 ml-2'>bpm</span>
          </div>
        </div>
        <div className='flex flex-col items-between justify-start py-6 px-4 bg-gradient-to-br from-orange-400 to-pink-600 rounded-lg shadow-lg'>
          <div className='inline-block h-8 w-8 bg-white rounded-lg p-1'>
            <svg
              style={{ color: "#F47D4B" }}
              className='h-6 w-6 font-bold'
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 256 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z'
                stroke='none'
              />
            </svg>
          </div>
          <div className='mt-4 flex flex-row items-end justify-start text-white'>
            <h3 className='text-white font-extrabold text-5xl'>
              {temperature[times.length - 1]}
            </h3>
            <span className='font-medium text-md mb-1 ml-2'>°F</span>
          </div>
        </div>
        <div className='flex flex-col items-between justify-start py-6 px-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg'>
          <div className='inline-block h-8 w-8 bg-white rounded-lg p-1'>
            <svg
              style={{ color: "#FAAB20" }}
              className='h-6 w-6 font-bold'
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <g stroke='none'>
                <path fill='none' d='M0 0h24v24H0z' />
                <path d='M22.001 17c-.001 4-.001 4-4 4-4 0-5-3-5-6 0-.378-.018-.918-.026-1.55l2.023 1.169L15 15c0 2.776.816 4 3 4 1.14 0 1.61-.007 1.963-.038.03-.351.037-.822.037-1.962 0-3.205-.703-6.033-1.835-7.9-.838-1.382-1.613-1.843-2.032-1.703-.293.098-.605.65-.831 1.623l-1.79-1.033c.369-1.197.982-2.151 1.988-2.487 3-1 6.503 4 6.5 11.5zM8.5 5.5c1.007.336 1.62 1.29 1.989 2.487L8.699 9.02c-.226-.973-.539-1.525-.831-1.623-.42-.14-1.195.32-2.032 1.702C4.703 10.967 4 13.795 4 17c0 1.14.007 1.61.038 1.962.351.031.822.038 1.962.038 2.184 0 3-1.224 3-4l.004-.382 2.023-1.168c-.01.633-.027 1.172-.027 1.55 0 3-1 6-5 6s-4 0-4-4C2 9.5 5.5 4.5 8.5 5.5zM13 2v7.422l4.696 2.712-1 1.732L12 11.155l-4.696 2.711-1-1.732L11 9.422V2h2z' />
              </g>
            </svg>
          </div>
          <div className='mt-4 flex flex-row items-end justify-start text-white'>
            <h3 className='text-white font-extrabold text-5xl'>
              {" "}
              {oxygen[times.length - 1]}
            </h3>
            <span className='font-medium text-md mb-1 ml-2'>
              % oxygen saturation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDataMetrics;
