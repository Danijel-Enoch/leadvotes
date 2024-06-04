import React from 'react'
import VotesHome from '../components/VotesHome'

const pages = () => {
  return (
    <main className='flex justify-center  '>
       <section className='lg:max-w-[1400px] w-full lg:mx-[0px] mx-auto lg:w-full' >
        <VotesHome />
       </section>
  </main>
  )
}

export default pages