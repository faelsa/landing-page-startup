import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faInfinity, faBusinessTime, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

export default function Service() {
    const itens = [
        {
            icon: faBusinessTime,
            isFontAwesome: true,
            title: 'Marketing & advertising',
            description: 'Get your info tests delivered at home collect a sample from the your pogress tests.',
            bgColor: '#98e09a6c',
            iconColor: '#4CAF50'
        },
        {
            icon: faInfinity,
            isFontAwesome: true,
            title: 'Ultimate development',
            description: 'Get your info tests delivered at home collect a sample from the your pogress tests.',
            bgColor: '#8bb5e96b',
            iconColor: '#00a9f6'
        },
        {
            icon: faPrint,
            isFontAwesome: true,
            title: 'Business Enterprise',
            description: 'Get your info tests delivered at home collect a sample from the your pogress tests.',
            bgColor: '#FFE7E7',
            iconColor: '#FF5B5B'
        }
    ]

    return (
        <section id="services" className="w-full overflow-hidden">
            <div className="flex flex-col items-center justify-center py-12 lg:py-20 px-6 lg:px-10 space-y-12 lg:space-y-20">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-5"
                >
                    <h1 className="text-3xl lg:text-4xl font-bold text-[#0f172a] leading-[1.1]">
                        Grow your startup with our services
                    </h1>
                    <p className="text-base lg:text-lg text-[#64748b] max-w-xl text-center">
                        Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                    {itens.map((item, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-row items-start justify-center space-x-5"
                        >
                            <div 
                                className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                {item.isFontAwesome ? (
                                    <FontAwesomeIcon icon={item.icon} style={{ color: item.iconColor }} className="text-3xl" />
                                ) : (
                                    <img src={item.icon} alt={item.title} className="w-12 h-12" />
                                )}
                            </div>

                            <div className="flex flex-col items-start justify-center space-y-2 max-w-xs">
                                <h2 className="text-lg font-bold text-[#0f172a]">{item.title}</h2>
                                <p className="text-base text-[#64748b] text-left">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="bg-[#fdf8f4] py-20 px-4 lg:px-20 border-t border-gray-100"
            >
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <div className="relative mb-12 text-center lg:text-left max-w-3xl">
                        <FontAwesomeIcon 
                            icon={faQuoteLeft} 
                            className="absolute -top-8 -left-8 text-gray-200 text-6xl opacity-50" 
                        />
                        <p className="text-xl lg:text-2xl text-[#0f172a] leading-relaxed font-medium">
                            "Whatever we create in Qwilr looks absolutely brilliant. It helps show 
                            our work in the best light, and is downright impressive when clients see 
                            a Qwilr Page we have made for them."
                        </p>
                        <p className="mt-6 text-gray-400 font-medium">
                            By Denny Albuz, Adviser of Paypal
                        </p>
                    </div>

                    {/* Divisor */}
                    <div className="w-full h-px bg-gray-200 mb-12"></div>

                    <div className="w-full flex flex-wrap items-center justify-center lg:justify-between gap-10 lg:gap-0 grayscale opacity-70 hover:grayscale-0 transition-all duration-500">
                        <div className="text-2xl font-black tracking-tighter text-black">UBER</div>
                        <div className="flex items-center space-x-1">
                            <span className="text-blue-500 font-bold text-2xl">G</span>
                            <span className="text-red-500 font-bold text-2xl">o</span>
                            <span className="text-yellow-500 font-bold text-2xl">o</span>
                            <span className="text-blue-500 font-bold text-2xl">g</span>
                            <span className="text-green-500 font-bold text-2xl">l</span>
                            <span className="text-red-500 font-bold text-2xl">e</span>
                        </div>
                        <div className="flex items-center font-bold text-2xl italic text-[#003087]">
                            <span className="text-[#003087]">Pay</span>
                            <span className="text-[#009cde]">Pal</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="grid grid-cols-2 gap-0.5">
                                <div className="w-2.5 h-2.5 bg-[#f25022]"></div>
                                <div className="w-2.5 h-2.5 bg-[#7fba00]"></div>
                                <div className="w-2.5 h-2.5 bg-[#00a4ef]"></div>
                                <div className="w-2.5 h-2.5 bg-[#ffb900]"></div>
                            </div>
                            <span className="text-gray-500 font-semibold text-xl">Microsoft</span>
                        </div>
                        <div className="text-2xl font-bold font-serif italic text-[#ea4c89]">dribbble</div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
