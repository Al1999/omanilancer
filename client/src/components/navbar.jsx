import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaBars,
    FaTimes,
  } from 'react-icons/fa';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();
  return (
    <motion.div className='fixed w-full h-[80px] flex flex-col  py-4 justify-between md:items-center sm:items-end px-4 text-[#df2027] text-xl'>
        <ul className='hidden md:flex gap-4 mr-6 font-bold mt-4  '>
        <motion.li initial={{opacity:0}} animate={{opacity:1, y:[20,0] }} transition={{ delay: 0.5, duration:1}} >
        <button onClick={() => navigate('/')} className='hover:text-white font-geomatik transition  py-2 px-10 duration-300 ease-in-out'>
            Home          
          </button>
          <button onClick={() => navigate('/about')}   className='hover:text-white font-geomatik transition  py-2 px-10 duration-300 ease-in-out'>
            About Us          
          </button>
          <button className='hover:text-white font-geomatik transition  py-2 px-10 duration-300 ease-in-out'>
            Sign In         
          </button>


        </motion.li>
      </ul>
      <motion.div     initial={{ opacity: 0, y:20 }}
    animate={{ opacity: 0.8, y: 0 }}
    transition={{ duration: 1 }} className='ml-4'>
      </motion.div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-zinc-900/70 text-zinc-200 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl flex flex-col gap-9'>
          <button onClick={() => navigate('/')} className='hover:text-[#df2027] font-geomatik transition  py-2 px-10 duration-300 ease-in-out'>
            Home          
          </button>
          <button onClick={() => navigate('/about')}   className='hover:text-[#df2027] font-geomatik transition  py-2 px-10 duration-300 ease-in-out'>
            About Us          
          </button>
          <button className='hover:text-[#df2027] font-geomatik transition  py-2 px-10 duration-300 ease-in-out'>
            Sign In         
          </button>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;