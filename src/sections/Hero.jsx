import heroSvg from '../assets/images/undraw_revenue-analysis_fjh2.svg'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="flex-1 flex items-center justify-center py-10 lg:py-20 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        
        {/* Lado Esquerdo: Texto e Botão com Animação */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left space-y-6 max-w-xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-[1.2] lg:leading-[1.1]">
            Creativity starts with viewing the whole world differently
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#64748b]">
            A service agency with customer satisfaction as our priority. We help you build your digital presence with modern solutions.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#00a9f6] text-white font-bold py-3 px-8 rounded-lg shadow-[0_10px_20px_rgba(0,169,246,0.3)] hover:bg-[#0098e0] transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm lg:text-base">
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Lado Direito: Ilustração (SVG) com Animação */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full relative max-w-2xl mt-8 lg:mt-0"
        >
          <div className="w-full bg-white rounded-[1.5rem] lg:rounded-[2rem] p-4 lg:p-6 shadow-sm">
            <img 
              src={heroSvg} 
              alt="hero illustration" 
              className="w-full h-auto object-contain max-h-[400px] opacity-90"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#00a9f6] opacity-[0.02] rounded-full blur-3xl"></div>
        </motion.div>

      </div>
    </section>
  )
}
