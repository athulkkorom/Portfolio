import React from 'react'

function About() {
  return (
    <div name='About' className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' max-w-lg p-4 justify-center items-center mx-auto w-full h-full'>
            <div  className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 '>
                    About
                </p>
            </div>
            <p className=' text-gray-500 text-xl mt-20'>
            A full-stack developer with passion and self-taught training who is able to pick up and use the newest technologies a strong work ethic
 and sense of duty to monitor and assess progress until the task at hand is finished. possess a strong dedication to the team atmosphere
 and take pleasure in working both independently and as a team member. works tenaciously and with strong passion to accomplish
 things in an innovative and productive way
            </p>
        </div>
    </div>
  )
}

export default About