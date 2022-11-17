import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div name = 'home'   className='w-full h-screen'> 
      <div className ='w-full h-screen overflow-hidden bg-hero  bg-no-repeat bg-center overflow-hidden bg-cover md:bg-fixed sm:bg-scroll'>
        <div className='flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full '>
          <div className = 'flex flex-col text-[#df2027] justify-center md:items-center sm:items-center w-full px-2 py-8  sm:mt-60'>
            <div className='flex flex-col md:items-center md:mb-60 sm:items-center sm:mt-40 gap-4 '>
              <motion.div initial={{opacity:0}} animate={{opacity:1 }} transition={{ delay: 0.6, duration:1}} 
               className='text-8xl font-quirk'>OmaniLancer</motion.div>
              <motion.div initial={{opacity:0}} animate={{opacity:1 }} transition={{ delay: 0.6, duration:1}} 
               className='text-sm mt- font-nordr text-zinc-200/60'>Omani content creators platform</motion.div>

              <div className='mt-12 flex md:flex-row sm:flex-row gap-12'>
                <motion.button initial={{opacity:0}} animate={{opacity:1, y:[20,0] }} transition={{ delay: 0.9, duration:1}} 
                 className="py-2 px-3 font-geomatik  text-zinc-200 bg-[#3baca0] border-2
                 border-[#3baca0] hover:bg-transparent hover:text-[#3baca0] ">Search for Creators</motion.button >
                 <motion.button initial={{opacity:0}} animate={{opacity:1, y:[20,0] }} transition={{ delay: 0.9, duration:1}} 
                   className="py-2 px-3 font-geomatik border-2 text-[#df2027]
                 border-[#df2027] hover:bg-[#df2027] hover:text-white ">Publish Your Work</motion.button >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;