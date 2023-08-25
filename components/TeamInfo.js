import React from 'react';
import bg from '../assets/team-v1-bg.jpg';
import shape from '../assets/team-v1-shape1.png';
import person from '../assets/team-v1-img1.jpg';
import person1 from '../assets/team-v1-img2.jpg';
import person2 from '../assets/team-v1-img3.jpg';

const TeamInfo = () => {
    return (
        <div className='main-container relative z-10'>
            <div className='max-w-[1800px] mx-auto px-[15px]'>
                <div style={{ backgroundImage: `url('${bg.src}')` }} className='pt-[120px] bg-cover bg-no-repeat bg-scroll bg-[center_center] -z-10 pb-[80px]'>
                    <div className='container max-w-[1200px] mx-auto px-[15px]'>
                        <div className='top-section pb-[56px] md:flex block md:text-left text-center relative justify-between items-center'>
                            <div>
                                <h6 className='amita-font text-lg text-[#3e8f75] tracking-widest font-semibold'>Our Support Team</h6>
                                <h2 className='font-bold text-[#141212] text-[32px] md:text-[60px]'>Who Are Always Helpful</h2>
                            </div>
                            <button className='rounded-[30px]  border-2 border-[#3e8f75] text-[#3e8f75] bg-transparent hover:bg-[#3e8f75] hover:text-white duration-500 mt-[20px] md:mt-0 px-[50px] leading-[60px]'>View All Expert List</button>
                        </div>
                        <div className='card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[15px] gap-[30px] mb-[35px]'>
                            <div className='team-container mb-[35px]'>
                                <div className='img-container-team z-10 relative'>
                                    <div style={{ backgroundImage: `url('${shape.src}')` }} className='team-bg-shape'></div>
                                    <div className='inner-img-team relative block rounded-[30px] overflow-hidden'>
                                        <img src={person.src} alt="" className='duration-500 ease-in scale-105 w-full' />
                                    </div>

                                </div>
                                <div className='pt-[24px] text-center'>
                                    <h2 className='amita-font text-2xl font-bold'>
                                        Martin Kellis
                                    </h2>
                                    <h6 className='outfit-font leading-7 text-[#131216CC]'>Head of Designer</h6>
                                </div>
                            </div>
                            <div className='team-container mb-[35px]'>
                                <div className='img-container-team z-10 relative'>
                                    <div style={{ backgroundImage: `url('${shape.src}')` }} className='team-bg-shape'></div>
                                    <div className='inner-img-team relative block rounded-[30px] overflow-hidden'>
                                        <img src={person1.src} alt="" className='duration-500 ease-in scale-105 w-full' />
                                    </div>

                                </div>
                                <div className='pt-[24px] text-center'>
                                    <h2 className='amita-font text-2xl font-bold'>
                                        Martin Rage
                                    </h2>
                                    <h6 className='outfit-font leading-7 text-[#131216CC]'>Marketing Expert and Head</h6>
                                </div>
                            </div>
                            <div className='team-container mb-[35px]'>
                                <div className='img-container-team z-10 relative'>
                                    <div style={{ backgroundImage: `url('${shape.src}')` }} className='team-bg-shape'></div>
                                    <div className='inner-img-team relative block rounded-[30px] overflow-hidden'>
                                        <img src={person2.src} alt="" className='duration-500 ease-in scale-105 w-full' />
                                    </div>

                                </div>
                                <div className='pt-[24px] text-center'>
                                    <h2 className='amita-font text-2xl font-bold'>
                                        Rober Wiliam
                                    </h2>
                                    <h6 className='outfit-font leading-7 text-[#131216CC]'>Executive Advisor, City Group</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamInfo;