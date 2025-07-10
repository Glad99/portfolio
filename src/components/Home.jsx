import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import { Cursor, useTypewriter } from "react-simple-typewriter";
import image from '../assets/img.png';
import html  from '../assets/html.svg';
import css  from '../assets/css.webp';
import js  from '../assets/javascript.svg';
import react  from '../assets/react.svg';
import sass  from '../assets/sass.svg';
import tailwind  from '../assets/Tailwind.png';
import framerMotion from '../assets/framer-motion.png'
import gsap from '../assets/gsap.jpg'
import { MdOutlineMail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, count] = useTypewriter({
    words: ["Fullstack Web Developer.", "Frontend Web Developer."],
    loop: true,
    delaySpeed: 2000,
  });
  
  
  const email = "gladysalu1@gmail.com";
    const subject = "Subject Text";
    const body = "Body Text";
  return (
        <motion.div className='  bg-gradient-to-b from-purple-50 pt-5 lg:pt-20' id='home'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1, duration: 1}}
        >
      <div className='mx-1 md:mx-10'>
        <div className='fixed hidden lg:flex flex-col gap-10  *:text-gray-500 z-50 '>
        <a href="mailto:gladysalu1@gmail.com">
                <MdOutlineMail className='hover:text-purple-900 cursor-pointer size-7' />
            </a>
            <a href="https://github.com/Glad99" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub className='hover:text-purple-900 cursor-pointer size-7' />
            </a>
            <a href="https://x.com/Gladiz001" target="_blank" rel="noopener noreferrer">
                <IoLogoTwitter className='hover:text-purple-900 cursor-pointer size-7' />
            </a>
            <a href="https://www.linkedin.com/in/gladys-alu/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className='hover:text-purple-900 cursor-pointer size-7'/>
            </a>
            <a href="https://www.instagram.com/gladyztee/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='hover:text-purple-900 cursor-pointer size-7' />
            </a>
        </div>
        <div className=' flex flex-col lg:flex-row justify-center mt-[5rem]'>
        <div className='ml-5 lg:ml-0 lg:mx-[8rem] lg:w-[38rem]'>
            <p className='text-2xl mb-5 text-purple-900 '>Hello, </p>
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-1 '> I'm Gladys Alu.</p>
            <p className='text-3xl md:text-4xl mb-5 text-gray-500 font-bold lg:text-5xl'>{text}
         <Cursor cursorColor="#0077b5" /></p>
            <p className='text-lg md:text-xl font-semibold'>I love creating responsive user friendly websites, posses necessary skills and currently available for new opportunities.</p>
            <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="contact-button"
        >
            <motion.button 
                className='px-3 py-2 mt-10 text-lg font-bold rounded border-4 border-solid border-purple-900 text-purple-900 shadow-xl hover:bg-slate-700 hover:text-white hover:border-none hover:py-3 hover:px-4' 
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 120 }}
                whileHover={{ 
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255, 255, 255)" 
                }}
            >
                Get In Touch
            </motion.button>
        </a>
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
      <div className='md:mx-5 my-10 md:my-14 lg:mt-[5rem]'>
    <h2 className='text-xl md:text-2xl text-center font-semibold'>Tech Stack</h2>
    <div className='logos flex md:overflow-hidden '>
    <div className='logos-slide flex justify-between gap-2 md:gap-10 md:justify-center lg:gap-20 mt-8 '>
    <img src={html} alt="" className='img1 size-10' />
    <img src={css} alt="" className='size-10' />
    <img src={js} alt="" className='size-10' />
    <img src={react} alt="" className='size-10' />
    <img src={tailwind} alt="" className='size-10' />
    <img src={sass} alt="" className='size-10' />
    <img src={framerMotion} alt="" className='size-10' />
    <img src={gsap} alt="" className='size-10' />
    </div>
    <div className='logos justify-between md:justify-center md:gap-20 mt-8 hidden'>
    <img src={html} alt="" className='size-10' />
    <img src={css} alt="" className='size-10' />
    <img src={js} alt="" className='size-10' />
    <img src={react} alt="" className='size-10' />
    <img src={tailwind} alt="" className='size-10' />
    <img src={sass} alt="" className='size-10' />
    <img src={framerMotion} alt="" className='size-10' />
    <img src={gsap} alt="" className='size-10' />
    </div>
    </div>
</div>
    </motion.div>
  )
}

export default Home