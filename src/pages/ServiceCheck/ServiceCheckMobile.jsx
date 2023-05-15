import React from 'react';
import device2 from '../../assets/images/device/Phone_mockup-mobile.png'
import device3 from '../../assets/images/device/Tablet_Mockup-mobile.png'
const ServiceCheckMobile = () => {
    return (
        <div className="max-w-screen-lg mx-auto text-center py-14">
            <div className='flex flex-col'>
                <div>
                    <h3 className='text-xl '>NFT rights Marketplace</h3>
                    <h2 className='text-lg font-bold'>Are you a Creator?</h2>
                    <img src={device2} alt="" srcSet="" />
                </div>
                <div className='space-y-3 px-6'>
                    <p className='text-sm'>Now sell Pre NFT rights and <br />monetise your existing content<br />for Web3 applications</p>
                    <button className='uppercase text-sm bg-sky w-[183px] h-[41px] rounded-[101px]'>Check out</button>
                </div>
            </div>
            <div className='flex flex-col py-14'>
                <div>
                    <h3 className='text-xl'>NFT RIGHTS Marketplace</h3>
                    <h2 className='text-lg font-bold'>Are You a Web3 PRO?</h2>
                    <img src={device3} alt="" srcSet="" />
                </div>
                <div className='space-y-3 px-6'>
                    <p className='text-sm'>Access best content for building <br />stronger Web3 assets and<br />package them with our <br />advanced NFT Utilities</p>
                    <button className='uppercase text-sm bg-sky w-[183px] h-[41px] rounded-[101px]'>Check out</button>
                </div>
            </div>
            <div className='text-center px-6 space-y-4'>
                <h5 className='uppercase text-xs'>homegrown Marketplace </h5>
                <h3 className='text-[20px] font-bold'>Explore an NFT Marketplace unlike any other</h3>
                <p className='text-[18px]'>Our homegrown NFT<br />marketplace allows creators and<br />pre NFT rights holders to create<br />and sell officially licensed NFTs</p>
                <button className='uppercase text-xs bg-as w-[183px] h-[41px] rounded-[101px]'>Check out</button>
            </div>
        </div>
    );
};

export default ServiceCheckMobile;