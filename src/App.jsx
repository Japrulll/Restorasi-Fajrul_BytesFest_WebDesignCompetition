import React, {useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import Lenis from 'lenis'
import BriefAbout from './components/BriefAbout'
import Helper from './components/Helper'

gsap.registerPlugin(ScrollTrigger);


export default function App() {
    useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
      })

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          return arguments.length ? lenis.scrollTo(value) : lenis.scroll
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        },
        pinType: document.body.style.transform ? 'transform' : 'fixed',
      })

      lenis.on('scroll', ScrollTrigger.update)

      const update = (time) => {
        lenis.raf(time * 1000)
      }
      gsap.ticker.add(update)
      gsap.ticker.lagSmoothing(0)

      const resizeLenis = () => lenis.resize()
      ScrollTrigger.addEventListener('refresh', resizeLenis)

      ScrollTrigger.refresh()

      return () => {
        ScrollTrigger.removeEventListener('refresh', resizeLenis)
        gsap.ticker.remove(update)
        lenis.destroy()
      }
    }, [])
  return (
    <div className='relative'>
      <img src='/BgImageL.png' className='absolute inset-0 w-full min-h-screen object-cover'/>
      <Hero />
      <div className='fixed top-0 inset-x-0 p-10 z-10'>
        <Header />
      </div>
      <BriefAbout />
      <Helper />
    </div>
  )
}
