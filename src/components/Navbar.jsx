import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 lg:px-20 py-6 relative">
      <div className="flex items-center space-x-10">
        <h2 className="text-2xl font-bold">Logo</h2>

        <ul className="hidden md:flex items-center space-x-6 pt-1">
          <li><a href="#home" className="hover:text-blue-500 text-sm">Home</a></li>
          <li>
            <a href="#services" className="hover:text-blue-500 text-sm flex items-center gap-1">
              Adversite
              <svg className="w-2.5 h-2.5 fill-current mt-0.5" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </a>
          </li>
          <li><a href="#supports" className="hover:text-blue-500 text-sm">Supports</a></li>
          <li><a href="#about" className="hover:text-blue-500 text-sm">About</a></li>
        </ul>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-[#0f172a] font-bold hover:text-blue-500">Login</a>
        <div className="relative group cursor-pointer">
          <span className="text-[#00a9f6] font-bold hover:text-blue-500">Get Started</span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00a9f6] rounded-full group-hover:bg-[#00a9f6]"></div>
        </div>
      </div>

      {/* Botão Menu Mobile */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-6 space-y-4 z-50">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-500 font-medium">Home</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-blue-500 font-medium">Adversite</a>
          <a href="#supports" onClick={() => setIsOpen(false)} className="hover:text-blue-500 font-medium">Supports</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-500 font-medium">About</a>
          <div className="w-4/5 h-px bg-gray-100 my-2"></div>
          <a href="#" className="text-[#0f172a] font-bold hover:text-blue-500">Login</a>
          <button className="bg-[#00a9f6] text-white font-bold py-2 px-6 rounded-lg">Get Started</button>
        </div>
      )}
    </nav>
  )
}
