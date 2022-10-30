import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
    FaBars,
    FaTimes,
  } from 'react-icons/fa';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <motion.div className='fixed w-full h-[80px] flex justify-between items-center px-4  text-zinc-900 text-xl'>
        <ul className='hidden md:flex gap-6 mr-6 font-bold  '>
        <motion.li initial={{opacity:0}} animate={{opacity:1, y:[20,0] }} transition={{ delay: 0.5, duration:1}} >
          <button className='hover:bg-black hover:text-white font-Jali_med transition border-black py-2 px-4 border-4 duration-300 ease-in-out'>
            تسجيل الدخول
          </button>

        </motion.li>
      </ul>
      <motion.div     initial={{ opacity: 0, y:20 }}
    animate={{ opacity: 0.8, y: 0 }}
    transition={{ duration: 1 }} className='ml-4'>
      <div className='font-Jali_med font-bold text-2xl py-2 px-4 bg-black text-zinc-100 '>عماني لانسر</div>
      </motion.div>

      {/* menu */}


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
        <li className='py-6 text-4xl'>
          <button className='hover:scale-110 font-Jali_med transition duration-300 ease-in-out'>
            تسجيل الدخول
          </button>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;