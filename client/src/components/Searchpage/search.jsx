import React from 'react';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';


defineElement(lottie.loadAnimation);


const Search = () => {

  return (
    <div name = 'About'   className='w-full h-screen'> 
      <div className ='w-full h-screen overflow-hidden bg-hero  bg-no-repeat bg-center
       overflow-hidden bg-cover md:bg-fixed sm:bg-scroll'>
        <div className='flex flex-row md:flex-row  w-full h-full '>
            <div className='h-screen   flex flex-col items-center justify-end '>
                <lord-icon trigger="hover" src="../src/assets/32-videocam-outline-edited(1).json"></lord-icon>
                <div className='flex flex-col mb-80'>
                  <motion.div initial={{opacity:0}} animate={{opacity:1 }} transition={{ delay: 0.6, duration:1}} 
                        className='text-5xl font-quirk rotate-[270deg]'> Search for a creator</motion.div>
                </div>

            </div>
        </div>
      </div>
    </div>

  )
}

export default Search;