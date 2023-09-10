import React from 'react'
import { FaGithub,FaLinkedin,FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function SocialMedia() {
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
        <li className=' flex bg-gray-500 justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                <a className=' flex text-white justify-between items-center w-full' href='https://www.linkedin.com/in/athul-k-b2113a245/'>Linkedin<FaLinkedin size={30} /></a>
            </li> <li className=' flex bg-gray-500 justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                <a className=' flex text-white justify-between items-center w-full' href='https://github.com/athulkkorom'>Linkedin<FaGithub size={30} /></a>
            </li>
            <li className=' flex bg-gray-500 justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                <a className=' flex text-white justify-between items-center w-full' href='mailto:athulkkorom@gmail.com'>Linkedin<MdEmail size={30} /></a>
                
            </li>
            <li className=' flex bg-gray-500 justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                <a className=' flex text-white justify-between items-center w-full' href=''>Linkedin<FaPhoneAlt size={30} /></a>
            </li>
        </ul>
           
 </div>
  )
}

export default SocialMedia