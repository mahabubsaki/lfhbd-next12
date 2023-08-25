import React, { useState } from 'react';
import counterShape from '../assets/counter-v1-shape4.png';
import ReactVisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const Counter = () => {

    const [timer, setTimer] = useState(true);
    const [timer2, setTimer2] = useState(true);
    const [timer3, setTimer3] = useState(true);
    return (
        <div className='pt-[120px] bg-white relative z-10'>
            <div className='absolute right-[85px] bottom-[60px] -z-10 floating hidden md:block'>
                <img src={counterShape.src} className='max-w-full h-auto' alt="" />
            </div>
            <div className='max-w-[1200px] px-[15px] mx-auto'>
                <div className='grid px-[15px] grid-cols-1 lg:grid-cols-3 gap-[30px]'>
                    <div className='mb-[30px] relative z-10 flex flex-col text-center'>
                        <h1 className='text-[60px] amita-font lg:text-[50px] font-bold xl:text-[60px]'>

                            <ReactVisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 100 }}>
                                        {isVisible ? <CountUp start={timer ? 0 : 648} onEnd={() => setTimer(false)} end={648} useEasing duration={2} /> : null}
                                    </div>
                                )}
                            </ReactVisibilitySensor>
                        </h1>
                        <p className='text-[20px] lg:text-[18px] xl:text-[20px] text-[#141212] font-medium mt-3'>Registered Charities Supported</p>
                    </div>
                    <div className='mb-[30px] relative z-10 flex flex-col text-center'>
                        <h1 className='text-[60px] amita-font lg:text-[50px] font-bold xl:text-[60px]'>

                            <ReactVisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 100 }}>
                                        {isVisible ? <CountUp start={timer2 ? 0 : 464} onEnd={() => setTimer2(false)} end={464} useEasing suffix='M' duration={2} prefix='$' /> : null}
                                    </div>
                                )}
                            </ReactVisibilitySensor>
                        </h1>
                        <p className='text-[20px] lg:text-[18px] xl:text-[20px] text-[#141212] font-medium mt-3'>Raised For Charities</p>
                    </div>
                    <div className='mb-[30px] relative z-10 flex flex-col text-center'>
                        <h1 className='text-[60px] amita-font lg:text-[50px] font-bold xl:text-[60px]'>

                            <ReactVisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                                {({ isVisible }) => (
                                    <div style={{ height: 100 }}>
                                        {isVisible ? <CountUp end={587} start={timer3 ? 0 : 587} onEnd={() => setTimer3(false)} useEasing suffix='K' duration={2} /> : null}
                                    </div>
                                )}
                            </ReactVisibilitySensor>
                        </h1>
                        <p className='text-[20px] lg:text-[18px] xl:text-[20px] text-[#141212] font-medium mt-3'>Users Making a Difference</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;