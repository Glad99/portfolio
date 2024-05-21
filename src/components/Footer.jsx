import { MdOutlineMail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-slate-400'>
        <div className='flex justify-center pt-5 gap-10 *:size-7 *:text-white '>
        <MdOutlineMail className='hover:text-purple-900 cursor-pointer' />
        <IoLogoGithub className='hover:text-purple-900 cursor-pointer'/>
        <IoLogoTwitter className='hover:text-purple-900 cursor-pointer' />
        <FaLinkedinIn className='hover:text-purple-900 cursor-pointer' />
        <FaInstagram className='hover:text-purple-900 cursor-pointer' />
        </div>
        <div className="text-center">
          <p className="pt-5 pb-5"><i>Lagos| © 2024</i> <span className="text-purple-900 hover:underline cursor-pointer font-bold">Gladys Alu</span></p>
        </div>
    </div>
  )
}

export default Footer