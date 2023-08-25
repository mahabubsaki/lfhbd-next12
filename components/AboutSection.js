import React from 'react';
import helpingHand from '../assets/about-v1-shape3.png';
import solidarityICon from '../assets/solidarity.png';
import donationIcon from '../assets/charity.png';
import childImg from '../assets/about-v1-img1.jpg';
import star from '../assets/about-v1-shape1.png';
import chilplaying from '../assets/about-v1-img2.jpg';
import playingshape from '../assets/about-v1-shape2.png';
import blood from '../assets/blood.png';

const AboutSection = () => {
    return (
        <div className='mb-[120px] overflow-hidden bg-white z-10 relative min-h-[874px]'>
            <div className='absolute hidden 2xl:block left-0 -bottom-[60px] -z-10 floating'>
                <img src={helpingHand.src} alt="" className='max-w-full h-auto delay-100 duration-700 ease-in-out' />
            </div>
            <div className='lg:px-10 lg:max-w-full md:max-w-[720px] sm:max-w-[600px] max-w-full px-5 2xl:px-0  ml-auto mr-auto 2xl:max-w-[78vw] 2xl:ml-auto 2xl:mr-0  '>


                <div className='flex gap-12 flex-col xl:flex-row items-stretch'>
                    <div className='w-full xl:w-1/2'>
                        <div className='pb-[26px]'>
                            <h6 className='mb-[6px] text-[18px] text-[#3e8f75] amita-font leading-7 font-semibold tracking-[1.8px]'>Know About Our Gifall</h6>
                            <h2 className='text-[32px] md:text-[55px] capitalize font-bold leading-10 md:leading-[72px] outfit-font'>Let's Retain & Grow Your
                                Donor Base</h2>
                        </div>
                        <div className='text-[18px] leading-8 text-[#131216CC] outfit-font'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Here's what to know about how to start a consulting business</p>
                        </div>
                        <div className='mt-10 flex flex-col md:flex-row py-5'>
                            <div className='px-[15px] w-full md:w-1/2'>
                                <div className='mb-[55px] relative'>
                                    <div className='flex gap-7 items-center  myGroup'>
                                        <div className='relative'>
                                            <img src={solidarityICon.src} className='myIcon' alt="" width={100} height={100} />
                                            <p className='absolute w-[40px] h-[40px] rounded-full bg-[#ffe132] -z-10 top-[29px] left-[9px]'></p>
                                        </div>
                                        <div className='outfit-font'>
                                            <h2 className='text-[#141212] text-2xl font-semibold capitalize mb-3 '>Fundrising</h2>
                                            <p className='text-[#131216CC] text-justify'>Lorem ipsum dolor sit ametsssss teture nod adipisicing elit sed</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-7 items-center  myGroup'>
                                        <div className='relative'>
                                            <img src={donationIcon.src} className='myIcon' alt="" width={100} height={100} />
                                            <p className='absolute w-[40px] h-[40px] rounded-full bg-[#ffe132] -z-10 top-[20px] left-[9px]'></p>
                                        </div>
                                        <div className='outfit-font'>
                                            <h2 className='text-[#141212] text-2xl font-semibold capitalize mb-3 '>Make Donation</h2>
                                            <p className='text-[#131216CC] text-justify'>Lorem ipsum dolor sit ametsssss teture nod adipisicing elit sed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[55px]'>
                                    <div className='relative'>
                                        <p className='list-green-block'><span className='inline-block -mt-[1px] text-[18px] leading-8 pl-[30px]'>Raised For Charities</span></p>
                                    </div>
                                    <div className='relative'>
                                        <p className='list-green-block'><span className='inline-block -mt-[1px] text-[18px] leading-8 pl-[30px]'>Registered Charities Supported</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='px-[15px] w-full md:w-1/2'>
                                <div className='relative ml-0 md:ml-[60px] '>
                                    <div className='w-[290px] relative mt-20 md:mt-8 z-10 fund-box mx-auto'>
                                        <p className='absolute -top-[40px] right-[12px] w-[30px] h-[30px] z-10  bg-[#ffe132] floating'></p>
                                        <div className='fund-box-bg'>

                                        </div>
                                        <div className='w-[150px] mx-auto z-10 relative'>
                                            <img src={childImg.src} className='w-[150px] h-[150px] rounded-full' alt="" />
                                            <div className='absolute top-[52px] round -left-[15px] z-20'>
                                                <img src={star.src} alt="" />
                                            </div>

                                        </div>
                                        <div className='mt-10 text-center outfit-font'>
                                            <h2 className='text-[#3e8f75] text-[30px] font-bold leading-10'>34,434</h2>
                                            <h2 className='text-[#141212] text-[24px] leading-9 mb-[2px]'>Helped fund</h2>
                                            <p className='leading-8 text-[#131216CC]'>Wishes all over the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <div className='relative h-full w-full overflow-hidden'>
                            <div className='absolute hidden md:block top-[35px] left-0 z-10'>
                                <img src={playingshape.src} alt="" />
                            </div>
                            <img src={chilplaying.src} alt="" className='w-full h-full' />
                        </div>
                    </div>
                </div>
                <div className='mt-[60px] flex justify-between flex-col lg:flex-row bg-[#f5f4ec] py-[25px] px-[20px] lg:px-[35px] mx-3 sm:mx-10 xl:mx-0 xl:max-w-[1150px] items-center gap-[45px] lg:gap-0'>
                    <div className='flex-col flex lg:flex-row items-center gap-[45px]'>
                        <div>
                            <img src={blood.src} alt="" width={80} height={80} />
                        </div>
                        <p className='outfit-font text-[22px] lg:text-[34px] leading-10 text-center lg:text-left'>Since 1980, we’ve granted more than <br />
                            120,000 wishes all over the world.</p>
                    </div>
                    <button className="px-[55px] leading-[55px] font-medium text-[#141212] bg-[#ffe132] rounded-[30px]">
                        LEARN ABOUT US
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;