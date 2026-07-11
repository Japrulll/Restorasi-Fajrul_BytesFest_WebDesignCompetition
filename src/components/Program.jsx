import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Program() {
    const horizontal = useRef(null)
    const triggerC = useRef(null)

    useGSAP (() => {
        const distance = horizontal.current.scrollWidth - horizontal.current.offsetWidth
        gsap.to(horizontal.current,
            {
                x: -distance,
                scrollTrigger: {
                    trigger: triggerC.current,
                    start: 'top top',
                    end: () => `+=${distance}`,
                    markers: false,
                    pin:  true,
                    scrub:1,
                }
            }
        )
    },{ scope: triggerC })

  return (
    <div className='min-h-screen flex flex-col justify-center overflow-hidden no-copy'  ref={triggerC}>
        <p className='text-end font-heading text-6xl font-medium mx-10'>
            Program Unggulan
        </p>
        <div className='py-5'>
            <div className='overflow-hidden h-[55vh]'>
                <div className='flex flex-row h-full pl-[45vw] items-center' ref={horizontal}>
                    <div className='px-[2vw]'>
                        <div className='relative px-10 py-9 flex flex-col gap-2 items-center justify-center w-[28vw]'>
                            <img src="/reFnB.jpg" alt="" className='absolute inset-0 w-full h-full object-cover z-0 rounded-2xl shadow-2xl' />
                            <div className='absolute inset-0 bg-black/50 z-10 rounded-2xl'></div>
                            <p className='text-6xl z-10 font-heading font-bold text-emerald-400 leading-none'>01</p>
                            <p className='text-2xl z-10 font-heading font-bold text-emerald-400 leading-none'>Re-FnB</p>
                            <p className='text-sm py-3 z-10 font-heading font-semibold text-white text-center leading-tight tracking-wide'>
                                Kerja sama dengan wedding organizer/catering buat "rescue" sisa makanan 2-3 jam setelah acara
                            </p>
                        </div>
                    </div>
                    <div className='px-[2vw]'>
                        <div className='relative px-10 py-9 flex flex-col gap-2 items-center justify-center w-[28vw]'>
                            <img src="/maggot.png" alt="" className='absolute inset-0 w-full h-full object-cover z-0 rounded-2xl shadow-2xl' />
                            <div className='absolute inset-0 bg-black/50 z-10 rounded-2xl'></div>
                            <p className='text-6xl z-10 font-heading font-bold text-emerald-400 leading-none'>02</p>
                            <p className='text-2xl z-10 font-heading font-bold text-emerald-400 leading-none'>Bank Sampah</p>
                            <p className='text-sm py-3 z-10 font-heading font-semibold text-white text-center leading-tight tracking-wide'>
                                Pengolahan sisa limbah yang tidak layak menjadi kompos untuk konsumsi maggot
                            </p>
                        </div>
                    </div>
                    <div className='px-[2vw]'>
                        <div className='relative px-10 py-9 flex flex-col gap-2 items-center justify-center w-[28vw]'>
                            <img src="/jelantah.jpg" alt="" className='absolute inset-0 w-full h-full object-cover z-0 rounded-2xl shadow-2xl' />
                            <div className='absolute inset-0 bg-black/50 z-10 rounded-2xl'></div>
                            <p className='text-6xl z-10 font-heading font-bold text-emerald-400 leading-none'>03</p>
                            <p className='text-2xl z-10 font-heading font-bold text-emerald-400 leading-none'>Minyak Jelantah</p>
                            <p className='text-sm py-3 z-10 font-heading font-semibold text-white text-center leading-tight tracking-wide'>
                                Program pengumpulan minyak jelantah untuk diolah jadi biodiesel atau sabun cuci
                            </p>
                        </div>
                    </div>
                    <div className='px-[2vw]'>
                        <div className='relative px-10 py-9 flex flex-col gap-2 items-center justify-center w-[28vw]'>
                            <img src="/gridCraft.jpg" alt="" className='absolute inset-0 w-full h-full object-cover z-0 rounded-2xl shadow-2xl' />
                            <div className='absolute inset-0 bg-black/50 z-10 rounded-2xl'></div>
                            <p className='text-6xl z-10 font-heading font-bold text-emerald-400 leading-none'>04</p>
                            <p className='text-2xl z-10 font-heading font-bold text-emerald-400 leading-none'>Recyle Marketplace</p>
                            <p className='text-sm py-3 z-10 font-heading font-semibold text-white text-center leading-tight tracking-wide'>
                                Platform jual-beli produk hasil olahan sampah (kompos, sabun jelantah, kerajinan) 
                            </p>
                        </div>
                    </div>
                    <div className='px-[2vw]'>
                        <div className='relative px-10 py-9 flex flex-col gap-2 items-center justify-center w-[28vw]'>
                            <img src="/rentan.jpg" alt="" className='absolute inset-0 w-full h-full object-cover z-0 rounded-2xl shadow-2xl' />
                            <div className='absolute inset-0 bg-black/50 z-10 rounded-2xl'></div>
                            <p className='text-6xl z-10 font-heading font-bold text-emerald-400 leading-none'>05</p>
                            <p className='text-2xl z-10 font-heading font-bold text-emerald-400 leading-none'>Pemberdayaan Masyarakat</p>
                            <p className='text-sm py-3 z-10 font-heading font-semibold text-white text-center leading-tight tracking-wide'>
                                Memlibatkan kelompok rentan (difabel, lansia, ibu rumah tangga) sebagai tenaga pengolah sampah
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-2 flex justify-center'>
            <button className='stButton flex flex-row  items-center gap-2 h-14 bg-white rounded-full shadow-xl px-5 py-2 text-black cursor-pointer font-body hover:scale-105 transition-all duration-100'>
            <p>
                Lihat <span className='font-extrabold'> lebih banyak </span>
            </p>
            <img src="/ArrowDown.png" className="h-full rotate-270 w-auto p-1" />
            </button>
        </div>
    </div>
  )
}
