import React from 'react';
import blogimg1 from '../assets/blog-v1-img1.jpg';
import blogimg2 from '../assets/blog-v1-img2.jpg';
import blogimg3 from '../assets/blog-v1-img3.jpg';
import { FaRegUserCircle } from 'react-icons/fa';
import { BiComment } from 'react-icons/bi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { BsBookmark } from 'react-icons/bs';


const LatestNews = () => {
    return (
        <div className='pt-[120px] pb-[90px] bg-white'>
            <div className='max-w-[1200px] mx-auto px-[15px]'>
                <div className='pb-[56px] text-center'>
                    <h1 className='amita-font text-[#3e8f75] text-lg mb-2 leading-7 font-semibold '>News Update</h1>
                    <h2 className='text-[32px] md:text-[60px] font-bold'>Latest News & Articles</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[15px] gap-[30px] '>
                    <div className='relative img-container mb-[35px]'>
                        <div className='img-container relative'>
                            <div className='blog-inner relative overflow-hidden rounded-[30px] rounded-br-none rounded-bl-none z-10'>
                                <img src={blogimg1.src} alt="" className='max-w-full h-auto w-full scale-100 delay-100 duration-700 ease-in-out blog-img rotate-0' />
                            </div>
                            <ul className='absolute left-[35px] -bottom-[12px] z-50 flex gap-[10px]'>
                                <li>
                                    <p className='bg-[#ffe132] font-medium capitalize px-[15px] py-[2px] leading-6 rounded-[13px]'>Charity</p>
                                </li>
                                <li>
                                    <p className='bg-[#3e8f75] font-medium text-white capitalize px-[15px] py-[2px] leading-6 rounded-[13px]'>12 Feb</p>
                                </li>
                            </ul>
                        </div>
                        <div className='content-container relative bg-white rounded-b-[30px] z-10 box-shadow-my px-[35px] pt-[45px] pb-[31px]'>
                            <div className='dummy-white-box'></div>
                            <div className='dummy-left-box'></div>
                            <div className='dummy-right-box'></div>
                            <div className='main-content'>
                                <ul className='relative mb-3 overflow-hidden flex gap-[15px] font-medium'>
                                    <li className='flex items-center text-[#131216B3] gap-3 text-[15px]'><FaRegUserCircle className='text-xl' /><span>By Admin</span></li>
                                    <li></li>
                                    <li className='flex items-center text-[#131216B3] gap-3 text-[15px]'><BiComment className='text-xl' /><span>12 Comment</span></li>
                                    <li></li>

                                </ul>
                                <h2 className='outfit-font text-[#141212] text-[22px] font-semibold capitalize leading-9 hover:text-[#3e8f75] delay-100 duration-200 cursor-pointer'>Charity of the Month Plan
                                    International UK</h2>
                                <div className='mt-6 flex justify-between items-center'>
                                    <p className='flex gap-1 items-center text-[18px] text-[#3e8f75] hover:text-[#141212] amita-font delay-100 duration-200 cursor-pointer'><span>Details More</span> <HiArrowNarrowRight className='text-xl relative top-[2px]' /></p>
                                    <BsBookmark className='text-[#74727f] text-2xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative img-container mb-[35px]'>
                        <div className='img-container relative'>
                            <div className='blog-inner relative overflow-hidden rounded-[30px] rounded-br-none rounded-bl-none z-10'>
                                <img src={blogimg2.src} alt="" className='max-w-full h-auto w-full scale-100 delay-100 duration-700 ease-in-out blog-img rotate-0' />
                            </div>
                            <ul className='absolute left-[35px] -bottom-[12px] z-50 flex gap-[10px]'>
                                <li>
                                    <p className='bg-[#ffe132] font-medium capitalize px-[15px] py-[2px] leading-6 rounded-[13px]'>Charity</p>
                                </li>
                                <li>
                                    <p className='bg-[#3e8f75] font-medium text-white capitalize px-[15px] py-[2px] leading-6 rounded-[13px]'>12 Feb</p>
                                </li>
                            </ul>
                        </div>
                        <div className='content-container relative bg-white rounded-b-[30px] z-10 box-shadow-my px-[35px] pt-[45px] pb-[31px]'>
                            <div className='dummy-white-box'></div>
                            <div className='dummy-left-box'></div>
                            <div className='dummy-right-box'></div>
                            <div className='main-content'>
                                <ul className='relative mb-3 overflow-hidden flex gap-[15px] font-medium'>
                                    <li className='flex items-center text-[#131216B3] gap-3 text-[15px]'><FaRegUserCircle className='text-xl' /><span>By Admin</span></li>
                                    <li></li>
                                    <li className='flex items-center text-[#131216B3] gap-3 text-[15px]'><BiComment className='text-xl' /><span>12 Comment</span></li>
                                    <li></li>

                                </ul>
                                <h2 className='outfit-font text-[#141212] text-[22px] font-semibold capitalize leading-9 hover:text-[#3e8f75] delay-100 duration-200 cursor-pointer'>Charity of the Month Plan
                                    International UK</h2>
                                <div className='mt-6 flex justify-between items-center'>
                                    <p className='flex gap-1 items-center text-[18px] text-[#3e8f75] hover:text-[#141212] amita-font delay-100 duration-200 cursor-pointer'><span>Details More</span> <HiArrowNarrowRight className='text-xl relative top-[2px]' /></p>
                                    <BsBookmark className='text-[#74727f] text-2xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative img-container mb-[35px]'>
                        <div className='img-container relative'>
                            <div className='blog-inner relative overflow-hidden rounded-[30px] rounded-br-none rounded-bl-none z-10'>
                                <img src={blogimg3.src} alt="" className='max-w-full h-auto w-full scale-100 delay-100 duration-700 ease-in-out blog-img rotate-0' />
                            </div>
                            <ul className='absolute left-[35px] -bottom-[12px] z-50 flex gap-[10px]'>
                                <li>
                                    <p className='bg-[#ffe132] font-medium capitalize px-[15px] py-[2px] leading-6 rounded-[13px]'>Charity</p>
                                </li>
                                <li>
                                    <p className='bg-[#3e8f75] font-medium text-white capitalize px-[15px] py-[2px] leading-6 rounded-[13px]'>12 Feb</p>
                                </li>
                            </ul>
                        </div>
                        <div className='content-container relative bg-white rounded-b-[30px] z-10 box-shadow-my px-[35px] pt-[45px] pb-[31px]'>
                            <div className='dummy-white-box'></div>
                            <div className='dummy-left-box'></div>
                            <div className='dummy-right-box'></div>
                            <div className='main-content'>
                                <ul className='relative mb-3 overflow-hidden flex gap-[15px] font-medium'>
                                    <li className='flex items-center text-[#131216B3] gap-3 text-[15px]'><FaRegUserCircle className='text-xl' /><span>By Admin</span></li>
                                    <li></li>
                                    <li className='flex items-center text-[#131216B3] gap-3 text-[15px]'><BiComment className='text-xl' /><span>12 Comment</span></li>
                                    <li></li>

                                </ul>
                                <h2 className='outfit-font text-[#141212] text-[22px] font-semibold capitalize leading-9 hover:text-[#3e8f75] delay-100 duration-200 cursor-pointer'>Charity of the Month Plan
                                    International UK</h2>
                                <div className='mt-6 flex justify-between items-center'>
                                    <p className='flex gap-1 items-center text-[18px] text-[#3e8f75] hover:text-[#141212] amita-font delay-100 duration-200 cursor-pointer'><span>Details More</span> <HiArrowNarrowRight className='text-xl relative top-[2px]' /></p>
                                    <BsBookmark className='text-[#74727f] text-2xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;