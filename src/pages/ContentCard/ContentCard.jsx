import React from 'react'
import image1 from '../../assets/images/card/Image-3.png'
import image2 from '../../assets/images/card/hand-2.png'
import image3 from '../../assets/images/card/image-2.png'
import image4 from '../../assets/images/card/hand-1.png'
import image5 from '../../assets/images/card/unnamed-3.png'
const ContentCard = () => {
    return (
        <div className="max-w-screen-lg mx-auto pt-40 pb-10">
            <div className='mx-auto text-black gradientBackground h-[330px] rounded-3xl lg:flex px-20 py-10 flex-col lg:flex-row justify-between items-center relative hidden'>
                <div className='font-bold'>
                    <h3 className='text-2xl'>Pre-NFT Content and <br />Rights Marketplace </h3>
                    <p className='text-sm pb-8 pt-2'>A first of its kind platform that <br /> discovers and supports global talent <br />across multiple domains, now live! </p>
                    <button className='bg-gray font-normal rounded-[101px] text-white w-[209px] h-[71px] text-sm'>JOIN FANDORA</button>
                </div>
                <div className='flex'>
                    <img src={image1} alt="" srcSet="" className='absolute right-72 bottom-0 w-[243px] h-[332.38px]' />
                    <img src={image2} alt="" srcSet="" className='absolute right-5 bottom-0 w-[266.73px] h-[332.4px]' />
                    <img src={image3} alt="" srcSet="" className='absolute right-52 bottom-0 w-[290.73px] h-[354.4px]' />
                    <img src={image4} alt="" srcSet="" className='absolute right-14 bottom-0 w-[320.73px] h-[354.4px]' />
                    <img src={image5} alt="" srcSet="" className='absolute right-28 bottom-0 w-[320.47px] h-[404.38px]' />
                </div>
            </div>

            <div className='mx-auto text-black gradientBackground w-[300px] h-[454px] rounded-3xl p-5 flex-col relative block lg:hidden text-center'>
                <div className='font-bold'>
                    <h3 className='text-lg'>Pre-NFT Content and<br />Rights Marketplace </h3>
                    <p className='text-sm py-5'>A first of its kind platform<br />that discovers and<br />supports global talent across multiple domains.</p>
                    <button className='bg-gray font-normal rounded-[101px] text-white w-[174px] h-[41px] text-sm'>JOIN FANDORA</button>
                </div>
                <div className='flex'>
                    <img src={image1} alt="" srcSet="" className='absolute right-32 top-80 w-[138.87px] h-[184px]' />
                    <img src={image2} alt="" srcSet="" className='absolute right-5 top-80 w-[138.87px] h-[184px]' />
                    <img src={image3} alt="" srcSet="" className='absolute right-24 top-80 w-[138.87px] h-[184px]' />
                    <img src={image4} alt="" srcSet="" className='absolute right-12 top-80 w-[138.87px] h-[184px]' />
                    <img src={image5} alt="" srcSet="" className='absolute right-16 top-80 w-[138.87px] h-[184px]' />
                </div>
            </div>
        </div>
    );
};

export default ContentCard;