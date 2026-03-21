import { motion } from 'framer-motion'
import { faLaptopCode, faMobileAlt, faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OtherSevices() {
    const itens = [
        {
            title: 'UI/UX Design',
            description: 'We create beautiful and functional interfaces that enhance the user experience.',
            link: 'Learn more >',
            bgColor: '#00a9f6',
            iconColor: '#fff',
            isFontAwesome: true,
            icon: faLaptopCode,
        },
        {
            title: 'Mobile App Development',
            description: 'We build responsive and high-performance mobile applications for iOS and Android.',
            link: 'Learn more >',
            bgColor: '#6b00f6ff',
            iconColor: '#fff',
            isFontAwesome: true,
            icon: faMobileAlt,
        },
        {
            title: 'Web Development',
            description: 'We develop custom websites that are fast, secure, and tailored to your business needs.',
            link: 'Learn more >',
            bgColor: '#f64e00ff',
            iconColor: '#fff',
            isFontAwesome: true,
            icon: faCode,
        },
        {
            title: 'Web Development',
            description: 'We develop custom websites that are fast, secure, and tailored to your business needs.',
            link: 'Learn more >',
            bgColor: '#1900f6ff',
            iconColor: '#fff',
            isFontAwesome: true,
            icon: faCode,
        },
        {
            title: 'Web Development',
            description: 'We develop custom websites that are fast, secure, and tailored to your business needs.',
            link: 'Learn more >',
            bgColor: '#a800f6ff',
            iconColor: '#fff',
            isFontAwesome: true,
            icon: faCode,
        },
        {
            title: 'Web Development',
            description: 'We develop custom websites that are fast, secure, and tailored to your business needs.',
            link: 'Learn more >',
            bgColor: '#00f621ff',
            iconColor: '#fff',
            isFontAwesome: true,
            icon: faCode,
        },
    ]


  return (
    <section className="w-full overflow-hidden">
        <div className="flex flex-col items-center justify-center py-12 px-4 lg:px-10 gap-14">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 text-center"
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] leading-[1.1]">Other sevices you must appreciate</h2>
                <p className='text-base lg:text-lg text-[#64748b] max-w-xl text-center flex flex-col items-center justify-center gap-1'>
                    Focus only on the meaning, we take care of the design. As soon as the <br /> 
                    <span><span className="text-[#00a9f6]">meeting</span> end you can export in one click into your preferred.</span>
                </p>
            </motion.div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mt-12 flex-wrap ">
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
                            className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 opacity-50"
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
                                <p className="text-base text-[#64748b] text-left max-w-[260px] leading-relaxed">{item.description}</p>
                                {item.link && (
                                    <a href="#" className="text-[#00a9f6] font-bold text-sm">
                                        {item.link}
                                    </a>
                                )}
                        </div>
                        </motion.div>
                    ))}
                </div>
        </div>
    </section>
  );
}