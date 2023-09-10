import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function NavBar() {
  const [nav, setNav] = useState(false);
  
  return (
    <div className='flex justify-between w-full h-20 bg-black text-white items-center px-4 fixed'>
      <div>
        <h1 className='text-5xl font-signature'>Athul k</h1>
      </div>
      <ul className='cursor-pointer hidden md:flex'>
        <li className='px-4 hover:scale-105 duration-200 text-gray-500 capitalize'> <Link to='Home' smooth duration={500}>Home</Link></li>
        <li className='px-4 hover:scale-105 duration-200 text-gray-500 capitalize'>
          <Link to='About' smooth duration={500}>About</Link>
        </li>
        <li className='px-4 hover:scale-105 duration-200 text-gray-500 capitalize'><Link to='Experience' smooth duration={500}>Experience</Link></li>
        <li className='px-4 hover:scale-105 duration-200 text-gray-500 capitalize'><Link to='Contact' smooth duration={500}>Contact</Link></li>
      </ul>
      <div className='cursor-pointer md:hidden' onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        {nav && (
          <ul className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500'>
            <li className='text-4xl hover:scale-105 duration-200 text-gray-500 capitalize'> <Link onClick={()=> setNav(!nav)}  to='Home' smooth duration={500}>Home</Link></li>
            <li className='text-4xl hover:scale-105 duration-200 text-gray-500 capitalize'>
              <Link onClick={()=> setNav(!nav)} to='About' smooth duration={500}>About</Link>
            </li>
            <li className='text-4xl hover:scale-105 duration-200 text-gray-500 capitalize'>
            <Link onClick={()=> setNav(!nav)} to='Experience' smooth duration={500}>Experience</Link></li>
            <li className='text-4xl hover:scale-105 duration-200 text-gray-500 capitalize'>
            <Link onClick={()=> setNav(!nav)} to='Contact' smooth duration={500}>Contact</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
