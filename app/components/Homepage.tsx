import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Voting from './Voting'
import CreatePool from './CreatePool'
import Footer from './Footer'

const Homepage = () => {
  return (
    <main>
        <Navbar />
        <section className='text-center mt-[97px] '>
          <h1 className='text-[67px] font-semibold leading-[100.5px] '  data-aos="fade-up">Vote Without Rigging</h1>
          <p className='text-[19px] font-medium leading-[28.5px] my-[40px] w-[45%] mx-auto ' data-aos="fade-up">A beauty pageantry is a competition that has traditionally focused on judging and ranking the physical...</p>
          <button className='rounded-[40px] bg-white hover:bg-[#1B5CFE] hover:text-white w-[172px] h-[57px] text-[#202020] text-[18px] font-bold leading-[27px]  '  data-aos="fade-up">Create poll</button>
        </section>
        <About />
        <Voting />
        <CreatePool />
        <Footer />
    </main>
  )
}

export default Homepage