import React from 'react';
import logo from '../assets/vector/Group.png';
import github from '../assets/vector/github.png';
import linkedin from '../assets/vector/linkedin.png';
import ins from '../assets/vector/ins.png';
import message from '../assets/vector/message.png';
import tw from '../assets/vector/tw.png';
const Footer = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex flex-col lg:flex-row items-center justify-around text-center font-bold pb-[64px]'>
                <div className='flex flex-col lg:flex-row items-center pb-4 lg:space-x-5'>
                    <img src={logo} alt="" srcSet="" className='w-[48.95px] h-[81.59px] lg:w-[54px] lg:h-[90px]' />
                    <h1 className='uppercase text-5xl gradient hidden lg:block'>Fandora</h1>
                </div>
                <ul className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10'>
                    <li>Home</li>
                    <li>Key features</li>
                    <li>Pre-NFT Rights</li>
                    <li>Marketplace</li>
                </ul>
            </div>
            <div className='border w-[295px] lg:w-[1200px] mx-auto'></div>
            <div className="pt-9 flex flex-col lg:flex-row items-center justify-around">
                <div className='flex items-center space-x-5 text-as-rgb pb-4 lg:pb-0'>
                    <img src={tw} alt="" srcSet="" className='w-[24px] h-[22px]' />
                    <img src={linkedin} alt="" srcSet="" className='w-[24px] h-[22px]' />
                    <img src={ins} alt="" srcSet="" className='w-[24px] h-[22px]' />
                    <img src={github} alt="" srcSet="" className='w-[24px] h-[22px]' />
                    <img src={message} alt="" srcSet="" className='w-[24px] h-[22px]' />
                </div>
                <ul className='flex flex-col lg:flex-row lg:space-x-14 items-center space-y-5 lg:space-y-0 text-as'>
                    <li>reachus@fandora.app</li>
                    <li>Privacy Policy</li>
                    <li>Terms of use</li>
                    <li>© Fandora 2022 - All rights reserved</li>
                </ul>
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-center text-center justify-around text-as-rgb py-6'>
                <small className='pt-2 lg:pt-0'>Designed by @indiecreatorsco</small>
                <small className='text-sm lg:text-lg'>Fandora 1364019 B.C Ltd C/o Empowered Startups 744 W Hastings St #420, Vancouver, BC V6C 1A5, Canada</small>
            </div>
        </div>
    );
};

export default Footer;