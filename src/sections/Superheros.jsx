import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Superheros() {
    const superheros = [
        {
            name: "Superman",
            role: "Superhero",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            github: "https://github.com/faelsa",
        },
        {
            name: "Batman",
            role: "Superhero",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            github: "https://github.com/faelsa",
        },
        {
            name: "Wonder Woman",
            role: "Superhero",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            github: "https://github.com/faelsa",
        },
        {
            name: "The Flash",
            role: "Superhero",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            github: "https://github.com/faelsa",
        },
    ]

    return (
        <section id="about" className="w-full overflow-hidden">
            <div className="flex flex-col items-center justify-center pt-12 lg:pt-20 pb-6 lg:pb-10 px-6 lg:px-10 space-y-8 lg:space-y-15">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col items-center justify-center space-y-4 lg:space-y-5"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800">
                        Meet our superheros
                    </h2>
                    <p className="text-base lg:text-lg text-center text-gray-600 max-w-2xl px-4">
                        Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.
                    </p>
                </motion.div>
            </div>

            <div className="px-6 lg:px-10 pb-12 lg:pb-20">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-12"
                >
                    {superheros.map((user, i) => (
                      <SwiperSlide key={i}>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                          <img src={user.img} className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-gray-50" />
                          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                          <p className="text-blue-600 font-medium">{user.role}</p>
                          <a href={user.github} className="text-gray-600 font-medium hover:text-gray-800 transition-colors">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
            </div>
        </section>
    )
}