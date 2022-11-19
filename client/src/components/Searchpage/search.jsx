import React from 'react';
import { motion } from 'framer-motion';
// import {useNavigate} from 'react-router-dom';


const Search = () => {

  return (
    <div name = 'About'   className='w-full h-screen'> 
      <div className ='w-full h-screen overflow-hidden bg-hero  bg-no-repeat bg-center
       overflow-hidden bg-cover md:bg-fixed sm:bg-scroll'>
        <div className='flex flex-row md:flex-row  w-full h-full '>
            <div className='h-screen w-full flex flex-row items-start justify-start px-40 py-80 gap-9'>
                <div className='flex flex-row items-center p-4 bg-gray-900/40 md:h-full md:w-60 rounded-3xl'> 
                  <div className='flex flex-col items-center md:w-60 gap-9'>
                  <button className='flex flex-col items-center font-geomatik
                    hover:text-[#df2027] transition duration-300 ease-in-out '>
                      <svg className="w-18 h-18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0
                        01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        <div className='text-lg'>Filmmakers</div>
                    </button>
                    <button className='flex flex-col items-center font-geomatik
                    hover:text-[#df2027] transition duration-300 ease-in-out '>
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0
                          002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                        <div className='text-lg'>Color Grader</div>
                    </button>
                    <button className='flex flex-col items-center font-geomatik
                    hover:text-[#df2027] transition duration-300 ease-in-out '>
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0
                           010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                        <div className='text-lg'>Sound Designer</div>
                    </button>
                    <button className='flex flex-col items-center font-geomatik
                    hover:text-[#df2027] transition duration-300 ease-in-out '>
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2
                           2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <div className='text-lg'>Photographer</div>
                    </button>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-12'>
                  <motion.div initial={{opacity:0}} animate={{opacity:1 }} transition={{ delay: 0.6, duration:1}} 
                        className='text-5xl font-quirk '> Search for a creator</motion.div>
                  
                </div>

            </div>
        </div>
      </div>
    </div>

  )
}

export default Search;