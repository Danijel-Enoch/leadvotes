import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Voting from './Voting'
import CreatePool from './CreatePool'
import Footer from './Footer'
import Link from 'next/link'

const Homepage = () => {
  return (
    <>
    <div className='flex justify-center '>
    <main className='lg:max-w-[1400px] w-[95%] lg:mx-[0px] mx-auto lg:w-full' >
        <Navbar />
        <section className='text-center mt-[51px] lg:mt-[97px] overflow-hidden'>
          <h1 className='text-[30px] leading-[50px] lg:text-[67px] font-semibold lg:leading-[100.5px] '  data-aos="fade-up">Vote Without Rigging</h1>
          <p className='text-[16px] lg:text-[19px] font-medium leading-[28.5px] my-[20px] lg:my-[40px] w-[90%] lg:w-[45%] mx-auto ' data-aos="fade-up">A beauty pageantry is a competition that has traditionally focused on judging and ranking the physical...</p>
          <Link href='/create-poll'>
          <button className='rounded-[40px] border-[1px] border-[#1B5CFE] bg-white hover:bg-[#1B5CFE] hover:text-white w-[172px] h-[57px] text-[#202020] text-[18px] font-bold leading-[27px] mt-[20px] lg:mt-[0px] '  data-aos="fade-up">Create poll</button></Link>
        </section>
        <About />
    </main>
    </div>
    <div className='w-full'>
    <Voting />
    <Footer />
    </div>
    </>
  )
}

export default Homepage