import { MdOutlineMail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-slate-800'>
        <div className='flex justify-center pt-5 gap-10 *:text-white '>
        <a href="mailto:gladysalu1@gmail.com" target="_blank" rel="noopener noreferrer">
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
        <div className="text-center">
          <p className="pt-5 pb-5 text-white"><i>Lagos| © 2024</i> <span className="text-purple-400 underline cursor-pointer font-bold">Gladys Alu</span></p>
        </div>
    </div>
  )
}

export default Footer