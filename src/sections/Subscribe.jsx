import { motion } from 'framer-motion';

export default function Subscribe() {
  return (
    <section className="relative w-full bg-[#fdf2e9] py-24 overflow-hidden">
      <div className="absolute top-4 left-4 opacity-30 select-none">
        <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C30 40 70 40 90 10" stroke="#d97706" strokeWidth="1" strokeDasharray="4 4"/>
          <path d="M60 10C80 40 120 40 140 10" stroke="#d97706" strokeWidth="1" strokeDasharray="4 4"/>
          <path d="M20 25L30 45L40 25H20Z" fill="#d97706" />
          <path d="M70 25L80 45L90 25H70Z" fill="#d97706" />
          <path d="M120 25L130 45L140 25H120Z" fill="#d97706" />
        </svg>
      </div>

      <div className="absolute top-4 right-4 opacity-30 select-none scale-x-[-1]">
        <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C30 40 70 40 90 10" stroke="#d97706" strokeWidth="1" strokeDasharray="4 4"/>
          <path d="M60 10C80 40 120 40 140 10" stroke="#d97706" strokeWidth="1" strokeDasharray="4 4"/>
          <path d="M20 25L30 45L40 25H20Z" fill="#d97706" />
          <path d="M70 25L80 45L90 25H70Z" fill="#d97706" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-10 lg:left-24 scale-75 lg:scale-100 origin-bottom">
        <div className="relative w-16 h-32 bg-[#22c55e] rounded-t-full border-2 border-[#166534]">
          <div className="absolute top-8 -left-4 w-6 h-12 bg-[#22c55e] rounded-full border-2 border-[#166534] rotate-[-20deg]" />
          <div className="absolute top-4 -right-4 w-6 h-12 bg-[#22c55e] rounded-full border-2 border-[#166534] rotate-[20deg]" />
          {/* Pot */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-12 bg-orange-400 rounded-b-lg border-2 border-orange-700" />
        </div>
      </div>

      <div className="absolute left-40 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
        <div className="w-12 h-16 border-2 border-orange-400 rounded-full relative">
            <div className="absolute bottom-[-20px] left-1/2 w-[1px] h-20 bg-orange-400" />
        </div>
      </div>

      <div className="absolute bottom-0 right-10 lg:right-24 flex flex-col items-end scale-75 lg:scale-100 origin-bottom">
        <div className="w-24 h-6 bg-blue-600 rounded-sm border border-blue-800 mb-1" />
        <div className="w-28 h-6 bg-orange-500 rounded-sm border border-orange-700 mb-1" />
        <div className="w-24 h-6 bg-red-500 rounded-sm border border-red-700" />
        
        <div className="absolute -right-12 bottom-0 w-10 h-8 bg-red-500 rounded-b-xl border-2 border-red-700">
            <div className="absolute top-1 -right-4 w-4 h-4 border-2 border-red-700 rounded-full" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[1.5rem] lg:rounded-[2.5rem] p-8 lg:p-16 shadow-sm border border-orange-100/50 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] tracking-tight">
              Like our service? Subscribe us
            </h2>
            <p className="text-gray-500 text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
              We have more than thousand of creative entrepreneurs and stat joining our business
            </p>
          </div>

          <div className="flex-1 w-full max-w-md space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter Email address"
                className="flex-1 bg-[#f1f5f9] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-pink-300 outline-none text-gray-700 placeholder:text-gray-400"
              />
              <button className="bg-[#e14b8b] hover:bg-[#d13b7b] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-pink-200 active:scale-95 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <input 
                type="checkbox" 
                id="promo" 
                className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500 bg-[#f1f5f9]" 
              />
              <label htmlFor="promo" className="text-sm text-gray-400">
                Don't provide any promotional message.
              </label>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
