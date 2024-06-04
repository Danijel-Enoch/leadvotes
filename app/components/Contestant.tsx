import Image from 'next/image'
import React from 'react'
import add from '../assets/add.png'
import Link from 'next/link'

const Contestant = () => {
  return (
    <main className='flex justify-center' data-aos="fade-out">
      <section className='pt-[60px] bg-[#F9F9F9] rounded-b-[12px] w-full '>
        <form className='w-fit mx-auto text-[25px] font-medium leading-[37.5px] '>
          <div className='flex justify-between bg-[#F9F9F9] rounded-[12px] border-[2px] border-[#939393] mb-[30px] w-[857px] h-[102px] '>
            <input className='outline outline-none bg-[#F9F9F9] text-[#00000066] pl-[50px] ' placeholder='Type your Title here...'/>
            <Image src={add} alt='add-img-icon' className='w-[45px] my-auto mr-[30px] cursor-pointer ' />
          </div>
          <textarea className='outline outline-none bg-[#F9F9F9] text-[#00000066] pl-[50px] pt-[34px] rounded-[12px] border-[2px] border-[#939393] w-[857px] h-[272px] ' placeholder='Type a brief description here...' />
          <div className='w-fit mx-auto my-[23px] '>
            <Link href='/votes'>
          <button className='font-semibold text-white bg-[#1B5CFE] w-[723px]  h-[76px] rounded-[10px] hover:bg-[#1948b5] '>Contestant</button>
          </Link>
          </div>
        </form>

      </section>


    </main>
  )
}

export default Contestant