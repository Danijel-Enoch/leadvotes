import React from 'react'
import Navbar from './Navbar'

const Homepage = () => {
  return (
    <main>
        <Navbar />
        <section className='text-center mt-[97px] '>
          <h1 className='text-[67px] font-semibold leading-[100.5px] '>Vote Without Rigging</h1>
          <p className='text-[19px] font-medium leading-[28.5px] my-[40px] w-[45%] mx-auto '>A beauty pageantry is a competition that has traditionally focused on judging and ranking the physical...</p>
          <button className='rounded-[40px] bg-white w-[172px] h-[57px] text-[#202020] text-[18px] font-bold leading-[27px]  '>Create poll</button>
        </section>
    </main>
  )
}

export default Homepage