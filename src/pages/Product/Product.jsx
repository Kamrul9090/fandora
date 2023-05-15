import image1 from '../../assets/images/device/holoLance.png';
import image2 from '../../assets/images/device/headPhone.png';
import image3 from '../../assets/images/device/game.png';
import image4 from '../../assets/images/device/player.png';
import image5 from '../../assets/images/device/bg.png';
import image6 from '../../assets/images/device/51_1.png';
import image7 from '../../assets/images/device/51.png';
import image8 from '../../assets/images/device/52.png';
import Carousel from 'react-grid-carousel';


const Product = () => {
    return (
        <div className="bg-background rounded-t-3xl mt-[108px] pt-[87px] pb-[89px]">
            <div className="text-center max-w-screen-xl mx-auto">
                <h1 className="text-2xl lg:text-6xl text-gray uppercase pb-7 font-bold">Welcome to the Future <br /><span className="gradient-right text-4xl lg:text-6xl">Pre NFT Rights</span></h1>
                <p className="w-11/12 lg:w-1/2 mx-auto justify-center text-black">
                    Imagine a real life auction, but everything is an NFT.
                    Fandora is the first platform that enables creators to auction or sell their NFT rights to their audience. These pre NFT rights enable your audience to build content around you, pay you, and also share royalties. With Fandora, creators can do all this easily - without all the tech-speak.
                </p>
            </div>
            <p className="text-sky-dark text-center text-[18px] font-bold w-80 lg:w-full mx-auto mt-[59px] mb-[25px] text-semibold">These are the different types of NFT rights you can sell</p>
            <div className="max-w-screen-lg mx-auto lg:flex gap-[30px] hidden">
                <div className="w-[286px] h-[383px] rounded-[50px] text-center p-[22px] bg-bg-white shadow-2xl">
                    <img src={image1} alt="" srcSet="" className='rounded-[35px]' />
                    <div className='pt-[15px] text-grey'>
                        <h2 className="text-[28px] font-bold pb-[13px]">Pre-NFT Rights</h2>
                        <p className="text-sm">Pre-buy rights to your social media content</p>
                    </div>
                </div>
                <div className="w-[286px] h-[383px] rounded-[50px] text-center p-[22px] bg-bg-white shadow-2xl">
                    <img src={image2} alt="" srcSet="" className='rounded-[35px]' />
                    <div className='pt-[15px] text-grey'>
                        <h2 className="text-[28px] font-bold pb-[13px]">Pre-NFT Rights</h2>
                        <p className="text-sm">Pre-buy rights to your product mentions</p>
                    </div>
                </div>
                <div className="w-[286px] h-[383px] rounded-[50px] text-center p-[22px] bg-bg-white shadow-2xl">
                    <img src={image4} alt="" srcSet="" className='rounded-[35px]' />
                    <div className='pt-[15px] text-grey'>
                        <h2 className="text-[28px] font-bold pb-[13px]">Pre-NFT Rights</h2>
                        <p className="text-sm">Pre-buy rights to specific time periods for exclusive interactions</p>
                    </div>
                </div>
            </div>
            {/* second cards section */}
            <div className='max-w-screen-lg mx-auto mt-[21px] lg:flex flex-row justify-center hidden'>
                <div className="w-[286px] h-[383px] rounded-[50px] text-center p-[22px] bg-bg-white shadow-2xl mr-8">
                    <img src={image3} alt="" srcSet="" className='rounded-[35px]' />
                    <div className='pt-[15px] text-grey'>
                        <h2 className="text-[28px] font-bold pb-[13px]">Pre-NFT Rights</h2>
                        <p className="text-sm">Pre-buy rights to specific time periods for exclusive interactions</p>
                    </div>
                </div>
                <div className="w-[286px] h-[383px] rounded-[50px] text-center p-[22px] bg-bg-white shadow-2xl">
                    <div className='relative'>
                        <img src={image5} alt="" srcSet="" className='rounded-[35px]' />
                        <img src={image6} alt="" srcSet="" className='rounded-[35px] absolute top-10 left-12' />
                        <img src={image7} alt="" srcSet="" className='rounded-[35px] absolute top-2 left-6 w-[59px] h-[60px]' />
                        <img src={image8} alt="" srcSet="" className='rounded-[35px] absolute top-0 right-0' />
                    </div>
                    <div className='pt-[15px] text-grey'>
                        <h2 className="text-[28px] font-bold pb-[13px]">Pre-NFT Rights</h2>
                        <p className="text-sm">Pre-buy rights to specific time periods for exclusive interactions</p>
                    </div>
                </div>
            </div>
            {/* carousel section */}
            <div className='block lg:hidden'>
                <Carousel cols={1} rows={1} gap={5} loop>
                    <Carousel.Item>
                        <div className="w-[286px] h-[383px] rounded-[50px] text-center p-[22px] bg-bg-white shadow-2xl m-5" >
                            <img src={image1} alt="" srcSet="" className='rounded-[35px]' />
                            <div className='pt-[15px] text-grey'>
                                <h2 className="text-[28px] font-bold pb-[13px]">Pre-NFT Rights</h2>
                                <p className="text-sm">Pre-buy rights to your social media content</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="w-[286px] h-[383px] rounded-[50px] text-center p-[22px] bg-bg-white shadow-2xl m-5">
                            <img src={image2} alt="" srcSet="" className='rounded-[35px]' />
                            <div className='pt-[15px] text-grey'>
                                <h2 className="text-[28px] font-bold pb-[13px]">Pre-NFT Rights</h2>
                                <p className="text-sm">Pre-buy rights to your product mentions</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="w-[286px] h-[383px] rounded-[50px] text-center p-[22px] bg-bg-white shadow-2xl m-5">
                            <img src={image4} alt="" srcSet="" className='rounded-[35px]' />
                            <div className='pt-[15px] text-grey'>
                                <h2 className="text-[28px] font-bold pb-[13px]">Pre-NFT Rights</h2>
                                <p className="text-sm">Pre-buy rights to specific time periods for exclusive interactions</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="w-[286px] h-[383px] rounded-[50px] text-center p-[22px] bg-bg-white shadow-2xl m-5">
                            <img src={image3} alt="" srcSet="" className='rounded-[35px]' />
                            <div className='pt-[15px] text-grey'>
                                <h2 className="text-[28px] font-bold pb-[13px]">Pre-NFT Rights</h2>
                                <p className="text-sm">Pre-buy rights to specific time periods for exclusive interactions</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="w-[286px] h-[383px] rounded-[50px] text-center p-[22px] bg-bg-white shadow-2xl m-5">
                            <div className='relative'>
                                <img src={image5} alt="" srcSet="" className='rounded-[35px]' />
                                <img src={image6} alt="" srcSet="" className='rounded-[35px] absolute top-10 left-12' />
                                <img src={image7} alt="" srcSet="" className='rounded-[35px] absolute top-2 left-6 w-[59px] h-[60px]' />
                                <img src={image8} alt="" srcSet="" className='rounded-[35px] absolute top-0 right-0' />
                            </div>
                            <div className='pt-[15px] text-grey'>
                                <h2 className="text-[28px] font-bold pb-[13px]">Pre-NFT Rights</h2>
                                <p className="text-sm">Pre-buy rights to specific time periods for exclusive interactions</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Product;