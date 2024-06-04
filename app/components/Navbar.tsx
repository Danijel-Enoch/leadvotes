import React from 'react'
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <main className='flex justify-center mt-[30px] '  data-aos="fade-down">
      <section className='w-[80%]'>
        <div className='flex justify-between bg-[#1E1E1E6E] rounded-[66px] border-[2px] border-[#373737] h-[82px] '>
          <h1 className='ml-[30px] my-auto text-[25px] font-medium '><span className='text-[#1b5cfe]'>Lead</span>Votes</h1>
          <button className='bg-[#1B5CFE] hover:bg-[#1948b5] rounded-[89px] h-[53px] my-auto text-[15px] leading-[22.5px] mr-[17px] font-medium  px-[25px] '>
          <ConnectButton />
          </button>
        </div>
      </section>

    </main>
  )
}

export default Navbar