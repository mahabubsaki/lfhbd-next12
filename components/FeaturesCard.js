
import React, { useEffect } from 'react';
import 'animate.css';
import shape1 from '../assets/feature-v1-shape1.png';
import shape2 from '../assets/feature-v1-shape2.png';
import donationIcon from '../assets/charity.png';
import heartIcon from '../assets/heart.png';
import foodIcon from '../assets/food.png';

const FeaturesCard = () => {
    useEffect(() => {


    }, []);
    return (
        <div className='pt-[60px] pb-[90px] bg-white'>
            <div data-css-type='row' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[30px] max-w-[1200px] mx-auto text-center gap-[30px]">
                <div data-css-type='column-1' className='pt-[50px] group pb-[40px] relative bg-[#f5f5f5] rounded-[10px] overflow-hidden z-10 mb-[30px] animate__animated animate__fadeInLeft animate__slow'>
                    <div data-css-type='first-shape' className='absolute top-0 right-0 -z-10'>
                        <img src={shape1.src} alt="#" className='max-w-full h-auto duration-700 delay-100' />
                    </div>
                    <div data-css-type='second-shape' className='absolute left-0 bottom-0-0 -z-10'>
                        <img src={shape2.src} alt="#" className='max-w-full h-auto duration-700 delay-100' />
                    </div>
                    <div data-css-type='icon-container' className='z-10 mb-7 relative inline-block '>

                        <p data-css-type='yellow-dot' className='absolute top-[9px] left-[5px] w-[35px] h-[35px] rounded-full bg-[#ffe132] -z-10'></p>
                        <img className='group-hover:scale-90 duration-500 delay-100' src={donationIcon.src} width={70} height={70} alt="" />

                    </div>
                    <div data-css-type='feature-container' className=''>
                        <h2 className='amita-font text-[#141212] text-[28px] font-bold capitalize leading-9 mb-2 hover:text-[#3e8f75] delay-100 duration-200 cursor-pointer'>Donor Friendly</h2>
                        <p className='leading-8 outfit-font text-[#131216CC]'>Donec scelerisque egestas purus eget <br /> Lorem ipsum dolor</p>
                    </div>
                </div>
                <div data-css-type='column-2' className='pt-[50px] pb-[40px] relative bg-[#f5f5f5] rounded-[10px] overflow-hidden z-10  group mb-[30px] animate__animated animate__fadeInUp animate__slow'>
                    <div data-css-type='first-shape' className='absolute top-0 right-0 -z-10'>
                        <img src={shape1.src} alt="#" className='max-w-full h-auto duration-700 delay-100' />
                    </div>
                    <div data-css-type='second-shape' className='absolute left-0 bottom-0-0 -z-10'>
                        <img src={shape2.src} alt="#" className='max-w-full h-auto duration-700 delay-100' />
                    </div>
                    <div data-css-type='icon-container' className='z-10 mb-7 relative inline-block '>

                        <p data-css-type='yellow-dot' className='absolute top-[18px] left-[18px] w-[35px] h-[35px] rounded-full bg-[#ffe132] -z-10'></p>
                        <img className='group-hover:scale-90 duration-500 delay-100' src={heartIcon.src} width={70} height={70} alt="" />

                    </div>
                    <div data-css-type='feature-container' className=''>
                        <h2 className='amita-font text-[#141212] text-[28px] font-bold capitalize leading-9 mb-2 hover:text-[#3e8f75] delay-100 duration-200 cursor-pointer'>Medical Care</h2>
                        <p className='leading-8 outfit-font text-[#131216CC]'>Donec scelerisque egestas purus eget <br /> Lorem ipsum dolor</p>
                    </div>
                </div>
                <div data-css-type='column-3' className='pt-[50px] pb-[40px] relative bg-[#f5f5f5] rounded-[10px] overflow-hidden z-10 mb-[30px] animate__animated animate__fadeInRight animate__slow group'>
                    <div data-css-type='first-shape' className='absolute top-0 right-0 -z-10'>
                        <img src={shape1.src} alt="#" className='max-w-full h-auto duration-700 delay-100' />
                    </div>
                    <div data-css-type='second-shape' className='absolute left-0 bottom-0-0 -z-10'>
                        <img src={shape2.src} alt="#" className='max-w-full h-auto duration-700 delay-100' />
                    </div>
                    <div data-css-type='icon-container' className='z-10 mb-7 relative inline-block '>

                        <p data-css-type='yellow-dot' className='absolute top-[27px] left-[24px] w-[45px] h-[45px] rounded-full bg-[#ffe132] -z-10'></p>
                        <img className='group-hover:scale-90 duration-500 delay-100' src={foodIcon.src} width={60} height={60} alt="" />

                    </div>
                    <div data-css-type='feature-container' className=''>
                        <h2 className='amita-font text-[#141212] text-[28px] font-bold capitalize leading-9 mb-2 hover:text-[#3e8f75] delay-100 duration-200 cursor-pointer'>Healthy Food</h2>
                        <p className='leading-8 outfit-font text-[#131216CC]'>Donec scelerisque egestas purus eget <br /> Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;