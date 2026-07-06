import React, {useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Header from './components/Header'
import Hero from './components/Hero'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function App() {
    useEffect(() => {
      const lenis = new Lenis()

      lenis.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })
      gsap.ticker.lagSmoothing(0)

      return () => {
        lenis.destroy()
        gsap.ticker.remove(lenis.raf)
      }
    }, [])
  return (
    <div className='relative'>
      <img src='/BgImageL.png' className='absolute inset-0 w-full min-h-screen object-cover'/>
      <Hero />
      <div className='fixed top-0 inset-x-0 p-10 z-10'>
        <Header />
      </div>
    </div>
  )
}
