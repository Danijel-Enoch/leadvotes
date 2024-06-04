import Image from 'next/image'
import React from 'react'
import Youtube from '../assets/YouTube.svg'
import LinkedIn from '../assets/LinkedIn.png'
import  Twitter  from '../assets/Twitter.svg'
import Facebook from '../assets/Facebook.svg'
import Instagram from '../assets/Instagram.png'
import copyright from '../assets/copyright.svg'


const Footer = () => {
  return (
    <main className='flex justify-center mt-[139px] '>
        <section className='w-[80%] bg-[#1E1E1EA8] border-[1px] border-[#858585] rounded-t-[26px] flex justify-center '>
            <div className='mt-[50px] '>
                <section className='flex cursor-pointer justify-between w-[335px] mb-[27.5px] mx-auto '>
                    <Image src={Facebook} alt='facebook' className='' />
                    <Image src={Twitter} alt='Twitter' className='' />
                    <Image src={Instagram} alt='Instagram' className='' />
                    <Image src={LinkedIn} alt='LinkedIn' className='' />
                    <Image src={Youtube} alt='Youtube' className='' />
                </section>
                <div className='bg-[#969696] h-[1.5px] w-[500px] mb-[20px] '></div>
                <div className='flex w-fit mx-auto mb-[45px] ' >
                    <Image src={copyright} alt='copyright' className='' />
                    <h1 className='text-[#FFFFFFB2] text-[20px] font-medium leading-[24.5px] ml-[5px] '>2024</h1>
                </div>
            </div>

        </section>

    </main>
  )
}

export default Footer