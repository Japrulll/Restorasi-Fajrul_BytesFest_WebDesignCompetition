import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col p-8 md:p-16 bg-emerald-700 rounded-t-[2.5rem] md:rounded-t-[3rem] text-white font-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full h-full content-start">

        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
              Restorasi,
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light">
              Presented by Fajrul <br />
              (on BytesFest Competition)
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={scrollToTop}
              className="px-6 py-3 border border-white/30 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              BACK TO TOP
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-6 pt-2">
          <h3 className="text-white/50 font-bold uppercase tracking-widest text-sm">
            Menu
          </h3>
          <ul className="flex flex-col gap-4 text-xl font-medium">
            <li><a href="/" className="hover:text-white/70 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-white/70 transition-colors">About us</a></li>
            <li><a href="/submission" className="hover:text-white/70 transition-colors">Program Restorasi</a></li>
          </ul>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6 pt-2">
          <h3 className="text-white/50 font-bold uppercase tracking-widest text-sm">
            Contact Details
          </h3>

          <div className="flex flex-col gap-8 lg:text-left">
            <div>
              <h4 className="text-white/70 text-sm font-bold uppercase mb-2">Secretariat Office</h4>
              <a href="mailto:18223067@std.stei.itb.ac.id" className="text-lg md:text-xl hover:text-white transition-colors block break-words">
                18223067@std.stei.itb.ac.id
              </a>
            </div>

            <div>
              <h4 className="text-white/70 text-sm font-bold uppercase mb-2">Registration Office</h4>
              <a href="mailto:fajrul04fender@gmail.com" className="text-lg md:text-xl hover:text-white transition-colors block">
                fajrul04fender@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full mt-auto pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm gap-4">
        <p>© 2026 RESTORASI. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

    </div>
  );
}