import React, { useState, useEffect } from 'react'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleThemeChange = (e) => {
      setIsDark(e.detail === 'light')
    }

    window.addEventListener('heroTheme', handleThemeChange)
    return () => window.removeEventListener('heroTheme', handleThemeChange)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 h-20 px-5 flex flex-row justify-between items-center transition-colors duration-300 no-copy
    ${isDark ? 'text-black bg-white border-b border-gray-200' : 'text-white'}`}>
        <div className='h-full gap-3 flex flex-row px-5 py-4 rounded-full justify-between items-center'>
          <img src='/LogoRestorasi.png' className='h-full'/>
          <div className='flex flex-col leading-tight'>
            <p className='font-heading font-bold text-xl'>
              Restorasi
            </p>
            <p className='font-body font-light text-xs'>
              Residue Transformation and Social Inclusion
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-1 font-light font-heading'>
            <button className={`bg-transparent py-3 px-8 rounded-full cursor-pointer transition-colors duration-300 ${isDark ? 'hover:bg-emerald-600 hover:text-white' : 'hover:bg-gray-100 hover:text-black'}`}>Tentang</button>
            <button className={`bg-transparent py-3 px-8 rounded-full cursor-pointer transition-colors duration-300 ${isDark ? 'hover:bg-emerald-600 hover:text-white' : 'hover:bg-gray-100 hover:text-black'}`}>Program <span className='font-bold'> Restorasi</span></button>
            <button className={`bg-transparent py-3 px-8 rounded-full cursor-pointer transition-colors duration-300 ${isDark ? 'hover:bg-emerald-600 hover:text-white' : 'hover:bg-gray-100 hover:text-black'}`}>Profil</button>
        </div>
    </div>
  )
}
