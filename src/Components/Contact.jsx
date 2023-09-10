import React from 'react'

function Contact() {
  return (
    <div name='Contact' className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black'>
        <div className=' w-full h-full mx-auto max-w-lg pb-4 '>
            <div>
                <h1 className=' text-white text-4xl border-b-4 inline '>Contact</h1>
            </div>
            <div className=' mt-10'>
            <a href='mailto:athulkkorom@gmail.com' className=' flex flex-col text-xl text-gray-500'>Mail:athulkkorom@gmail.com</a>
            <p className=' text-xl text-gray-500 pt-4'>Phone:9539576281</p>
            <div className=' mt-4'>
            <a href='https://www.linkedin.com/in/athul-k-b2113a245/' className=' text-xl text-gray-500 '>Linkedin</a>
            </div>
            <div className=' mt-4'>
            <a href='https://github.com/athulkkorom' className=' text-xl text-gray-500 pt-4'>GitHub</a>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Contact