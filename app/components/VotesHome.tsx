import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import votetree from '../assets/votetree.svg'
import VotingDetails from '../data.json'
import ContestantDetails from './ContestantDetails'
import Footer from './Footer'

interface VotingData{
    voteduration: string
    address: string
}

const VotesHome = () => {

    const votes: VotingData[] = VotingDetails; 
  return (
    <main>
        <Navbar />
        <section className='flex justify-center  overflow-hidden  '>
            <div className='w-[80%] mt-[25px] '>
                <Image src={votetree} alt='tree-img' className='' data-aos="zoom-in" />
                {votes.map((vote, index) => (
                <div  className='font-semibold text-center' key={index}>
                    <h1  className='text-[55px] leading-[82.5px] mt-[60px]' data-aos="zoom-out">Most Influential Student</h1>
                    <p className='text-[19px] font-medium leading-[28.5px] mb-[45px] mt-[20px] w-[80%] mx-auto  '>A beauty pageantry is a competition that has traditionally focused on judging and ranking the physical., A beauty pageantry is a competition that has traditionally focused on judging and ranking the physical...</p>
                    <div className='bg-[#2C2C2C80] rounded-[21px] text-[14px] font-semibold leading-[24px] py-[10px] px-[15px] mx-auto w-fit '>{vote.voteduration}</div>
                    <div className='flex mt-[20px] mx-auto w-fit '>
                          <div  className='bg-[#1B5CFE] rounded-[50%] w-[40px] h-[40px] '></div>
                          <p className='my-auto text-[15px] font-medium leading-[22.5px] ml-[10px] '>{vote.address}</p>
                    </div>
                    <div className='flex w-[535px] justify-evenly mx-auto mt-[30px] '>
                        <button className='w-[177px] h-[44px] rounded-[44px] border-[1px] border-[#636363] text-[20px] leading-[30px]' data-aos="fade-up" data-duration="1400">1 vote</button>
                        <button className='w-[179px] h-[44px] rounded-[44px] border-[1px] border-[#636363] text-[20px] leading-[30px]' data-aos="fade-up" data-duration="1500">2 contestants</button>
                        <button className='w-[159px] h-[44px] rounded-[44px] border-[1px] border-[#636363] text-[20px] leading-[30px] bg-[#1B5CFE5C] '  data-aos="fade-up" data-duration="1600">Edit Poll</button>
                    </div>
                </div>
                 )) }
                 <ContestantDetails />
                 <Footer />
            </div>

        </section>
    </main>
  )
}

export default VotesHome