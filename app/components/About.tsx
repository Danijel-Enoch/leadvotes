import Image from 'next/image'
import React from 'react';
import john from '../assets/john.svg'

const About = () => {
  return (
    <main className='flex justify-center mt-[152px] '>
        <section className='flex'>
            <Image src={john} alt='john-doe' className='' />
            <section className='ml-[51px] '>
                <h2 className='text-[20px] font-bold leading-[30px] text-[#1B5CFE] '>ABOUT US</h2>
                <h1 className='text-[35px] font-medium leading-[52.5px] w-[65%] '>We Can Work Together To Create a Better Future.</h1>
                <p className='text-[19px] font-medium leading-[28.5px] my-[25px] w-[66%] '>The leader is eager to listen to the needs of the youth generation and to hear what solutions they have to the problems they are facing. He hopes to find solutions that will help them lead meaningful lives and make lasting change in the world.<div className='mt-[15px] w-[572px] '>He believes that the collaboration between the youth and the leaders of society is necessary to bring about a brighter future. Now, he is ready to take the first step to making that happen.</div></p>
                <p className='border-l-[#1B5CFE] border-l-[3px] pl-[16px] mb-[31px] text-[22px] font-medium leading-[33px]  w-[66%]'>“We can start by taking small steps and making small changes that can have a big impact on the world.”</p>
                <div className='w-[66%] bg-[#555555] h-[2px] mb-[15px] '></div>
                <h1 className='text-[25px] font-medium leading-[37.5px] text-[#1B5CFE] '>John Doe</h1>
                <h1 className='text-[22px] font-medium leading-[33px] ' >CEO & Founder of Leadvote</h1>
            </section>

        </section>

    </main>
  ) 
}

export default About 