import React from 'react'
import myImg from '../Assets/Athul.jpg'
import {BiRightArrowAlt} from 'react-icons/bi'
function Home() {
  return (
    <div name='Home' className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className=' max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row text-white pt-20'>
            <div className=' flex flex-col justify-center items-center'>
                <h1 className=' text-4xl md:text-7xl'>I'm a Full Stack Developer</h1>
                <p className=' text-gray-500 py-4'>A full-stack developer with passion and self-taught training who is able to pick up and use the newest technologies a strong work ethic
 and sense of duty to monitor and assess progress until the task at hand is finished. possess a strong dedication to the team atmosphere
 and take pleasure in working both independently and as a team member. works tenaciously and with strong passion to accomplish
 things in an innovative and productive way. </p>
    <button className=' group flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 mx-4 py-3 my-2 text-white rounded-md'>
        Portfolio
        <span className=' group-hover:rotate-90 duration-300'>
            <BiRightArrowAlt size={25} />
        </span>

    </button>
            </div>
            <div>
            <img src={myImg} alt='' className=' rounded-2xl mx-auto w-1/3 md:w-full pt-4' />
        </div>
        </div>
    </div>
  )
}

export default Home