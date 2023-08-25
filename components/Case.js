import React, { useEffect, useRef, useState } from 'react';
import caseBg from '../assets/case-v1-bg.jpg';
import caseShape from '../assets/case-v1-shape1.png';
import case1 from '../assets/case-v1-img1.jpg';
import case2 from '../assets/case-v1-img2.jpg';
import case3 from '../assets/case-v1-img3.jpg';
import case4 from '../assets/case-v1-img4.jpg';
import { useInView } from 'react-intersection-observer';
import ReactVisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';



const Case = () => {
    const [timer, setTimer] = useState(true);
    const [timer2, setTimer2] = useState(true);
    const [timer3, setTimer3] = useState(true);
    const [timer4, setTimer4] = useState(true);

    const [firstProgress, setFirstProgress] = useState(0);
    const { ref, inView } = useInView();
    const initialRender = useRef(true);
    useEffect(() => {
        if (inView || initialRender.current) {
            setFirstProgress(45);
            initialRender.current = false;
        }
    }, [inView]);
    const [firstProgress2, setFirstProgress2] = useState(0);
    const { ref: ref2, inView: inView2 } = useInView();
    const initialRender2 = useRef(true);
    useEffect(() => {
        if (inView2 || initialRender2.current) {
            setFirstProgress2(90);
            initialRender2.current = false;
        }
    }, [inView2]);
    const [firstProgress3, setFirstProgress3] = useState(0);
    const { ref: ref3, inView: inView3 } = useInView();
    const initialRender3 = useRef(true);
    useEffect(() => {
        if (inView3 || initialRender3.current) {
            setFirstProgress3(60);
            initialRender3.current = false;
        }
    }, [inView3]);
    const [firstProgress4, setFirstProgress4] = useState(0);
    const { ref: ref4, inView: inView4 } = useInView();
    const initialRender4 = useRef(true);
    useEffect(() => {
        if (inView4 || initialRender4.current) {
            setFirstProgress4(70);
            initialRender4.current = false;
        }
    }, [inView4]);
    useEffect(() => {
        return () => {
            setFirstProgress(0);
            setFirstProgress2(0);
            setFirstProgress3(0);
            setFirstProgress4(0);
        };
    }, []);
    return (
        <div className='pt-[120px] pb-[200px] z-10 relative'>
            <div className='absolute inset-0 opacity-40 bg-scroll bg-cover bg-no-repeat bg-[center_center] -z-10' style={{ backgroundImage: `url('${caseBg.src}')` }}></div>
            <div className='max-w-[1600px] mx-auto px-[15px]'>
                <div className='pb-[56px] text-center'>
                    <h6 className='amita-font text-lg text-[#3e8f75] tracking-widest font-semibold'>Begin giving to them</h6>
                    <h2 className='font-bold text-[#141212] text-[32px] md:text-[60px]'>Explore These Causes</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-[15px] gap-[30px]'>
                    <div className='mb-[30px] relative block case-main'>
                        <div className='case-img-container relative '>
                            <div className='relative block overflow-hidden bg-black rounded-md'>
                                <img src={case1.src} alt="" className='w-full duration-500 ease-in scale-x-100 opacity-100' />
                            </div>
                            <div className='absolute left-[30px] -bottom-[13px] text-[#141212] font-medium capitalize px-[20px] py-[2px] leading-7 bg-[#ffe132] z-50 rounded-[13px]'>
                                Food
                            </div>
                        </div>
                        <div className='content-container-case relative block z-10 rounded-[10px] bg-white'>
                            <div className='case-inner-conent relative p-[32px]'>
                                <div className='absolute inset-0 bg-scroll bg-cover bg-no-repeat bg-[center_center] -z-10' style={{ backgroundImage: `url('${caseShape.src}')` }}></div>
                                <h2 className='text-[26px] amita-font leading-8 mb-[14px] font-semibold text-[#141212] hover:text-[#3e8f75] duration-500 delay-75 cursor-pointer'>Help us touch their lives
                                    of these youths</h2>
                                <p className='text-[#131216CC] amita-font'>Help us touch there are many variations of passages of Ipsum not simply random</p>
                            </div>
                            <div className='case-progress-container relative block bg-[#e6eeeb] px-[30px] pt-[40px] pb-[22px]'>
                                <div className='relative block bg-white rounded-lg p-1'>
                                    <div ref={ref} className='relative  w-full h-[7px] bg-white rounded-md'>
                                        <div style={{ width: `${firstProgress}%` }} className='relative block h-[7px] case-main-progress duration-[2s] rounded-md bg-[#3e8f75]'>
                                            <div className='absolute -top-[31px] right-0 text-[#141212] font-medium text-center leading-7'>
                                                {firstProgress}%
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className='mt-2 relative flex items-center justify-between flex-col md:flex-row'>
                                    <div className='text-[#3e8f75] font-semibold  text-xl '>
                                        <ReactVisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                                            {({ isVisible }) => (
                                                <div style={{ height: 50 }} className='leading-7 flex items-center amita-font gap-2'>
                                                    {isVisible ? <CountUp start={timer ? 0 : 10450} onEnd={() => setTimer(false)} prefix='$' end={10450} useEasing duration={2} /> : null}
                                                    <span className='text-[#141212] font-normal  text-lg'>Raised</span>
                                                </div>
                                            )}
                                        </ReactVisibilitySensor>

                                    </div>
                                    <div>
                                        <p className='text-[#141212] amita-font'>45% of $20,587</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mb-[30px] relative block case-main'>
                        <div className='case-img-container relative '>
                            <div className='relative block overflow-hidden bg-black rounded-md'>
                                <img src={case2.src} alt="" className='w-full duration-500 ease-in scale-x-100 opacity-100' />
                            </div>
                            <div className='absolute left-[30px] -bottom-[13px] text-[#141212] font-medium capitalize px-[20px] py-[2px] leading-7 bg-[#ffe132] z-50 rounded-[13px]'>
                                Charity
                            </div>
                        </div>
                        <div className='content-container-case relative block z-10 rounded-[10px] bg-white'>
                            <div className='case-inner-conent relative p-[32px]'>
                                <div className='absolute inset-0 bg-scroll bg-cover bg-no-repeat bg-[center_center] -z-10' style={{ backgroundImage: `url('${caseShape.src}')` }}></div>
                                <h2 className='text-[26px] amita-font leading-8 mb-[14px] font-semibold text-[#141212] hover:text-[#3e8f75] duration-500 delay-75 cursor-pointer'>Help us touch their lives
                                    of these youths</h2>
                                <p className='text-[#131216CC] amita-font'>Help us touch there are many variations of passages of Ipsum not simply random</p>
                            </div>
                            <div className='case-progress-container relative block bg-[#e6eeeb] px-[30px] pt-[40px] pb-[22px]'>
                                <div className='relative block bg-white rounded-lg p-1'>
                                    <div ref={ref2} className='relative  w-full h-[7px] bg-white rounded-md'>
                                        <div style={{ width: `${firstProgress2}%` }} className='relative block h-[7px] case-main-progress duration-[2s] rounded-md bg-[#3e8f75]'>
                                            <div className='absolute -top-[31px] right-0 text-[#141212] font-medium text-center leading-7'>
                                                {firstProgress2}%
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className='mt-2 relative flex items-center justify-between flex-col md:flex-row'>
                                    <div className='text-[#3e8f75] font-semibold  text-xl '>
                                        <ReactVisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                                            {({ isVisible }) => (
                                                <div style={{ height: 50 }} className='leading-7 flex items-center amita-font gap-2'>
                                                    {isVisible ? <CountUp start={timer2 ? 0 : 18140} onEnd={() => setTimer2(false)} prefix='$' end={18140} useEasing duration={2} /> : null}
                                                    <span className='text-[#141212] font-normal  text-lg'>Raised</span>
                                                </div>
                                            )}
                                        </ReactVisibilitySensor>

                                    </div>
                                    <div>
                                        <p className='text-[#141212] amita-font'>90% of $22,587</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mb-[30px] relative block case-main'>
                        <div className='case-img-container relative '>
                            <div className='relative block overflow-hidden bg-black rounded-md'>
                                <img src={case3.src} alt="" className='w-full duration-500 ease-in scale-x-100 opacity-100' />
                            </div>
                            <div className='absolute left-[30px] -bottom-[13px] text-[#141212] font-medium capitalize px-[20px] py-[2px] leading-7 bg-[#ffe132] z-50 rounded-[13px]'>
                                Health
                            </div>
                        </div>
                        <div className='content-container-case relative block z-10 rounded-[10px] bg-white'>
                            <div className='case-inner-conent relative p-[32px]'>
                                <div className='absolute inset-0 bg-scroll bg-cover bg-no-repeat bg-[center_center] -z-10' style={{ backgroundImage: `url('${caseShape.src}')` }}></div>
                                <h2 className='text-[26px] amita-font leading-8 mb-[14px] font-semibold text-[#141212] hover:text-[#3e8f75] duration-500 delay-75 cursor-pointer'>Help us touch their lives
                                    of these youths</h2>
                                <p className='text-[#131216CC] amita-font'>Help us touch there are many variations of passages of Ipsum not simply random</p>
                            </div>
                            <div className='case-progress-container relative block bg-[#e6eeeb] px-[30px] pt-[40px] pb-[22px]'>
                                <div className='relative block bg-white rounded-lg p-1'>
                                    <div ref={ref3} className='relative  w-full h-[7px] bg-white rounded-md'>
                                        <div style={{ width: `${firstProgress3}%` }} className='relative block h-[7px] case-main-progress duration-[2s] rounded-md bg-[#3e8f75]'>
                                            <div className='absolute -top-[31px] right-0 text-[#141212] font-medium text-center leading-7'>
                                                {firstProgress3}%
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className='mt-2 relative flex items-center justify-between flex-col md:flex-row'>
                                    <div className='text-[#3e8f75] font-semibold  text-xl '>
                                        <ReactVisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                                            {({ isVisible }) => (
                                                <div style={{ height: 50 }} className='leading-7 flex items-center amita-font gap-2'>
                                                    {isVisible ? <CountUp start={timer3 ? 0 : 15450} onEnd={() => setTimer3(false)} prefix='$' end={15450} useEasing duration={2} /> : null}
                                                    <span className='text-[#141212] font-normal  text-lg'>Raised</span>
                                                </div>
                                            )}
                                        </ReactVisibilitySensor>

                                    </div>
                                    <div>
                                        <p className='text-[#141212] amita-font'>45% of $20,587</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mb-[30px] relative block case-main'>
                        <div className='case-img-container relative '>
                            <div className='relative block overflow-hidden bg-black rounded-md'>
                                <img src={case4.src} alt="" className='w-full duration-500 ease-in scale-x-100 opacity-100' />
                            </div>
                            <div className='absolute left-[30px] -bottom-[13px] text-[#141212] font-medium capitalize px-[20px] py-[2px] leading-7 bg-[#ffe132] z-50 rounded-[13px]'>
                                Medical
                            </div>
                        </div>
                        <div className='content-container-case relative block z-10 rounded-[10px] bg-white'>
                            <div className='case-inner-conent relative p-[32px]'>
                                <div className='absolute inset-0 bg-scroll bg-cover bg-no-repeat bg-[center_center] -z-10' style={{ backgroundImage: `url('${caseShape.src}')` }}></div>
                                <h2 className='text-[26px] amita-font leading-8 mb-[14px] font-semibold text-[#141212] hover:text-[#3e8f75] duration-500 delay-75 cursor-pointer'>Help us touch their lives
                                    of these youths</h2>
                                <p className='text-[#131216CC] amita-font'>Help us touch there are many variations of passages of Ipsum not simply random</p>
                            </div>
                            <div className='case-progress-container relative block bg-[#e6eeeb] px-[30px] pt-[40px] pb-[22px]'>
                                <div className='relative block bg-white rounded-lg p-1'>
                                    <div ref={ref4} className='relative  w-full h-[7px] bg-white rounded-md'>
                                        <div style={{ width: `${firstProgress4}%` }} className='relative block h-[7px] case-main-progress duration-[2s] rounded-md bg-[#3e8f75]'>
                                            <div className='absolute -top-[31px] right-0 text-[#141212] font-medium text-center leading-7'>
                                                {firstProgress4}%
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className='mt-2 relative flex items-center justify-between flex-col md:flex-row'>
                                    <div className='text-[#3e8f75] font-semibold  text-xl '>
                                        <ReactVisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                                            {({ isVisible }) => (
                                                <div style={{ height: 50 }} className='leading-7 flex items-center amita-font gap-2'>
                                                    {isVisible ? <CountUp start={timer4 ? 0 : 15450} onEnd={() => setTimer4(false)} prefix='$' end={15450} useEasing duration={2} /> : null}
                                                    <span className='text-[#141212] font-normal  text-lg'>Raised</span>
                                                </div>
                                            )}
                                        </ReactVisibilitySensor>

                                    </div>
                                    <div>
                                        <p className='text-[#141212] amita-font'>45% of $20,587</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Case;