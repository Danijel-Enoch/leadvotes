"use client"
import React, { useEffect } from "react"
import Homepage from './components/Homepage'
import Aos from "aos"
import "aos/dist/aos.css"; 


export default function Home() {


  useEffect(() => {
    Aos.init({
       offset: 0,
       duration: 1200,
       easing: "ease",
       delay: 0,
    })
  }, [])

  return (
    <main className='flex justify-center  '>
       <section className="w-full mx-auto">
        <Homepage />
       </section>
  </main>
  )
}
