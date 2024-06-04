import React from 'react'
import VotingDetails from '../data.json'
import Image from 'next/image';
import yellow from '../assets/yellow.svg'
import river from '../assets/river.svg'
import mount from '../assets/mount.svg'
import trees from '../assets/trees.png';
import box from '../assets/box.png'
import brown from '../assets/brown.png';
import ice from '../assets/ice.png'
import bush from '../assets/bush.png'

interface VotingData {
    title: string;
    date: string;
    address: string
}

const Voting = () => {

  const votes: VotingData[] = VotingDetails; 
  return (
    <main className='flex justify-center mt-[152px]  overflow-hidden '>
        <section>
            <h1 className='text-center text-[50px] font-semibold leading-[75px] mb-[62px]  ' data-aos="fade-up">Start Voting</h1>
            {votes.map((vote, index) => (
              <section key={index}>
                <div className='grid grid-cols-2 w-full justify-between mb-[70px] '>
                  <div className='flex mb-[80px]' data-aos="fade-up" data-duration="1400">
                    <div className='bg-[#151515] rounded-[25px] pt-[28px] px-[28px] '>
                      <h1 className='text-[22px] font-semibold leading-[33px]  '>{vote.title}</h1>
                      <p className='text-[15px] font-medium leading-[22.5px] w-[330px] my-[27px] '>A beauty pageantry is a competition that has traditionally focused on judging and ranking the physical...</p>
                      <div className='flex justify-between w-full mb-[26px] '>
                        <div className='bg-[#2C2C2C] rounded-[21px] text-[12px] font-semibold leading-[18px] py-[5px] px-[10px] my-auto '>{vote.date}</div>
                        <div className='flex'>
                          <div  className='bg-[#2C2C2C] rounded-[50%] w-[35px] h-[35px] '></div>
                          <p className='my-auto text-[14px] font-semibold leading-[21px] ml-[11px] '>{vote.address}</p>
                        </div>
                      </div>
                      <button className='w-full bg-[#1B5CFE] hover:bg-[#1948b5] py-[12px] rounded-[81px] text-[15px] font-semibold leading-[22.5px] mb-[15px] '>Enter</button>
                    </div>
                    <section className='ml-[10px] '>
                      <Image src={yellow} alt='flower' className='mb-[8px] ' />
                      <Image src={river} alt='river' className='' />
                    </section>

                  </div>
                  <div className='flex ml-[68px] mb-[80px]'  data-aos="fade-up" data-duration="1500">
                    <div className='bg-[#151515] rounded-[25px] pt-[28px] px-[28px] '>
                      <h1 className='text-[22px] font-semibold leading-[33px]  '>{vote.title}</h1>
                      <p className='text-[15px] font-medium leading-[22.5px] w-[330px] my-[27px] '>A beauty pageantry is a competition that has traditionally focused on judging and ranking the physical...</p>
                      <div className='flex justify-between w-full mb-[26px] '>
                        <div className='bg-[#2C2C2C] rounded-[21px] text-[12px] font-semibold leading-[18px] py-[5px] px-[10px] my-auto '>{vote.date}</div>
                        <div className='flex'>
                          <div  className='bg-[#2C2C2C] rounded-[50%] w-[35px] h-[35px] '></div>
                          <p className='my-auto text-[14px] font-semibold leading-[21px] ml-[11px] '>{vote.address}</p>
                        </div>
                      </div>
                      <button className='w-full bg-[#1B5CFE] hover:bg-[#1948b5] py-[12px] rounded-[81px] text-[15px] font-semibold leading-[22.5px] mb-[15px] '>Enter</button>
                    </div>
                    <section className='ml-[10px] '>
                      <Image src={mount} alt='flower' className='mb-[8px] ' />
                      <Image src={trees} alt='river' className='' />
                    </section>

                  </div>
                  <div className='flex'  data-aos="fade-up" data-duration="1600">
                    <div className='bg-[#151515] rounded-[25px] pt-[28px] px-[28px] '>
                      <h1 className='text-[22px] font-semibold leading-[33px]  '>{vote.title}</h1>
                      <p className='text-[15px] font-medium leading-[22.5px] w-[330px] my-[27px] '>A beauty pageantry is a competition that has traditionally focused on judging and ranking the physical...</p>
                      <div className='flex justify-between w-full mb-[26px] '>
                        <div className='bg-[#2C2C2C] rounded-[21px] text-[12px] font-semibold leading-[18px] py-[5px] px-[10px] my-auto '>{vote.date}</div>
                        <div className='flex'>
                          <div  className='bg-[#2C2C2C] rounded-[50%] w-[35px] h-[35px] '></div>
                          <p className='my-auto text-[14px] font-semibold leading-[21px] ml-[11px] '>{vote.address}</p>
                        </div>
                      </div>
                      <button className='w-full bg-[#1B5CFE] hover:bg-[#1948b5] py-[12px] rounded-[81px] text-[15px] font-semibold leading-[22.5px] mb-[15px] '>Enter</button>
                    </div>
                    <section className='ml-[10px] '>
                      <Image src={box} alt='flower' className='mb-[8px] ' />
                      <Image src={brown} alt='river' className='' />
                    </section>

                  </div>
                  <div className='flex ml-[68px]'  data-aos="fade-up" data-duration="1700">
                    <div className='bg-[#151515] rounded-[25px] pt-[28px] px-[28px] '>
                      <h1 className='text-[22px] font-semibold leading-[33px]  '>{vote.title}</h1>
                      <p className='text-[15px] font-medium leading-[22.5px] w-[330px] my-[27px] '>A beauty pageantry is a competition that has traditionally focused on judging and ranking the physical...</p>
                      <div className='flex justify-between w-full mb-[26px] '>
                        <div className='bg-[#2C2C2C] rounded-[21px] text-[12px] font-semibold leading-[18px] py-[5px] px-[10px] my-auto '>{vote.date}</div>
                        <div className='flex'>
                          <div  className='bg-[#2C2C2C] rounded-[50%] w-[35px] h-[35px] '></div>
                          <p className='my-auto text-[14px] font-semibold leading-[21px] ml-[11px] '>{vote.address}</p>
                        </div>
                      </div>
                      <button className='w-full bg-[#1B5CFE] hover:bg-[#1948b5] py-[12px] rounded-[81px] text-[15px] font-semibold leading-[22.5px] mb-[15px] '>Enter</button>
                    </div>
                    <section className='ml-[10px] '>
                      <Image src={ice} alt='flower' className='mb-[8px] ' />
                      <Image src={bush} alt='river' className='' />
                    </section>
                  </div>
                </div>
                <button  data-aos="fade-up" data-duration="1800" className='bg-[#1B5CFE] hover:bg-[#1948b5] rounded-[110px]  text-[25px] font-semibold leading-[37.5px] mx-auto w-fit px-[40px] py-[19px] flex '>See more</button>

              </section>
            )) }
        </section>
    </main>
  )
}

export default Voting