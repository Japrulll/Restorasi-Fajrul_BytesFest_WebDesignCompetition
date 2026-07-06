import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {

    const videoRef = useRef(null)
    const triggerRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current

        const onLoaded = () => {
        const st = ScrollTrigger.create({
                trigger: triggerRef.current,
                start: 'top top',
                end: '+=3000',
                pin: true,
                onEnter: () => {
                    video.currentTime = 0
                    video.play()
                },
                onEnterBack: () => {
                    // pas scroll naik lagi masuk area ini dari bawah
                    video.play()
                },
                onLeaveBack: () => {
                    // pas scroll kelewat ke atas trigger (balik ke awal halaman)
                    video.pause()
                    video.currentTime = 0
                },
            })

            return () => st.kill()
        }

        video.addEventListener('loadedmetadata', onLoaded)
        return () => video.removeEventListener('loadedmetadata', onLoaded)
    }, [])

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: 'top top',
                end: '+=3000',
                scrub: 1,
            },
        })

        // tl.from('.wordsA', { opacity: 0, y: 40 }
        // ).to(".wordsA", {opacity: 1, y: 0, ease: "power2.in"}
        // ).to(".wordsA", {opacity: 0, y: -40, ease: "power2.out"}
        // ).from(".wordsB", { opacity: 0, y: 50 }  
        // ).to(".wordsB", {opacity: 1, y: 0, ease: "power2.in"}
        // ).to(".wordsB", {opacity: 0, y: -50, ease: "power2.out"})
        tl.fromTo('.wordsA', { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "power2.in", duration: 1 }, 0)
        .to('.wordsA', { opacity: 1, y: 0, duration: 2 })          // hold
        .to('.wordsA', { opacity: 0, y: -40, ease: "power2.out", duration: 1 })
        .fromTo('.wordsB', { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: "power2.in", duration: 1 })
        .to('.wordsB', { opacity: 1, y: 0, duration: 2 })          // hold
        .to('.wordsB', { opacity: 0, y: -50, ease: "power2.out", duration: 1 })
        .fromTo('.wordsC', { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "power2.in", duration: 1 })
        .to('.wordsC', { opacity: 1, y: 0, duration: 2 })          // hold
        .to('.wordsC', { opacity: 0, y: -40, ease: "power2.out", duration: 1 })
        .fromTo('.wordsD', { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: "power2.in", duration: 1 })
        .to('.wordsD', { opacity: 1, y: 0, duration: 2 })          // hold
        .to('.wordsD', { opacity: 0, y: -50, ease: "power2.out", duration: 1 })
        .fromTo('.wordsMain', { opacity: 0 }, { opacity: 1, y: 0, ease: "power2.in", duration: 1 })
        .to('.wordsMain', { opacity: 1, duration: 2})

        return () => tl.kill()
    }, [])

    // gsap.to(wordsRef1, {
    //   ease: "none",
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: wordsRef1,
    //     start: "top top",
    //     end: "+=500",
    //     markers: true,
    //     toggleActions: "play none none none"
    //   }
    // })

  return (
    <div 
    ref={triggerRef} 
    className='font-heading relative min-h-screen overflow-hidden'>
        <div className='sticky top-0 h-screen overflow-hidden'>
            <video
                ref={videoRef}
                id='video-ref'
                className='w-full h-full object-cover'
                src='/Keyboard_Recycle5_scrub.mp4'
                muted loop autoPlay
                // muted playsInline preload='auto'
            />
            <div className='absolute inset-0 bg-black/50 pointer-events-none' />
        </div >
        <div 
        // ref={wordsRef1}
        className='wordsA absolute inset-0 ml-50 mt-80 w-fit' >
          <div className='p-8 leading-loose text-gray-50 [text-shadow:0_0_15px_rgb(0_0_0)]'>
            <p>
              <span className='text-3xl font-black'>
                Pada 2025, <span className='text-yellow-500  font-black'>71 ton </span>sampah,
              </span>
              <br />
              <span className='text-xl font-medium font-body'>
                menggunung di seluruh Indonesia.
              </span>
            </p>
          </div>
        </div>
        <div className='wordsB absolute inset-0 ml-300 mt-90 w-fit'>
          <div className='p-8 leading-loose text-gray-50 [text-shadow:0_0_15px_rgb(0_0_0)]'>
            <p>
              <span className='text-3xl font-black'>
                ...dan 75% di antaranya
              </span>
              <br />
              <span className='text-xl font-medium font-body'>
                termasuk <span className='text-red-500 [text-shadow:0_0_15px_rgb(0_0_0)] font-black'>belum terkelola.</span>
              </span>
            </p>
          </div>
        </div>
        <div className='wordsC absolute inset-0 ml-50 mt-80 w-fit'>
          <div className='p-8 leading-loose text-gray-50 [text-shadow:0_0_15px_rgb(0_0_0)]'>
            <p>
              <span className='text-3xl font-black'>
                1 orang menghasilkan <span className='text-yellow-500 font-black'>5-6 kg</span>
              </span>
              <br />
              <span className='text-xl font-medium font-body'>
                sampah tiap minggunya.
              </span>
            </p>
          </div>
        </div>
        <div className='wordsD absolute inset-0 ml-300 mt-90 w-fit'>
          <div className='p-8 leading-loose text-gray-50 [text-shadow:0_0_15px_rgb(0_0_0)]'>
            <p>
              <span className='text-3xl font-black'>
                40,7% merupakan <span className='text-yellow-500 font-black'>Sisa Makanan</span>
              </span>
              <br />
              <span className='text-xl font-medium font-body'>
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
              <span className='text-xl font-medium font-body'>
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
        {/* <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10'>
          <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md'>
            <h1 className='text-3xl font-bold text-black mb-2'>
              Restorasi
            </h1>
            <p className='text-black text-sm'>
              Transformasi sampah plastik jadi sesuatu yang bernilai.
            </p>
          </div>
        </div> */}
    </div>
  )
}
