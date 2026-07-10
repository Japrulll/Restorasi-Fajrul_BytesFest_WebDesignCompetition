import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero() {
    const videoRef = useRef(null)
    const triggerRef = useRef(null)

    useGSAP(() => {
        const trigger = triggerRef.current
        const video = videoRef.current
        if (!trigger) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger,
                start: 'top top',
                end: '+=3000',
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                onEnter: () => {
                    if (video) {
                        video.currentTime = 0
                        video.play().catch(() => {})
                    }
                },
                onEnterBack: () => {
                    if (video) video.play().catch(() => {})
                    window.dispatchEvent(new CustomEvent('heroTheme', { detail: 'dark' }))
                },
                onLeaveBack: () => {
                    if (video) {
                        video.pause()
                        video.currentTime = 0
                    }
                    window.dispatchEvent(new CustomEvent('heroTheme', { detail: 'dark' }))
                },
                onLeave: () => {
                    window.dispatchEvent(new CustomEvent('heroTheme', { detail: 'light' }))
                },
            },
        })

        const q = (selector) => trigger.querySelector(selector)

        tl.fromTo(q('.wordsA'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: 'power2.in', duration: 1 }, 0)
          .to(q('.wordsA'), { opacity: 1, y: 0, duration: 2 })
          .to(q('.wordsA'), { opacity: 0, y: -40, ease: 'power2.out', duration: 1 })
          .fromTo(q('.wordsB'), { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: 'power2.in', duration: 1 })
          .to(q('.wordsB'), { opacity: 1, y: 0, duration: 2 })
          .to(q('.wordsB'), { opacity: 0, y: -50, ease: 'power2.out', duration: 1 })
          .fromTo(q('.wordsC'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: 'power2.in', duration: 1 })
          .to(q('.wordsC'), { opacity: 1, y: 0, duration: 2 })
          .to(q('.wordsC'), { opacity: 0, y: -40, ease: 'power2.out', duration: 1 })
          .fromTo(q('.wordsD'), { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: 'power2.in', duration: 1 })
          .to(q('.wordsD'), { opacity: 1, y: 0, duration: 2 })
          .to(q('.wordsD'), { opacity: 0, y: -50, ease: 'power2.out', duration: 1 })
          .fromTo(q('.wordsMain'), { opacity: 0 }, { opacity: 1, y: 0, ease: 'power2.in', duration: 1 })
          .to(q('.wordsMain'), { opacity: 1, duration: 2 })

        return () => {
            tl.kill()
        }
    }, { scope: triggerRef })

    return (
        <div
        ref={triggerRef}
        className='font-heading relative min-h-screen overflow-hidden no-copy'>
            <div className='sticky top-0 h-screen overflow-hidden'>
                <video
                    ref={videoRef}
                    id='video-ref'
                    className='w-full h-full object-cover'
                    src='/Keyboard_Recycle5_scrub_v2.mp4'
                    muted loop autoPlay
                />
                <div className='absolute inset-0 bg-black/50 pointer-events-none' />
            </div>
            <div className='wordsA absolute inset-0 ml-50 mt-60 w-fit' >
              <div className='p-8 leading-loose text-gray-50 [text-shadow:0_0_15px_rgb(0_0_0)]'>
                <p>
                  <span className='text-2xl font-black'>
                    Pada 2025, <span className='text-yellow-500  font-black'>71 ton </span>sampah,
                  </span>
                  <br />
                  <span className='font-medium font-body'>
                    menggunung di seluruh Indonesia.
                  </span>
                </p>
              </div>
            </div>
            <div className='wordsB absolute inset-0 ml-250 mt-90 w-fit'>
              <div className='p-8 leading-loose text-gray-50 [text-shadow:0_0_15px_rgb(0_0_0)]'>
                <p>
                  <span className='text-2xl font-black'>
                    ...dan 75% di antaranya
                  </span>
                  <br />
                  <span className=' font-medium font-body'>
                    termasuk <span className='text-red-500 [text-shadow:0_0_15px_rgb(0_0_0)] font-black'>belum terkelola.</span>
                  </span>
                </p>
              </div>
            </div>
            <div className='wordsC absolute inset-0 ml-50 mt-60 w-fit'>
              <div className='p-8 leading-loose text-gray-50 [text-shadow:0_0_15px_rgb(0_0_0)]'>
                <p>
                  <span className='text-2xl font-black'>
                    1 orang menghasilkan <span className='text-yellow-500 font-black'>5-6 kg</span>
                  </span>
                  <br />
                  <span className=' font-medium font-body'>
                    sampah tiap minggunya.
                  </span>
                </p>
              </div>
            </div>
            <div className='wordsD absolute inset-0 ml-250 mt-90 w-fit'>
              <div className='p-8 leading-loose text-gray-50 [text-shadow:0_0_15px_rgb(0_0_0)]'>
                <p>
                  <span className='text-2xl font-black'>
                    40,7% merupakan <span className='text-yellow-500 font-black'>Sisa Makanan</span>
                  </span>
                  <br />
                  <span className=' font-medium font-body'>
                    sisanya didominasi plastik, kayu, dan logam.
                  </span>
                </p>
              </div>
            </div>
            <div className='wordsMain absolute inset-0 flex flex-col items-center justify-center text-center'>
              <div className='p-8leading-loose text-gray-50 [text-shadow:0_0_15px_rgb(0_0_0)]'>
                <img src="/LogoRestorasi.png" className="h-40 mx-auto mb-4 " />
                <p>
                  <span className='text-8xl font-black'>
                    Restorasi
                  </span>
                  <br />
                  <span className=' font-medium font-body'>
                    Residue Transformations and Social Inclusion
                  </span>
                </p>
                <div className='mt-4 flex justify-center'>
                  <button className='stButton flex flex-row  items-center gap-2 h-14 bg-white rounded-full shadow-xl px-5 py-2 text-black cursor-pointer font-body hover:scale-105 transition-all duration-100'>
                    <p>
                      Scroll <span className='font-extrabold'> ke Bawah </span>
                    </p>
                    <img src="/ArrowDown.png" className="h-full w-auto p-1" />
                  </button>
                </div>
              </div>
            </div>
        </div>
    )
}