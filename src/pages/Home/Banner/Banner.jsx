import React from 'react';
import vector1 from '../../../assets/vector/Group.png';
import vector2 from '../../../assets/vector/Frame.png';
import vector3 from '../../../assets/vector/Frame-2.png';
import vector4 from '../../../assets/vector/Frame-3.png';
import vector5 from '../../../assets/vector/Frame-4.png';
import ellipse from '../../../assets/logo/Ellipse.png';
import './banner.css';
import Navbar from '../../../shared/Navbar';
const Banner = () => {
    return (
        <div className="backgroundImage">
            <Navbar></Navbar>
            <div className='max-w-screen-xl pt-10'>
                <div className='flex flex-col lg:flex-row'>
                    <h1 className='text-3xl text-center lg:text-start lg:text-6xl font-bold uppercase p-5 lg:pl-24 w-full lg:w-1/2 z-10'>Calling Creators of the Future</h1>
                    <div className='flex w-full lg:w-1/2 relative lg:m-0'>
                        <img className='absolute left-36 w-24 h-36 lg:w-[204px] lg:h-[334px]' src={vector1} alt="" srcSet="" />
                        <img className='absolute left-14 top-12 lg:left-14 w-16 h-16' src={vector2} alt="" srcSet="" />
                        <img className='absolute left-16 top-0 lg:left-2' src={vector3} alt="" srcSet="" />
                        <img className='absolute right-14 w-5 h-8 lg:w-7 lg:h-10 bottom-6 lg:bottom-44 lg:left-80' src={vector3} alt="" srcSet="" />
                        <img className='absolute left-72 top-72 lg:left-[360px] lg:top-80' src={vector3} alt="" srcSet="" />
                        <img className='absolute left-48 top-52 lg:left-64 lg:top-72' src={vector4} alt="" srcSet="" />
                        <img className='absolute top-72 left-32 lg:left-32 lg:top-96 w-[123px] h-[152px] lg:w-full lg:h-full' src={vector5} alt="" srcSet="" />
                    </div>
                </div>
                <div className='lg:pl-24 lg:space-y-4 space-y-2 pt-[460px] lg:pt-0 text-cyan-dark'>
                    <div className='lg:flex lg:flex-col lg:text-left text-center lg:text-[25px] text-[16px]'>
                        <h1>The World s First Pre-NFT Rights <span className='inline lg:block '>and Content Marketplace</span></h1>
                    </div>
                    <button className='uppercase text-sm outline rounded-full w-32 mx-auto lg:mx-0  flex items-center justify-evenly p-2'> <img src={ellipse} alt="" srcSet="" /> <span>Now Live</span></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;