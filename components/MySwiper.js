import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import slider1 from '../assets/slider-v1-img1.jpg';
import slider2 from '../assets/slider-v1-img2.jpg';
import slider3 from '../assets/slider-v1-img3.jpg';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const MySwiper = () => {
    return (
        <div className='overflow-hidden w-full h-[900px] relative top-1'>
            <AutoplaySlider play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000} animation="cubeAnimation" className='max-h-[800px]' infinite mobileTouch fillParent >
                <div className='w-full h-full relative'>

                    <img src={slider1.src} alt="" className='w-full h-full aspect-square' />
                    <div className='z-20 absolute inset-0'>
                        <div className='md:max-w-[720px] xl:max-w-[1200px] mx-auto h-full flex items-center px-[15px]'>
                            <div className='flex flex-col items-start'>
                                <p className='text-[#ffe132] lowercase amita-font text-2xl leading-8 mb-[17px]'>All-in-one Giving</p>
                                <h2 className='font-bold text-white text-[40px] md:text-[90px]'>
                                    Give The Gift <br /> Today
                                </h2>
                                <p className='text-white  amita-font text-xl leading-8 mb-[17px]'>
                                    We want to make giving simple, fun and meaningful for you. <br />
                                    The possibilities are endless!
                                </p>
                                <button className="px-[55px] leading-[65px] mt-[52px] font-medium text-white inline-block bg-[#3e8f75] rounded-[30px]">
                                    BE A VOLUNTEER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full relative'>

                    <img src={slider2.src} alt="" className='w-full h-full aspect-square' />
                    <div className='z-20 absolute inset-0'>
                        <div className='md:max-w-[720px] xl:max-w-[1200px] mx-auto h-full flex items-center px-[15px]'>
                            <div className='flex flex-col items-start'>
                                <p className='text-[#ffe132] lowercase amita-font text-2xl leading-8 mb-[17px]'>All-in-one Giving</p>
                                <h2 className='font-bold text-white text-[40px] md:text-[90px]'>
                                    Give The Gift <br /> Today
                                </h2>
                                <p className='text-white  amita-font text-xl leading-8 mb-[17px]'>
                                    We want to make giving simple, fun and meaningful for you. <br />
                                    The possibilities are endless!
                                </p>
                                <button className="px-[55px] leading-[65px] mt-[52px] font-medium text-white inline-block bg-[#3e8f75] rounded-[30px]">
                                    BE A VOLUNTEER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full relative'>

                    <img src={slider3.src} alt="" className='w-full h-full aspect-square' />
                    <div className='z-20 absolute inset-0'>
                        <div className='md:max-w-[720px] xl:max-w-[1200px] mx-auto h-full flex items-center px-[15px]'>
                            <div className='flex flex-col items-start'>
                                <p className='text-[#ffe132] lowercase amita-font text-2xl leading-8 mb-[17px]'>All-in-one Giving</p>
                                <h2 className='font-bold text-white text-[40px] md:text-[90px]'>
                                    Give The Gift <br /> Today
                                </h2>
                                <p className='text-white  amita-font text-xl leading-8 mb-[17px]'>
                                    We want to make giving simple, fun and meaningful for you. <br />
                                    The possibilities are endless!
                                </p>
                                <button className="px-[55px] leading-[65px] mt-[52px] font-medium text-white inline-block bg-[#3e8f75] rounded-[30px]">
                                    BE A VOLUNTEER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full relative'>

                    <img src={slider1.src} alt="" className='w-full h-full aspect-square' />
                    <div className='z-20 absolute inset-0'>
                        <div className='md:max-w-[720px] xl:max-w-[1200px] mx-auto h-full flex items-center px-[15px]'>
                            <div className='flex flex-col items-start'>
                                <p className='text-[#ffe132] lowercase amita-font text-2xl leading-8 mb-[17px]'>All-in-one Giving</p>
                                <h2 className='font-bold text-white text-[40px] md:text-[90px]'>
                                    Give The Gift <br /> Today
                                </h2>
                                <p className='text-white  amita-font text-xl leading-8 mb-[17px]'>
                                    We want to make giving simple, fun and meaningful for you. <br />
                                    The possibilities are endless!
                                </p>
                                <button className="px-[55px] leading-[65px] mt-[52px] font-medium text-white inline-block bg-[#3e8f75] rounded-[30px]">
                                    BE A VOLUNTEER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full relative'>

                    <img src={slider2.src} alt="" className='w-full h-full aspect-square' />
                    <div className='z-20 absolute inset-0'>
                        <div className='md:max-w-[720px] xl:max-w-[1200px] mx-auto h-full flex items-center px-[15px]'>
                            <div className='flex flex-col items-start'>
                                <p className='text-[#ffe132] lowercase amita-font text-2xl leading-8 mb-[17px]'>All-in-one Giving</p>
                                <h2 className='font-bold text-white text-[40px] md:text-[90px]'>
                                    Give The Gift <br /> Today
                                </h2>
                                <p className='text-white  amita-font text-xl leading-8 mb-[17px]'>
                                    We want to make giving simple, fun and meaningful for you. <br />
                                    The possibilities are endless!
                                </p>
                                <button className="px-[55px] leading-[65px] mt-[52px] font-medium text-white inline-block bg-[#3e8f75] rounded-[30px]">
                                    BE A VOLUNTEER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full relative'>

                    <img src={slider3.src} alt="" className='w-full h-full aspect-square' />
                    <div className='z-20 absolute inset-0'>
                        <div className='md:max-w-[720px] xl:max-w-[1200px] mx-auto h-full flex items-center px-[15px]'>
                            <div className='flex flex-col items-start'>
                                <p className='text-[#ffe132] lowercase amita-font text-2xl leading-8 mb-[17px]'>All-in-one Giving</p>
                                <h2 className='font-bold text-white text-[40px] md:text-[90px]'>
                                    Give The Gift <br /> Today
                                </h2>
                                <p className='text-white  amita-font text-xl leading-8 mb-[17px]'>
                                    We want to make giving simple, fun and meaningful for you. <br />
                                    The possibilities are endless!
                                </p>
                                <button className="px-[55px] leading-[65px] mt-[52px] font-medium text-white inline-block bg-[#3e8f75] rounded-[30px]">
                                    BE A VOLUNTEER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </AutoplaySlider>

        </div>
    );
};

export default MySwiper;