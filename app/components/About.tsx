import Image from 'next/image'
import React from 'react';
import john from '../assets/john.svg'

const About = () => {
  return (
    <main className='flex justify-center mt-[78px] lg:mt-[152px] overflow-hidden '>
        <section className='flex lg:flex-row flex-col-reverse  mx-auto w-fit '>
            <Image src={john} alt='john-doe' className='lg:ml-[51px] w-[90%] lg:w-[507px] mx-auto lg:mx-[0px] mt-[40px] lg:mt-[0px] ' data-aos="fade-right"/>
            <section className='lg:ml-[51px] w-fit  lg:text-left text-center '  data-aos="fade-left">
                <h2 className='text-[20px] font-bold leading-[30px] text-[#1B5CFE] lg:w-fit '>ABOUT US</h2>
                <h1 className='text-[18px] leading-[32px] lg:text-[35px] font-medium lg:leading-[52.5px] w-[80%] mx-auto lg:mx-[0px] lg:w-[65%] mt-[15px] lg:mt-[0px] '>We Can Work Together To Create a Better Future.</h1>
                <p className='lg:text-[19px] text-[18px] font-medium leading-[28.5px] my-[15px] lg:my-[25px] lg:w-[66%] w-[95%] mx-auto lg:mx-[0px] '>The leader is eager to listen to the needs of the youth generation and to hear what solutions they have to the problems they are facing. He hopes to find solutions that will help them lead meaningful lives and make lasting change in the world.</p>
                <p className='mt-[15px] lg:w-[572px] lg:text-[19px] text-[18px] font-medium leading-[28.5px]  my-[15px] lg:my-[25px] lg:w-[66%] w-[95%] mx-auto lg:mx-[0px]'>He believes that the collaboration between the youth and the leaders of society is necessary to bring about a brighter future. Now, he is ready to take the first step to making that happen.</p>
                <p className='border-l-[#1B5CFE] border-l-[1.5px] lg:border-l-[3px] pl-[10px] lg:pl-[16px] mb-[15px] lg:mb-[31px] text-[17px] lg:text-[22px] font-medium leading-[28px] lg:leading-[33px]  lg:w-[66%] w-[95%] mx-auto lg:mx-[0px] text-left'>“We can start by taking small steps and making small changes that can have a big impact on the world.”</p>
                <div className='lg:w-[66%] w-[95%] mx-auto lg:mx-[0px] bg-[#555555] h-[2px] mb-[8px] lg:mb-[15px] '></div>
                <h1 className='text-[25px] font-medium leading-[37.5px] text-[#1B5CFE] lg:w-fit text-left w-[95%] mx-auto lg:mx-[0px]'>John Doe</h1>
                <h1 className='text-[22px] font-medium leading-[33px] lg:w-fit text-left w-[95%] mx-auto lg:mx-[0px] ' >CEO & Founder of Leadvote</h1>
            </section>

        </section>

    </main>
  ) 
}

export default About 