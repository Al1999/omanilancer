import React from 'react';


const Home = () => {
  return (
    <div name = 'home'   className='w-full h-screen'> 
      <div className ='w-full h-screen bg-center overflow-hidden bg-cover md:bg-fixed sm:bg-scroll'>
        <div className='flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full bg-zinc-100 '>
          <div className = 'flex flex-col justify-center md:items-center sm:items-center w-full px-2 py-8  sm:mt-60'>
            <div className='flex flex-col md:items-center md:mb-60 sm:items-left sm:mt-40 font-helvetica '>
              <div className='text-3xl font-bold font-Jali_med'>مرحبا بكم في عماني لانسر</div>
              <div>
                <button className=""></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;