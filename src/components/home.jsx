import React from 'react';


const Home = () => {
  return (
    <div name = 'home'   className='w-full h-screen'> 
      <div className ='w-full h-screen overflow-hidden'>
        <div className='flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full bg-zinc-200'>
          <div className = 'flex flex-col text-[#36382e] justify-center md:items-center sm:items-center w-full px-2 py-8  sm:mt-60'>
            <div className='flex flex-col md:items-center md:mb-60 sm:items-center sm:mt-40 '>
              <div className='text-5xl font-bold font-Jali_med'>مرحبا بكم في عماني لانسر</div>
              <div className='mt-5 flex md:flex-row sm:flex-row gap-4'>
                <button className="py-2 px-3 font-Jali_med text-zinc-200 bg-[#f06449] border-2
                 border-[#f06449] hover:bg-transparent hover:text-[#f06449] ">ابحث عن صانعي محتوى</button>
                 <button className="py-2 px-3 font-Jali_med border-2 text-[#f06449]
                 border-[#f06449] hover:bg-[#f06449] hover:text-white "> انشر أعمالك</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;