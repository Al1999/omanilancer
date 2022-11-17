import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name = 'About'   className='w-full h-screen'> 
      <div className ='w-full h-screen overflow-hidden bg-hero  bg-no-repeat bg-center overflow-hidden bg-cover md:bg-fixed sm:bg-scroll'>
        <div className='flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full '>
          <div className = 'flex flex-col text-[#df2027] justify-center md:items-center sm:items-center w-full px-2 py-8  sm:mt-60'>
            <div className='flex flex-col md:items-center md:mb-60 sm:items-center sm:mt-40 gap-4 '>
                <motion.div initial={{opacity:0}} animate={{opacity:1 }} transition={{ delay: 0.6, duration:1}} 
                className='text-8xl font-bold font-ubuntu'> نبذة عنا </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;