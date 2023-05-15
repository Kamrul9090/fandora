import React from 'react';
import device1 from '../../assets/images/device/Tablet_Mockup_1.png'
import device2 from '../../assets/images/device/Phone_mockup_2.png'
import ServiceCheckMobile from './ServiceCheckMobile';

const ServiceCheck = () => {
    return (
        <div className='gradient-background'>
            <div className='block lg:hidden'>
                <ServiceCheckMobile></ServiceCheckMobile>
            </div>
            <div className='max-w-screen-lg mx-auto hidden lg:block'>
                <div className='flex flex-col-reverse lg:flex-row gap-5'>
                    <div>
                        <img src={device2} alt="" srcSet="" />
                    </div>
                    <div className='space-y-3 mt-[52px]'>
                        <h3 className='text-xs'>NFT rights Marketplace</h3>
                        <h2 className='text-3xl font-bold'>Are you a Creator?</h2>
                        <p className='text-sm'>Now sell Pre NFT rights and monetise your<br />existing content for Web3 applications</p>
                        <button className='uppercase bg-sky w-[220px] h-[74px] rounded-[101px]'>Check out</button>
                    </div>
                </div>

                <div className='lg:flex items-center'>
                    <div className='space-y-3'>
                        <h3 className='text-xs'>NFT rights Marketplace</h3>
                        <h2 className='text-3xl font-bold'>Are you a Creator?</h2>
                        <p className='text-sm'>Access best content for building stronger <br /> Web3 assets and package them with our advanced NFT Utilities</p>
                        <button className='uppercase bg-sky w-[220px] h-[74px] rounded-[101px]'>Check out</button>
                    </div>
                    <div>
                        <img src={device1} alt="" srcSet="" className='' />
                    </div>
                </div>
                <div className='text-center space-y-3 pb-[59px]'>
                    <h5 className='uppercase text-xs'>homegrown Marketplace </h5>
                    <h3 className='text-[36px]'>Explore an NFT Marketplace unlike any other</h3>
                    <p className='text-[17px]'>Our homegrown NFT marketplace allows creators and pre NFT rights holders to create and sell officially licensed NFTs</p>
                    <button className='uppercase bg-as w-[220px] h-[74px] rounded-[101px]'>Check out</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCheck;