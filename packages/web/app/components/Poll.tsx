import Image from 'next/image'
import React from 'react'
import add from '../assets/add.png'

const Poll = () => {
  return (
    <main className='flex justify-center overflow-hidden '>
      <section className='pt-[30px] lg:pt-[60px] bg-[#151515] rounded-b-[12px] w-full '>
        <form className='w-fit mx-auto lg:mb-[60px] lg:ml-[45px] text-[12px] lg:text-[25px] font-medium leading-[37.5px] w-[90%] lg:w-full mx-auto '>
          <div className='flex justify-between bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[30px] lg:w-[857px] h-[70px]  lg:h-[102px] '>
            <input className='outline outline-none bg-[#151515] text-[#00000066] text-white  lg:pl-[50px] pl-[15px] rounded-[12px] ' placeholder='Type your Title here...'/>
            <Image src={add} alt='add-img-icon' className='w-[20px] lg:w-[45px] my-auto lg:mr-[30px] mr-[20px] cursor-pointer ' />
          </div>
          <textarea className='outline outline-none bg-[#151515] text-[#00000066] lg:pl-[50px]  pl-[15px] pt-[17px] lg:pt-[34px] rounded-[12px] border-[2px] text-white border-[#939393] lg:w-[857px] h-[170px] lg:h-[272px] w-full ' placeholder='Type a brief description here...' />
          <div className='w-full lg:w-fit mx-auto my-[23px] '>
          <button className='font-semibold text-white bg-[#1B5CFE] lg:w-[723px] w-full h-[50px] lg:h-[76px] rounded-[10px] hover:bg-[#1948b5] ' data-aos="zoom-in">Create Poll</button>
          </div>
        </form>

      </section>


    </main>
  )
}

export default Poll 