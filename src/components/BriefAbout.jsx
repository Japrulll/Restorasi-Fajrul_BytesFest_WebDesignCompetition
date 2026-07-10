import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BriefAbout() {
  const kiri = useRef(null)
  const kanan = useRef(null)
  const sectionRef = useRef(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        end: 'top 5%',
        scrub: 1.2,
        markers: false,
      },
    })

    tl.fromTo(kiri.current, { opacity: 0, x: -120, y: 100, rotation: -25 },
      { opacity: 1, x: 0, y: 0, rotation: 0, ease: 'power2.out', duration: 1 },
      0,
    )

    tl.fromTo(kanan.current, { opacity: 0, x: 120, y: 100, rotation: 25 },
      { opacity: 1, x: 0, y: 0, rotation: 0, ease: 'power2.out', duration: 1 },
      0,
    )

    ScrollTrigger.refresh()
  },)


  return (
    <div className='min-h-screen overflow-hidden no-copy' ref={sectionRef}>
        <marquee behavior="scroll" direction="left" className="bg-emerald-600 font-heading px-3 py-5 text-white">
            Selamat Bergabung di <span className='font-bold'> Restorasi. </span>Tempat Anda Mengubah Limbah Menjadi Pemasukan.
        </marquee>
        <div className='mx-10 mt-5 flex flex-row justify-between gap-20'>
          {/* Kiri */}
          <div className='kiri w-full max-w-xl justify-center' ref={kiri}>
            <p className='font-heading text-6xl font-medium mb-5'>
              Tentang Kami 
            </p>
            <div className='grid grid-cols-2 gap-4'>
              <img src="/gridEnv.jpg" alt="" className='h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300'/>
              <img src="/gridSoc.jpg" alt="" className='h-full object-cover rounded-2xl mt-8 hover:scale-105 transition-transform duration-300'/>
              <img src="/gridCraft.jpg" alt="" className='h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300'/>
              <img src="/gridFood.jpg" alt="" className='h-full object-cover rounded-2xl mt-8 hover:scale-105 transition-transform duration-300'/>
            </div>
          </div>
          {/* Kanan */}
          <div className='kanan w-full flex flex-col justify-between mt-10 gap-5' ref={kanan}>
            <div className='p-3 font-heading'>
              <p className='text-xl text-center leading-snug tracking-widest'>
                "Kami ingin 
                <span className='font-bold'> memberi kesempatan </span> 
                bagi setiap elemen masyarakat untuk berkontribusi satu sama lain dengan
                <span className='font-bold'> restorasi limbah dan residu </span> 
                  menjadi 
                <span className='font-bold'> nilai jual </span>
                  yang menguntungkan semua kalangan."
              </p>
              <div className='w-full flex justify-center mt-5'>
                <div className='text-end'>
                  <p className='font-heading font-normal tracking-wider'>
                    — CEO and Founder, Ananda Fajrul Zidan
                  </p>
                </div>
              </div>
            </div>
            <div className='h-full flex flex-col items-center'>
              <div className='mb-3 font-heading'>
                <p className='text-xl text-center font-black leading-snug tracking-wide'>
                  Target Sertifikasi
                </p>
              </div>
              <div className='h-full text-sm'>
                <div className='grid grid-cols-3 mb-5'>
                  {/* SNI */}
                  <div className='flex flex-col items-center text-center  p-6  h-full'>
                    <div className='h-32 w-full flex items-center justify-center mb-4'>
                      <img src="/SNI_mark.svg" alt="SNI" className='max-h-full max-w-[60%] object-contain'/>
                    </div>
                    <p className='font-heading font-black tracking-wider leading-tight mb-3 min-h-12 flex items-center'>
                      Standar Nasional Indonesia (SNI)
                    </p>
                    <p className='tracking-wide text-gray-600'>
                      Menjamin produk hasil olahan residu memenuhi standar mutu dan keamanan nasional supaya tercipta rasa percaya dari seluruh lapisan konsumen.
                    </p>
                  </div>

                  {/* ISO 14001 */}
                  <div className='flex flex-col items-center text-center  p-6  h-full'>
                    <div className='h-32 w-full flex items-center justify-center mb-4'>
                      <img src="/ISO14001.png" alt="ISO 14001" className='max-h-full max-w-[70%] object-contain'/>
                    </div>
                    <p className='font-heading font-black tracking-wider leading-tight mb-3 min-h-12 flex items-center'>
                      ISO 14001 Environmental Management System
                    </p>
                    <p className='tracking-wide text-gray-600'>
                      Sertifikasi sistem manajemen lingkungan internasional untuk memastikan proses produksi kami ramah lingkungan dan berkelanjutan.
                    </p>
                  </div>

                  {/* B Corp */}
                  <div className='flex flex-col items-center text-center  p-6  h-full'>
                    <div className='h-32 w-full flex items-center justify-center mb-4'>
                      <img src="/Bcorp.webp" alt="B Corporation" className='max-h-full max-w-[70%] object-contain'/>
                    </div>
                    <p className='font-heading font-black tracking-wider leading-tight mb-3 min-h-12 flex items-center'>
                      B Corporation Certification Verified by B LAB
                    </p>
                    <p className='tracking-wide text-gray-600'>
                      Mengukuhkan komitmen kami menyeimbangkan profit dengan dampak sosial dan lingkungan bagi seluruh pemangku kepentingan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
