import Image from 'next/image'
import Homepage from './components/Homepage'

export default function Home() {
  return (
    <main className='flex justify-center  '>
       <section className='lg:max-w-[1400px] w-full lg:mx-[0px] mx-auto lg:w-full' >
        <Homepage />
       </section>
  </main>
  )
}
