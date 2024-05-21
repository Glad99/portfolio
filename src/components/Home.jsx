import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import image from '../assets/img.png';
import html  from '../assets/html.svg';
import css  from '../assets/css.webp';
import js  from '../assets/javascript.svg';
import react  from '../assets/react.svg';
import sass  from '../assets/sass.svg';
import tailwind  from '../assets/Tailwind.png';
import { MdOutlineMail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Home = () => {
  return (
        <motion.div className='  bg-gradient-to-b from-purple-50 pt-5 lg:pt-20' id='home'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1, duration: 1}}
        >
      <div className='mx-1 md:mx-10'>
        <div className='fixed hidden lg:flex flex-col gap-10 *:size-7 *:text-gray-500 '>
        <MdOutlineMail className='hover:text-purple-900 cursor-pointer' />
        <IoLogoGithub className='hover:text-purple-900 cursor-pointer'/>
        <IoLogoTwitter className='hover:text-purple-900 cursor-pointer' />
        <FaLinkedinIn className='hover:text-purple-900 cursor-pointer' />
        <FaInstagram className='hover:text-purple-900 cursor-pointer' />
        </div>
        <div className=' flex flex-col lg:flex-row justify-center mt-[5rem]'>
        <div className='ml-5 lg:ml-0 lg:mx-[8rem] lg:w-[38rem]'>
            <p className='text-2xl mb-5 text-purple-900 '>Hello, </p>
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-1 '> I'm Gladys Alu.</p>
            <p className='text-3xl md:text-4xl mb-5 text-gray-500 font-bold lg:text-5xl'>Frontend Web Developer.</p>
            <p className='text-lg md:text-xl font-semibold'>I love creating responsive user friendly websites, posses necessary skills and currently available for new opportunities</p>
            <motion.button className='px-3 py-2 mt-10 text-lg font-bold rounded border-4  border-solid border-purple-900 text-purple-900 shadow-xl hover:bg-slate-700 hover:text-white hover:border-none hover:py-3 hover:px-4' 
            initial={{x: '-100vw'}}
            animate={{x: 0}}
            transition={{type: 'spring', stiffness:120}}
            whileHover={{scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)"
            }}
            >Get In Touch</motion.button>
        </div>
        <motion.div className='flex items-center justify-center'
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{type: 'spring', delay: 0.5}}
        >
            <img src={image} alt="" className='rounded-full size-[15rem] md:size-[20rem] flex items-center justify-center' />
        </motion.div>
        </div>
      </div>
      <div className='mx-5 my-10 md:my-14 lg:mt-[5rem]'>
    <h2 className='text-xl md:text-2xl text-center font-semibold'>Tech Stack</h2>
    <div className='flex justify-between md:justify-center md:gap-20 mt-8'>
    <img src={html} alt="" className='size-10' />
    <img src={css} alt="" className='size-10' />
    <img src={js} alt="" className='size-10' />
    <img src={react} alt="" className='size-10' />
    <img src={tailwind} alt="" className='size-10' />
    <img src={sass} alt="" className='size-10' />
    </div>
</div>
    </motion.div>
  )
}

export default Home