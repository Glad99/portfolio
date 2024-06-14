import React from 'react';
import reactLogo from '../assets/react.svg';
import tailwindLogo from '../assets/Tailwind.png';
import framerMotionLogo from '../assets/framer-motion.png';
import { Link } from 'react-scroll';

const Project = () => {
  return (
    <div id='projects' className='bg-blue pt-5 lg:pt-12'>
      <h2 className='text-2xl font-bold md:text-3xl mb-10 text-gray-500 text-center'>Projects</h2>
      <div className='flex lg:flex-col gap-16 lg:gap-20 mx-[1rem] md:mx-[2rem] lg:mx-[5rem] justify-center items-center'>
        <div className='flex flex-col lg:flex-row gap-16'>
            <div className='flex h-[20rem] w-[22rem] md:w-[35rem] cursor-pointer rounded-lg overflow-hidden hover:shadow-lg'>
              <div className="py-2">
              <div className='container relative group'>
                <img src="/g-store1.PNG" alt="G-Store" className="w-[200px] h-[240px] md:w-[500px] md:h-[240px]" />
                <a href='https://g-store-delta.vercel.app/' target='_blank'><div className="absolute inset-0 bg-slate-200  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-xl font-bold">
              View
            </div></a>
            </div>
                <div className='flex gap-5 justify-center pt-4'>
                <img src="/public/MongoDb.svg" alt="" className='w-8 md:w-6' />
                <img src="/public/icons8-express-js.svg" alt="" className='w-8 md:w-6'/>
                  <img src={reactLogo} alt="React" className='w-8 md:w-6' />
                  <img src="/public/node-js1.svg" alt="" className='w-8 md:w-6' />
                  <img src={tailwindLogo} alt="Tailwind" className='w-8 md:w-6' />
                  <img src={framerMotionLogo} alt="Framer Motion" className='w-8 md:w-5 md:h-5' />
                </div>
              </div>
              <div className="w-[250px] md:w-full p-2 md:px-3 text-white text-[17px] bg-slate-400 rounded-r-lg">
                <p>G-Store is a cutting-edge e-commerce platform offering a seamless shopping experience with an extensive range of products and exceptional customer service. It is an intuitive website that ensures effortless browsing and purchasing, with secure payment options and a robust return policy for peace of mind. G-Store aims to make online shopping convenient, enjoyable, and accessible for everyone.</p>
              </div>
            </div>
            <div className='flex h-[20rem] w-[22rem] md:w-[35rem] cursor-pointer rounded-lg overflow-hidden hover:shadow-lg'>
              <div className="py-2">
              <div className='container relative group'>
                <img src="/g-store1.PNG" alt="G-Store" className="w-[200px] h-[240px] md:w-[500px] md:h-[240px]" />
                <a href='https://g-store-delta.vercel.app/' target='_blank'><div className="absolute inset-0 bg-slate-200  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-xl font-bold">
              View
            </div></a>
            </div>
                <div className='flex gap-5 justify-center pt-4'>
                <img src="/public/MongoDb.svg" alt="" className='w-8 md:w-6' />
                <img src="/public/icons8-express-js.svg" alt="" className='w-8 md:w-6'/>
                  <img src={reactLogo} alt="React" className='w-8 md:w-6' />
                  <img src="/public/node-js1.svg" alt="" className='w-8 md:w-6' />
                  <img src={tailwindLogo} alt="Tailwind" className='w-8 md:w-6' />
                  <img src={framerMotionLogo} alt="Framer Motion" className='w-8 md:w-5 md:h-5' />
                </div>
              </div>
              <div className="w-[250px] md:w-full p-2 md:px-3 text-white text-[17px] bg-slate-400 rounded-r-lg">
                <p>G-Store is a cutting-edge e-commerce platform offering a seamless shopping experience with an extensive range of products and exceptional customer service. It is an intuitive website that ensures effortless browsing and purchasing, with secure payment options and a robust return policy for peace of mind. G-Store aims to make online shopping convenient, enjoyable, and accessible for everyone.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
