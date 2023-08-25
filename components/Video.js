import React from 'react';
import shape from '../assets/video-v1-shape3.png';
import shape2 from '../assets/video-v1-shape1.png';
import shape3 from '../assets/video-v1-shape2.png';
import bg from '../assets/video-v1-bg.jpg';
import { BsFillPlayFill } from 'react-icons/bs';

const Video = () => {
    return (
        <div className='relative z-10 bg-white'>
            <div className='absolute hidden  md:block floating left-0 -top-1'>
                <img src={shape.src} alt="" className='max-w-full h-auto' />
            </div>
            <div className='max-w-[1200px] mx-auto px-[15px]'>
                <div className='w-full'>
                    <div className='relative block pt-[200px] md:pt-[230px] pb-[187px] overflow-hidden -mt-[110px] z-50'>
                        <div className='absolute hidden md:block top-[80px] -right-[90px] z-10'>
                            <img src={shape2.src} alt="" className='max-w-full h-auto' />
                        </div>
                        <div className='absolute hidden md:block -bottom-[110px] -left-[235px] z-10'>
                            <img src={shape3.src} alt="" className='max-w-full h-auto' />
                        </div>
                        <div className='absolute inset-0 bg-scroll bg-cover bg-no-repeat bg-[center_center] -z-10' style={{ backgroundImage: `url('${bg.src}')` }}>

                        </div>
                        <div className='relative flex items-center justify-center'>
                            <a href="" className='video-big-icon relative w-[120px] flex justify-center items-center h-[120px] leading-[120px] rounded-full bg-[white] bg-opacity-30 text-center duration-200 delay-100'>
                                <BsFillPlayFill className='text-[#3e8f75] text-4xl' />
                            </a>
                        </div>
                        <div className='mt-[21px]'>
                            <h2 className='md:text-[66px] text-center  text-[35px] tracking-widest amita-font capitalize font-bold text-[#f9fffdb3]'>Watch Video</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;