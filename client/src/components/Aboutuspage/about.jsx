import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name = 'About'   className='w-full h-screen'> 
      <div className ='w-full h-screen overflow-hidden bg-hero  bg-no-repeat bg-center overflow-hidden bg-cover md:bg-fixed sm:bg-scroll'>
        <div className='flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full '>
          <div className = 'flex flex-row text-[#df2027] justify-center md:items-center sm:items-center w-full px-2 py-8  sm:mt-60'>
            <div className='md:items-center md:mb-60 sm:items-center sm:mt-40 gap-4 '>
                <motion.div initial={{opacity:0}} animate={{opacity:1 }} transition={{ delay: 0.6, duration:1}} 
                className='text-9xl font-bold font-quirk rotate-[270deg]'> About Us </motion.div>
            </div>
            <div className='md:items-center md:mb-60 sm:items-center sm:mt-40 '>
                <motion.div initial={{opacity:0}} animate={{opacity:1 }} transition={{ delay: 0.6, duration:1}} 
                className='text-white text-lg font-geomatik leading-loose text-left w-80'>
                  Omanilancers is a web application
                  that provides multiple services to Omani content creators to help them promote their contents as well
                   as help clients to find the right content creator to promot their business or help them in their project.
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;