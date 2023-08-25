import React, { useState } from 'react';
import feature2shape from '../assets/feature-v2-shape2.png';
import feature1shape from '../assets/feature-v2-shape1.png';
import featureimg from '../assets/feature-v2-img1.jpg';
import featureimg2 from '../assets/feature-v2-img2.jpg';
import featureimg3 from '../assets/feature-v2-img3.jpg';
import bloodDonation from '../assets/blood-donation.png';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';


const FeatureBottom = () => {
    const [timer, setTimer] = useState(true);
    return (
        <div className='pb-[120px] bg-white pt-[82px]'>
            <div className='max-w-[1200px] px-[30px] flex gap-[30px] mx-auto flex-col xl:flex-row'>
                <div className='xl:w-1/2 w-full'>
                    <div className='max-w-[500px] md:max-w-[750px] xl:max-w-full   xl:mr-[30px] z-10 relative mx-auto xl:mx-0'>
                        <div className='absolute left-[108px] -bottom-[95px] hidden md:block -z-10 floating'>
                            <img src={feature2shape.src} alt="" />
                        </div>
                        <div className='relative block mr-0 md:mr-[65px] z-10 left-img-container'>
                            <div className='shape absolute -top-[95px] right-0 z-10'>
                                <img src={feature1shape.src} alt="" className='overflow-hidden hidden md:block rounded-md float-right max-w-none' />
                            </div>
                            <img src={featureimg.src} alt="" className='max-w-none w-full md:w-auto float-none md:float-right rounded-md overflow-hidden' />
                        </div>
                        <div className='md:absolute relative right-0 bottom-0 mt-[30px] md:-bottom-[60px] z-50'>
                            <div className='relative block rounded-[10px] overflow-hidden feature2-inner'>
                                <img src={featureimg2.src} alt="" className='w-auto duration-500 ease-in scale-105 img-inner-f2' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:w-1/2 w-full'>
                    <div className='md:ml-[10px] relative block mt-[50px] lg:mt-0'>
                        <div className='pb-[21px]'>
                            <h6 className='amita-font leading-7 text-[20px] md:text-lg text-[#3e8f75] tracking-widest font-semibold'>Our Support Team</h6>
                            <h2 className='font-bold text-[#141212] text-[32px] md:text-[55px]'>There's a lot more <br />
                                We can do, together</h2>
                        </div>
                        <p className='text-[#121316CC] amita-font mb-[19px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea It is a long established fact that a reade</p>
                        <p className='text-[#121316CC] amita-font pb-[34px] border-b border-[#e7e9eb] relative'>here are many variations of passages of lorem Ipsum available, but the majority have suffered alteration dolore magna</p>
                        <div className='mt-[40px] relative flex items-center flex-col md:flex-row'>
                            <div className='w-full md:w-1/2 flex flex-col gap-16 items-start'>
                                <div className='flex gap-6'>
                                    <div className='relative block w-[70px] h-[70px] z-10'>
                                        <img src={bloodDonation.src} className='w-full h-full' alt="" />
                                        <p className='absolute w-[50px] h-[50px] rounded-full bg-[#ffe132] -bottom-[5px] -right-[5px] -z-10'></p>
                                    </div>
                                    <div>
                                        <h1 className='text-4xl font-bold leading-10 amita-font text-[#141212]'>

                                            <ReactVisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                                                {({ isVisible }) => (
                                                    <div style={{ height: 50 }}>
                                                        {isVisible ? <CountUp onEnd={() => setTimer(false)} end={15224} start={timer ? 0 : 15224} useEasing suffix='+' prefix='$' duration={5} separator=',' /> : null}
                                                    </div>
                                                )}
                                            </ReactVisibilitySensor>
                                        </h1>
                                        <p className='font-semibold leading-7 text-[#131216CC] mt-2'>Since 2021 Donations</p>
                                    </div>
                                </div>

                                <button className="px-[55px] leading-[55px] font-medium text-[#141212] bg-[#ffe132] rounded-[30px] ">
                                    FUNDRAISE NOW
                                </button>

                            </div>
                            <div className='w-full md:w-1/2'>
                                <div className='relative block max-w-[230px] mt-[30px] ml-0 md:ml-[70px]'>
                                    <div className='relative block rounded overflow-hidden bg-[#387e67]'>
                                        <img src={featureimg3.src} alt="" className='w-full mix-blend-overlay' />
                                        <div className='absolute left-[25px] bottom-3 z-50'>
                                            <p className='text-[20px] text-white leading-8 font-bold amita-font'>Helped fund </p>
                                            <p className='text-[42px] leading-[52px] text-white font-bold'>$24,537 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default FeatureBottom;