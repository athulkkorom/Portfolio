import React from 'react'
import html from '../Assets/html.jpg'
import reactjs from '../Assets/react.jpg'
import mongo from '../Assets/mongo.jpg'
import node from '../Assets/node.jpg'
import javascript from '../Assets/javascript.jpg'
import tailwind from '../Assets/tailwind.jpg'
import css from '../Assets/css1.jpg'
import git from '../Assets/git.jpg'
function Experience() {
  return (
    <div name='Experience' className='  bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
        <div className=' max-w-lg p-4 mx-auto  w-full h-full text-white'>
            <div>
                <div className=' pb-4'>
                <p className=' text-4xl border-b-4  inline'>Experience</p>
                </div>
                <p className=' text-gray-500 text-xl'>These are the technologies I'have worked with</p>
            </div>
            <div className=' w-full grid grid-cols-3 sm:grid-cols-4 gap-8 sm:px-0 text-center'>
                <div className=' shadow-md shadow-orange-500 '>
            <img className=' mt-10 hover:scale-105 w-30' src={html} alt='' />
            <p>HTML</p>
            </div>
            <div className=' shadow-md shadow-blue-500 '>
            <img className=' mt-10 hover:scale-105 w-30 h-30' src={reactjs} alt='' />
            <p>REACT</p>
            </div>
            <div className=' shadow-md shadow-lime-500 '>
            <img className=' mt-10 hover:scale-105 w-30' src={node} alt='' />
            <p>Node JS</p>
            </div>
            <div className=' shadow-md shadow-green-500 '>
            <img className=' mt-10 hover:scale-105 w-30' src={mongo} alt='' />
            <p>MONGOO DB</p>
            </div>
            <div className=' shadow-md shadow-yellow-500 '>
            <img className=' mt-10 hover:scale-105 w-30' src={javascript} alt='' />
            <p>JAVA SCRIPT</p>
            </div>
            <div className=' shadow-md shadow-cyan-500 '>
            <img className=' mt-10 hover:scale-105 w-30' src={tailwind} alt='' />
            <p>TAILWIND</p>
            </div>
            <div className=' shadow-md shadow-blue-800 '>
            <img className=' mt-10 hover:scale-105 w-30' src={css} alt='' />
            <p>CSS</p>
            </div>
            <div className=' shadow-md shadow-purple-500 '>
            <img className=' mt-10 hover:scale-105 w-30' src={git} alt='' />
            <p>GIT</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Experience