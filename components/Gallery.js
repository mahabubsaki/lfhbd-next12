import React from 'react';
import gshape from '../assets/gallery-v1-shape1.png';
import gshape1 from '../assets/gallery-v1-shape2.png';
import gallerybg from '../assets/gallery-v1-bg.jpg';
import gallery1 from '../assets/gallery-v1-img1.jpg';
import gallery2 from '../assets/gallery-v1-img2.jpg';
import gallery3 from '../assets/gallery-v1-img3.jpg';
import gallery4 from '../assets/gallery-v1-img4.jpg';

const Gallery = () => {
    return (
        <div className='relative block bg-white z-10'>
            <div className='relative block overflow-hidden z-10'>
                <div className='absolute -top-[60px] left-0 z-50 hidden md:block'>
                    <img src={gshape.src} alt="" className='max-w-full h-auto' />
                </div>
                <div className='absolute -top-[60px] right-0 z-50 hidden md:block'>
                    <img src={gshape1.src} alt="" className='max-w-full h-auto' />
                </div>
                <div className='gallery-bg absolute inset-0 bg-[#0e7452] bg-scroll bg-blend-overlay bg-cover bg-no-repeat bg-[center_center] -z-10' style={{ backgroundImage: `url('${gallerybg.src}')` }}></div>
                <div className='container max-w-[1200px] mx-auto px-[15px]'>
                    <div className='w-full'>
                        <div className='relative block pt-[111px] pb-[230px] max-w-[960px] mx-auto w-full text-center'>
                            <h2 className='font-medium text-[26px] leading-9 md:text-[45px] md:leading-[48px] text-white'>We support and empower children with chronic illnesses & their families by
                                providing
                                compassionate relevant services in their journey towards an enriching life</h2>
                            <button className="px-[55px] leading-[65px] mt-[52px] font-medium text-[#141212] inline-block bg-[#ffe132] rounded-[30px]">
                                BE A VOLUNTEER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative block pb-[90px] -mt-[115px] z-50'>
                <div className='max-w-[1600px] mx-auto w-full px-[15px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-[15px] gap-[30px]'>
                        <div className='mb-[30px] block relative'>
                            <div className='relative block rounded-[40px] overflow-hidden bg-[#17956a] z-10 gallery-container'>
                                <img src={gallery1.src} alt="" className='w-full h-auto mix-blend-overlay' />
                                <h2 className='absolute left-0 right-0 bottom-[30px] text-center z-50 text-[40px] leading-[48px] capitalize amita-font text-white font-medium'>Fundrising</h2>
                            </div>
                        </div>
                        <div className='mb-[30px] block relative'>
                            <div className='relative block rounded-[40px] overflow-hidden bg-[#9e8a18] z-10 gallery-container'>
                                <img src={gallery2.src} alt="" className='w-full h-auto mix-blend-overlay' />
                                <h2 className='absolute left-0 right-0 bottom-[30px] text-center z-50 text-[40px] leading-[48px] capitalize amita-font text-white font-medium'>Fresh Food</h2>
                            </div>
                        </div>
                        <div className='mb-[30px] block relative'>
                            <div className='relative block rounded-[40px] overflow-hidden bg-[#c86b42] z-10 gallery-container'>
                                <img src={gallery3.src} alt="" className='w-full h-auto mix-blend-overlay' />
                                <h2 className='absolute left-0 right-0 bottom-[30px] text-center z-50 text-[40px] leading-[48px] capitalize amita-font text-white font-medium'>Education</h2>
                            </div>
                        </div>
                        <div className='mb-[30px] block relative'>
                            <div className='relative block rounded-[40px] overflow-hidden bg-[#a78fa2] z-10 gallery-container'>
                                <img src={gallery4.src} alt="" className='w-full h-auto mix-blend-overlay' />
                                <h2 className='absolute left-0 right-0 bottom-[30px] text-center z-50 text-[40px] leading-[48px] capitalize amita-font text-white font-medium'>Medical</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;