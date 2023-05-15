import React from 'react';
import hand1 from '../../assets/images/card/hand-1.png'
import hand2 from '../../assets/images/card/hand-2.png'
const Discover = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className='mx-auto text-black bg-white rounded-3xl p-7 lg:flex flex-col lg:flex-row justify-between relative bottom-24 hidden'>
                <div>
                    <h3 className='text-3xl'>Discover ans sell <br /> your own NFTs</h3>
                    <p className='text-lg pb-8'>Join fandora and support outstanding global<br />talent across multiple domains.</p>
                    <button className='btn-lg text-white w-[209px] h-[71px] text-sm'>JOIN FANDORA</button>
                </div>
                <div className='flex'>
                    <img src={hand1} alt="" srcSet="" className=' w-[241px] h-[294px] absolute top-[40px] right-72' />
                    <img src={hand2} alt="" srcSet="" className='w-[241px] h-[294px] absolute right-10 bottom-[52px]' />
                </div>
            </div>
            {/* mobile version */}
            <div className='mx-auto text-black bg-white rounded-3xl pt-10 px-4 pb-[22rem] flex-col lg:flex-row justify-between relative bottom-24 w-[300px] h-[371px] block lg:hidden'>
                <div className='text-center font-semibold'>
                    <h3 className='text-lg font-bold pb-2'>Pre-NFT Content <br />and Rights Marketplace </h3>
                    <p className='text-lg pb-1'>Join fandora and support<br />outstanding global talent across multiple domains.</p>
                    <button className='btn-discover'>JOIN FANDORA</button>
                </div>
                <div className='flex'>
                    <img src={hand1} alt="" srcSet="" className='w-[123px] h-[152px] absolute bottom-[-50px]' />
                    <img src={hand2} alt="" srcSet="" className='w-[123px] h-[152px] absolute bottom-[-30px] left-1/2' />
                </div>
            </div>
        </div>
    );
};

export default Discover;