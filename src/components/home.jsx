import React from 'react';


const Home = () => {
  return (
    <div name = 'home'   className='w-full h-screen'> 
      <div className ='w-full h-screen overflow-hidden bg-hero  bg-no-repeat bg-center overflow-hidden bg-cover md:bg-fixed sm:bg-scroll'>
        <div className='flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full '>
          <div className = 'flex flex-col text-[#df2027] justify-center md:items-center sm:items-center w-full px-2 py-8  sm:mt-60'>
            <div className='flex flex-col md:items-center md:mb-60 sm:items-center sm:mt-40 gap-4 '>
              <div className='text-8xl font-bold font-Jali_med'>عماني لانسر</div>
              <div className='text-lg font-Jali_med mt-5 text-zinc-200'>منصة صانعي المحتوى العمانييون</div>

              <div className='mt-12 flex md:flex-row sm:flex-row gap-12'>
                <button className="py-2 px-3 font-Jali_med text-zinc-200 bg-[#3baca0] border-2
                 border-[#3baca0] hover:bg-transparent hover:text-[#3baca0] ">ابحث عن صانعي محتوى</button>
                 <button className="py-2 px-3 font-Jali_med border-2 text-[#df2027]
                 border-[#df2027] hover:bg-[#df2027] hover:text-white "> انشر أعمالك</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;