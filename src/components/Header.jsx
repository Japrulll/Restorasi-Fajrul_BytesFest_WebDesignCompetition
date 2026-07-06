import React from 'react'

export default function Header() {
  return (
    <div className='h-25 flex flex-row justify-between items-center'>
        <div className='h-full gap-3 flex flex-row p-5 rounded-full text-white justify-between items-center'>
          <img src='/LogoRestorasi.png' className='h-full'/>
          <div className='flex flex-col leading-tight'>
            <p className='font-heading font-bold text-2xl'>
              Restorasi
            </p>
            <p className='font-body font-light text-sm'>
              Residue Transformation and Social Inclusion
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-10 text-white text-xl font-light font-heading'>
            <button className='bg-transparent py-3 px-8 rounded-full cursor-pointer hover:bg-gray-100 hover:text-black transition-colors duration-300'>Tentang</button>
            <button className='bg-transparent py-3 px-8 rounded-full cursor-pointer hover:bg-gray-100 hover:text-black transition-colors duration-300'>Program</button>
            <button className='bg-transparent py-3 px-8 rounded-full cursor-pointer hover:bg-gray-100 hover:text-black transition-colors duration-300'>Produk <span className='font-bold'>Restorasi</span></button>
            <button className='bg-transparent py-3 px-8 rounded-full cursor-pointer hover:bg-gray-100 hover:text-black transition-colors duration-300'>Profil</button>
        </div>
    </div>
  )
}
