import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const tabs = [
    {
        id: 'why',
        label: 'Why you choose our service?',
        title: 'We will turn your idea in the successful business model framework 😇',
        description: 'Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.',
        benefits: ['Medical and vision', 'HSAs and FSAs', 'Life insurance', 'Commuter benefits'],
        image: 'https://img.freepik.com/free-vector/professional-analyst-working-with-data_74855-4428.jpg'
    },
    {
        id: 'promise',
        label: "What's our business promise?",
        title: 'Committed to delivering excellence and reliability in every step 🤝',
        description: 'Our promise is to provide scalable solutions that grow with your business needs, ensuring long-term success and sustainability.',
        benefits: ['Scalability', 'Reliability', 'Expert Support', 'Cost-Effective'],
        image: 'https://img.freepik.com/free-vector/business-team-brainstorming-startup-project_74855-6953.jpg'
    },
    {
        id: 'plan',
        label: "What's our role model plan?",
        title: 'Structured plans designed for every stage of your growth 🚀',
        description: 'Whether you are a startup or an enterprise, our plans are tailored to provide maximum value and efficiency for your specific industry.',
        benefits: ['Custom Strategy', 'Monthly Reviews', 'Priority Access', 'Advanced Analytics'],
        image: 'https://img.freepik.com/free-vector/flat-design-business-growth-concept_23-2149150073.jpg'
    }
];

export default function Features() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section id="supports" className="py-20 px-4 lg:px-20 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center border-b border-gray-100 mb-16">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-4 text-sm font-semibold transition-all relative ${
                            activeTab.id === tab.id ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        {tab.label}
                        {activeTab.id === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-200"
                            />
                        )}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                >
                    {/* Left Side: Content */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            {activeTab.title}
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                            {activeTab.description}
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {activeTab.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#38CB89] text-xl" />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <a href="#" className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Explore more <span>&gt;</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/30 rounded-full blur-3xl" />
                            
                            <img 
                                src={activeTab.image} 
                                alt={activeTab.label}
                                className="w-full h-auto rounded-3xl"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
