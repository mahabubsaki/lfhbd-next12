import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import testi from '../assets/testimonial-v1-shape1.png';
import testi1 from '../assets/testimonial-v1-shape2.png';
import { FaQuoteLeft } from 'react-icons/fa';
import testifeedback from '../assets/testimonial-v1-img2.jpg';


const Testimonial = () => {
    return (
        <div className='bg-white pb-[120px] pt-[90px]'>
            <div className='max-w-[1800px] mx-auto px-[15px]'>
                <div className='pb-[56px] text-center'>
                    <h1 className='amita-font text-[#3e8f75] text-lg mb-2 leading-7 font-semibold '>Testimonial</h1>
                    <h2 className='text-[32px] md:text-[60px] font-bold'>What Our Clients Are Saying</h2>
                </div>
                <div>
                    <Swiper
                        breakpoints={{
                            1: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1270: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        effect='coverflow'
                        speed={2000}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        grabCursor={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='text-center block bg-[#d3e5df] relative overflow-hidden rounded-[3px] px-[45px] pt-[40px] pb-[60px] z-10 mx-[10px]'>
                                <div className='absolute top-0 right-0 -z-10'>
                                    <img src={testi.src} alt="" className='block w-full' />
                                </div>
                                <div className='absolute left-0 bottom-0 -z-10'>
                                    <img src={testi1.src} alt="" className='block w-full' />
                                </div>
                                <div className='absolute top-[45px] right-[60px] flex items-center justify-center text-2xl w-[75px] h-[75px] z-20 rounded-full bg-[#ffe132]'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='relative block w-[85px] h-[85px] overflow-hidden rounded-full mx-auto my-[14px]'>
                                    <img src={testifeedback.src} alt="" className='w-full h-full' />
                                </div>
                                <div className='mb-[28px]'>
                                    <h2 className='amita-font text-[26px] text-[#141212] leading-9 font-bold'>Any Ron Agona</h2>
                                    <p className='outfit-font leading-8 text-[#407d69] font-medium'>South lane , United States</p>
                                </div>
                                <p className='text-xl leading-9 font-semibold'>
                                    Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center block bg-[#d3e5df] relative overflow-hidden rounded-[3px] px-[45px] pt-[40px] pb-[60px] z-10 mx-[10px]'>
                                <div className='absolute top-0 right-0 -z-10'>
                                    <img src={testi.src} alt="" className='block w-full' />
                                </div>
                                <div className='absolute left-0 bottom-0 -z-10'>
                                    <img src={testi1.src} alt="" className='block w-full' />
                                </div>
                                <div className='absolute top-[45px] right-[60px] flex items-center justify-center text-2xl w-[75px] h-[75px] z-20 rounded-full bg-[#ffe132]'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='relative block w-[85px] h-[85px] overflow-hidden rounded-full mx-auto my-[14px]'>
                                    <img src={testifeedback.src} alt="" className='w-full h-full' />
                                </div>
                                <div className='mb-[28px]'>
                                    <h2 className='amita-font text-[26px] text-[#141212] leading-9 font-bold'>Any Ron Agona</h2>
                                    <p className='outfit-font leading-8 text-[#407d69] font-medium'>South lane , United States</p>
                                </div>
                                <p className='text-xl leading-9 font-semibold'>
                                    Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div></SwiperSlide>
                        <SwiperSlide><div className='text-center block bg-[#d3e5df] relative overflow-hidden rounded-[3px] px-[45px] pt-[40px] pb-[60px] z-10 mx-[10px]'>
                            <div className='absolute top-0 right-0 -z-10'>
                                <img src={testi.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute left-0 bottom-0 -z-10'>
                                <img src={testi1.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute top-[45px] right-[60px] flex items-center justify-center text-2xl w-[75px] h-[75px] z-20 rounded-full bg-[#ffe132]'>
                                <FaQuoteLeft />
                            </div>
                            <div className='relative block w-[85px] h-[85px] overflow-hidden rounded-full mx-auto my-[14px]'>
                                <img src={testifeedback.src} alt="" className='w-full h-full' />
                            </div>
                            <div className='mb-[28px]'>
                                <h2 className='amita-font text-[26px] text-[#141212] leading-9 font-bold'>Any Ron Agona</h2>
                                <p className='outfit-font leading-8 text-[#407d69] font-medium'>South lane , United States</p>
                            </div>
                            <p className='text-xl leading-9 font-semibold'>
                                Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='text-center block bg-[#d3e5df] relative overflow-hidden rounded-[3px] px-[45px] pt-[40px] pb-[60px] z-10 mx-[10px]'>
                            <div className='absolute top-0 right-0 -z-10'>
                                <img src={testi.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute left-0 bottom-0 -z-10'>
                                <img src={testi1.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute top-[45px] right-[60px] flex items-center justify-center text-2xl w-[75px] h-[75px] z-20 rounded-full bg-[#ffe132]'>
                                <FaQuoteLeft />
                            </div>
                            <div className='relative block w-[85px] h-[85px] overflow-hidden rounded-full mx-auto my-[14px]'>
                                <img src={testifeedback.src} alt="" className='w-full h-full' />
                            </div>
                            <div className='mb-[28px]'>
                                <h2 className='amita-font text-[26px] text-[#141212] leading-9 font-bold'>Any Ron Agona</h2>
                                <p className='outfit-font leading-8 text-[#407d69] font-medium'>South lane , United States</p>
                            </div>
                            <p className='text-xl leading-9 font-semibold'>
                                Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='text-center block bg-[#d3e5df] relative overflow-hidden rounded-[3px] px-[45px] pt-[40px] pb-[60px] z-10 mx-[10px]'>
                            <div className='absolute top-0 right-0 -z-10'>
                                <img src={testi.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute left-0 bottom-0 -z-10'>
                                <img src={testi1.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute top-[45px] right-[60px] flex items-center justify-center text-2xl w-[75px] h-[75px] z-20 rounded-full bg-[#ffe132]'>
                                <FaQuoteLeft />
                            </div>
                            <div className='relative block w-[85px] h-[85px] overflow-hidden rounded-full mx-auto my-[14px]'>
                                <img src={testifeedback.src} alt="" className='w-full h-full' />
                            </div>
                            <div className='mb-[28px]'>
                                <h2 className='amita-font text-[26px] text-[#141212] leading-9 font-bold'>Any Ron Agona</h2>
                                <p className='outfit-font leading-8 text-[#407d69] font-medium'>South lane , United States</p>
                            </div>
                            <p className='text-xl leading-9 font-semibold'>
                                Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='text-center block bg-[#d3e5df] relative overflow-hidden rounded-[3px] px-[45px] pt-[40px] pb-[60px] z-10 mx-[10px]'>
                            <div className='absolute top-0 right-0 -z-10'>
                                <img src={testi.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute left-0 bottom-0 -z-10'>
                                <img src={testi1.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute top-[45px] right-[60px] flex items-center justify-center text-2xl w-[75px] h-[75px] z-20 rounded-full bg-[#ffe132]'>
                                <FaQuoteLeft />
                            </div>
                            <div className='relative block w-[85px] h-[85px] overflow-hidden rounded-full mx-auto my-[14px]'>
                                <img src={testifeedback.src} alt="" className='w-full h-full' />
                            </div>
                            <div className='mb-[28px]'>
                                <h2 className='amita-font text-[26px] text-[#141212] leading-9 font-bold'>Any Ron Agona</h2>
                                <p className='outfit-font leading-8 text-[#407d69] font-medium'>South lane , United States</p>
                            </div>
                            <p className='text-xl leading-9 font-semibold'>
                                Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='text-center block bg-[#d3e5df] relative overflow-hidden rounded-[3px] px-[45px] pt-[40px] pb-[60px] z-10 mx-[10px]'>
                            <div className='absolute top-0 right-0 -z-10'>
                                <img src={testi.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute left-0 bottom-0 -z-10'>
                                <img src={testi1.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute top-[45px] right-[60px] flex items-center justify-center text-2xl w-[75px] h-[75px] z-20 rounded-full bg-[#ffe132]'>
                                <FaQuoteLeft />
                            </div>
                            <div className='relative block w-[85px] h-[85px] overflow-hidden rounded-full mx-auto my-[14px]'>
                                <img src={testifeedback.src} alt="" className='w-full h-full' />
                            </div>
                            <div className='mb-[28px]'>
                                <h2 className='amita-font text-[26px] text-[#141212] leading-9 font-bold'>Any Ron Agona</h2>
                                <p className='outfit-font leading-8 text-[#407d69] font-medium'>South lane , United States</p>
                            </div>
                            <p className='text-xl leading-9 font-semibold'>
                                Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='text-center block bg-[#d3e5df] relative overflow-hidden rounded-[3px] px-[45px] pt-[40px] pb-[60px] z-10 mx-[10px]'>
                            <div className='absolute top-0 right-0 -z-10'>
                                <img src={testi.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute left-0 bottom-0 -z-10'>
                                <img src={testi1.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute top-[45px] right-[60px] flex items-center justify-center text-2xl w-[75px] h-[75px] z-20 rounded-full bg-[#ffe132]'>
                                <FaQuoteLeft />
                            </div>
                            <div className='relative block w-[85px] h-[85px] overflow-hidden rounded-full mx-auto my-[14px]'>
                                <img src={testifeedback.src} alt="" className='w-full h-full' />
                            </div>
                            <div className='mb-[28px]'>
                                <h2 className='amita-font text-[26px] text-[#141212] leading-9 font-bold'>Any Ron Agona</h2>
                                <p className='outfit-font leading-8 text-[#407d69] font-medium'>South lane , United States</p>
                            </div>
                            <p className='text-xl leading-9 font-semibold'>
                                Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='text-center block bg-[#d3e5df] relative overflow-hidden rounded-[3px] px-[45px] pt-[40px] pb-[60px] z-10 lg:mx-0 mx-[10px]'>
                            <div className='absolute top-0 right-0 -z-10'>
                                <img src={testi.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute left-0 bottom-0 -z-10'>
                                <img src={testi1.src} alt="" className='block w-full' />
                            </div>
                            <div className='absolute top-[45px] right-[60px] flex items-center justify-center text-2xl w-[75px] h-[75px] z-20 rounded-full bg-[#ffe132]'>
                                <FaQuoteLeft />
                            </div>
                            <div className='relative block w-[85px] h-[85px] overflow-hidden rounded-full mx-auto my-[14px]'>
                                <img src={testifeedback.src} alt="" className='w-full h-full' />
                            </div>
                            <div className='mb-[28px]'>
                                <h2 className='amita-font text-[26px] text-[#141212] leading-9 font-bold'>Any Ron Agona</h2>
                                <p className='outfit-font leading-8 text-[#407d69] font-medium'>South lane , United States</p>
                            </div>
                            <p className='text-xl leading-9 font-semibold'>
                                Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;