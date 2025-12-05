import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules"

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

const SwiperJS = () => {
    return (
        <div className="flex justify-center">

            <Swiper
                effect="cube"
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 30,
                    shadowScale: 0.94,
                }}
                speed={1000}
                loop={true}
                autoplay={{ delay: 2500 }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay, EffectCube]}
                className="w-[80%] h-[80vh]"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className='h-full w-full bg-cover bg-center relative'
                        style={{ backgroundImage: `url("https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg")` }}
                    >
                        <div className='absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-20'>
                            <h1 className='text-5xl font-bold text-white mb-3'>Discover The New Style</h1>
                            <p className='text-lg text-gray-200 max-w-xl mb-5'>
                                Upgrade your wardrobe with premium fashion designed for comfort and confidence.
                            </p>
                            <button className='px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className='h-full w-full bg-cover bg-center relative'
                        style={{ backgroundImage: `url("https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg")` }}
                    >
                        <div className='absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-20'>
                            <h1 className='text-5xl font-bold text-white mb-3'>Smart Gadgets For You</h1>
                            <p className='text-lg text-gray-200 max-w-xl mb-5'>
                                Latest smartwatches, headphones, and modern tech — built for your lifestyle.
                            </p>
                            <button className='px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200'>
                                Explore Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        className='h-full w-full bg-cover bg-center relative'
                        style={{ backgroundImage: `url("https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg")` }}
                    >
                        <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-start px-20'>
                            <h1 className='text-5xl font-bold text-white mb-3'>Feel The Comfort</h1>
                            <p className='text-lg text-gray-200 max-w-xl mb-5'>
                                Soft, breathable fabrics crafted for your everyday comfort.
                            </p>
                            <button className='px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200'>
                                Order Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div
                        className='h-full w-full bg-cover bg-center relative'
                        style={{ backgroundImage: `url("https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg")` }}
                    >
                        <div className='absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-20'>
                            <h1 className='text-5xl font-bold text-white mb-3'>Exclusive Arrivals</h1>
                            <p className='text-lg text-gray-200 max-w-xl mb-5'>
                                Be the first to grab the newest arrivals of the season.
                            </p>
                            <button className='px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200'>
                                View Collection
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default SwiperJS
