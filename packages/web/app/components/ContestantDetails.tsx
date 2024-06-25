import React from 'react'
import VotingDetails from '../data.json'
import Image from 'next/image';
import brown from '../assets/brown.png';
import ice from '../assets/ice.png'

interface VotingData {
    votername: string;
    date: string;
    address: string
}

const ContestantDetails = () => {

    const votes: VotingData[] = VotingDetails;
    return (
        <main className='flex justify-center mt-[52px] overflow-hidden'>
            <section className='w-full'>
                <h1 className='text-center text-[30px] lg:text-[55px] font-semibold leading-[50px] lg:leading-[82.5px] mb-[30px] lg:mb-[42px]  ' data-aos="fade-up"> Contestants</h1>
                {votes.map((vote, index) => (
                    <section key={index}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 w-full justify-between lg:mb-[70px] '>
                            <div className='flex lg:flex-row flex-col-reverse mb-[60px] lg:mb-[80px]' data-aos="fade-up" data-duration="1500">
                                <Image src={brown} alt='desert' className='lg:w-[347px] mt-[20px] lg:mt-[0px] lg:mr-[10px] w-[80%] lg:mx-[0px] mx-auto' />
                                <div className='w-[80%] lg:mx-[0px] mx-auto lg:w-[200px] bg-[#151515] rounded-[25px] pt-[28px] px-[30px] '>
                                    <h1 className='text-[15px] font-semibold leading-[30px]  '>{vote.votername}</h1>
                                    <div className='flex my-[20px] w-fit mx-auto'>
                                        <div className='bg-[#2C2C2C] rounded-[50%] w-[35px] h-[35px] '></div>
                                        <p className='my-auto text-[14px] font-semibold leading-[21px] ml-[11px] '>{vote.address}</p>
                                    </div>
                                    <button className='w-full bg-[#1B5CFE] hover:bg-[#1948b5] py-[12px] rounded-[81px] text-[15px] font-semibold leading-[22.5px] mb-[60px] '>Vote</button>
                                </div>
                            </div>
                            <div className='flex lg:flex-row flex-col-reverse mb-[60px] lg:mb-[80px] lg:ml-[38px] ' data-aos="fade-up" data-duration="1600">
                                <Image src={ice} alt='desert' className='lg:w-[347px] mt-[20px] lg:mt-[0px] lg:mr-[10px] w-[80%] lg:mx-[0px] mx-auto ' />
                                <div className='w-[80%] lg:mx-[0px] mx-auto lg:w-[200px] bg-[#151515] rounded-[25px] pt-[28px] px-[30px] '>
                                    <h1 className='text-[15px] font-semibold leading-[30px]  '>{vote.votername}</h1>
                                    <div className='flex my-[20px] w-fit mx-auto'>
                                        <div className='bg-[#2C2C2C] rounded-[50%] w-[35px] h-[35px] '></div>
                                        <p className='my-auto text-[14px] font-semibold leading-[21px] ml-[11px] '>{vote.address}</p>
                                    </div>
                                    <button className='w-full bg-[#1B5CFE] hover:bg-[#1948b5] py-[12px] rounded-[81px] text-[15px] font-semibold leading-[22.5px] mb-[60px] '>Vote</button>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </main>
    )
}

export default ContestantDetails