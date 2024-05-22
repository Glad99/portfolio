import { motion } from "framer-motion"

const About = () => {
  return (
    <div id='about' className='pt-3 md:pt-24 bg-gray-100 rounded-tr-full rounded-bl-full  '>
      <div className='px-8 md:px-14 lg:mx-[15rem] font-semibold '>
        <div className=''>
        <h1 className='text-2xl font-bold md:text-3xl mb-5 text-gray-500 text-center'>About Me</h1>
        <p className='text-lg md:text-xl'>Hi! I'm <span className='text-purple-900 font-bold'>Gladys</span>, an enthusiastic web developer with a deep passion for crafting visually captivating designs that fascinate audiences. I am committed to the belief that outstanding design should be accessible to all, and this principle inspires me to create intuitive, user-friendly websites that leave a lasting impression.

        As an emerging Frontend Developer, I possess a formidable array of skills in HTML, CSS, JavaScript, React, and Tailwind CSS.

        My skill set focuses on developing dynamic, engaging interfaces through the implementation of clean, efficient code and the utilization of sophisticated development tools and methodologies. Moreover, I enjoy the dynamic nature of my work and thrive in team-oriented settings, collaborating with multidisciplinary teams to create exceptional web applications.</p>
</div>
     <a href="https://drive.google.com/file/d/1t1IyNkFtmCRyvbSuT1YRDwaOjA8lqDT6/view?usp=drive_link"> <motion.button className='px-3 py-2 mt-10 text-lg font-semibold rounded border-4  border-solid border-purple-900 text-purple-900 shadow-xl hover:bg-slate-700 hover:text-white hover:border-none hover:py-3 hover:px-4'
      initial={{x: '-100vw'}}
      animate={{x: 0}}
      transition={{type: 'spring', stiffness:120}}
      whileHover={{scale: 1.1,
      textShadow: "0px 0px 8px rgb(255, 255, 255)"
      }}
      >Download CV</motion.button></a>
      </div>
    </div>
  )
}

export default About