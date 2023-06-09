import React from 'react';
import medal from '../../assets/logo/Medal.png'
import like from '../../assets/logo/Like.png'
import token from '../../assets/logo/Token.png'
import shopping from '../../assets/logo/Shopping_bag.png'
import wallet from '../../assets/logo/Wallet.png'
import Carousel from 'react-grid-carousel'
const Card = () => {
    const string = '>>>';
    return (
        <div className="max-w-screen-lg mx-auto py-20">
            <div className="text-center pb-8">
                <h1 className="text-6xl font-semibold pb-5 gradient-right hidden lg:block">Simplicity {string} Jargon</h1>
                <h1 className="text-5xl font-semibold pb-5 pl-3 lg:pl-0 gradient-right text-left block lg:hidden ">Simplicity<p className='text-space'>{string}</p> <p className='text-space2'>Jargon</p></h1>
                <p className="text-2xl p-3">We take care of everything so the artists can focus on what they do best. Create art.</p>
            </div>

            {/* card section 1 */}
            <div className='pt-32 lg:flex flex-row flex-wrap gap-7 hidden'>
                {/* single Card-1 */}
                <div className="w-72 h-96 rounded-3xl bg-gray text-center p-8 relative">
                    <img src={medal} alt="" srcSet="" className='absolute bottom-72 left-[80px]' />
                    <div className='pt-20 flex flex-col space-y-9'>
                        <h2 className="text-[28px]">Pre-NFT Rights</h2>
                        <p className="text-sm">NFT rights enable your audience to build content around you and pay you as well as share royalties.</p>
                        <button className="font-semibold bg-grey px-4 py-2 rounded-full text-cyan text-sm">Beta Launch Dec 13</button>
                    </div>
                </div>
                {/* single Card-2 */}
                <div className="w-72 h-96 rounded-3xl bg-gray text-center p-8 relative">
                    <img src={token} alt="" srcSet="" className='absolute bottom-[330px] left-[80px]' />
                    <div className='pt-20 flex flex-col space-y-7'>
                        <h2 className="text-[28px]">Talent Tokens</h2>
                        <p className="text-sm">Talent Token are tied to creator’s growth. Creators can reward supporters that want to join on their journey.</p>
                        <button className="font-semibold bg-grey px-4 py-2 rounded-full text-indigo text-sm">Coming Soon</button>
                    </div>
                </div>
                {/* single Card-3 */}
                <div className="w-72 h-96 rounded-3xl bg-gray text-center p-8 relative">
                    <img src={wallet} alt="" srcSet="" className='absolute bottom-[330px] left-[80px]' />
                    <div className='pt-20 flex flex-col space-y-5'>
                        <h2 className="text-[28px]">Tokenised
                            Crowdfunding</h2>
                        <p className="text-sm">Tokenised crowdfunding allows creators to raise capital to improve the quality of their content.</p>
                        <button className="font-semibold bg-grey px-4 py-2 rounded-full text-indigo text-sm">Coming Soon</button>
                    </div>
                </div>
            </div>
            {/* card section 2 */}
            <div className='lg:flex justify-center mt-32 gap-7 hidden'>
                {/* single Card-4 */}
                <div className="w-72 h-96 rounded-3xl bg-gray text-center p-8 relative">
                    <img src={like} alt="" srcSet="" className='absolute bottom-72 left-[80px]' />
                    <div className='pt-20 flex flex-col space-y-5'>
                        <h2 className="text-[28px]">Talent Content
                            Platform</h2>
                        <p className="text-sm">A platform that allows creators to create and have direct control of audience revenues.</p>
                        <button className="font-semibold bg-grey px-4 py-2 rounded-full text-indigo text-sm">Coming Soon</button>
                    </div>
                </div>
                {/* single Card-5 */}
                <div className="w-72 h-96 rounded-3xl bg-gray text-center p-8 relative">
                    <img src={shopping} alt="" srcSet="" className='absolute bottom-72 left-[80px]' />
                    <div className='pt-20 flex flex-col space-y-10'>
                        <h2 className="text-[28px]">NFT
                            Marketplace</h2>
                        <p className="text-sm">NFT rights enable your audience to build content around you and pay you as well as share royalties.</p>
                        <button className="font-semibold bg-grey px-4 py-2 rounded-full text-cyan text-sm">Beta Launch Dec 13</button>
                    </div>
                </div>
            </div>

            {/* card carousel for mobile version */}
            <div className='block lg:hidden'>
                <Carousel cols={1} rows={1} gap={5} loop>
                    <Carousel.Item>
                        {/* single Card-1 */}
                        <div className='pt-20'>
                            <div className="w-[197px] h-[347px] rounded-2xl bg-gray text-center py-5 px-2 relative">
                                <img src={medal} alt="" srcSet="" className='absolute w-[93px] h-32 bottom-60 right-14 z-auto' />
                                <div className='pt-20'>
                                    <h2 className="text-[18px] pb-3 font-bold">Pre-NFT Rights</h2>
                                    <p className="text-[14px] pb-6">NFT rights enable your audience to build content around you and pay you as well as share royalties.</p>
                                    <button className="btn-card text-cyan">Beta Launch Dec 13</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* single Card-2 */}
                        <div className='pt-20'>
                            <div className="w-[197px] h-[347px] rounded-2xl bg-gray text-center py-5 px-5 relative">
                                <img src={token} alt="" srcSet="" className='absolute w-[93px] h-32 bottom-64 right-14 z-auto' />
                                <div className='pt-20'>
                                    <h2 className="text-[18px] pb-3 font-bold">Talent Tokens</h2>
                                    <p className="text-[14px] pb-6">Talent Token are tied to creator’s growth. Creators can reward supporters that want to join on their journey.</p>
                                    <button className="btn-card text-[#8E79F3]">Coming soon</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* single Card-3 */}
                        <div className='pt-20'>
                            <div className="w-[197px] h-[347px] rounded-2xl bg-gray text-center py-5 px-2 relative">
                                <img src={wallet} alt="" srcSet="" className='absolute w-[93px] h-32 bottom-64 right-14  z-auto' />
                                <div className='pt-20'>
                                    <h2 className="text-[18px] pb-3 font-bold">Tokenised Crowdfunding</h2>
                                    <p className="text-[14px] pb-6">Tokenised  crowdfunding allows creators to raise capital to improve the quality of their content.</p>
                                    <button className="btn-card text-[#8E79F3]">Coming soon</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* single Card-4 */}
                        <div className='pt-20'>
                            <div className="w-[197px] h-[347px] rounded-2xl bg-gray text-center py-5 px-4 relative">
                                <img src={like} alt="" srcSet="" className='absolute w-[117px] h-28 bottom-64 right-10 z-auto' />
                                <div className='pt-20'>
                                    <h2 className="text-[18px] pb-3 font-bold">Talent Content Platform</h2>
                                    <p className="text-[14px] pb-6">A platform that allows creators to create and have direct control of audience revenues.</p>
                                    <button className="btn-card text-[#8E79F3]">Coming soon</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* single Card-5 */}
                        <div className='pt-20'>
                            <div className="w-[197px] h-[347px] rounded-2xl bg-gray text-center py-5 px-2 relative">
                                <img src={shopping} alt="" srcSet="" className='absolute w-[117px] h-28 bottom-64 right-10 z-auto' />
                                <div className='pt-20'>
                                    <h2 className="text-[18px] pb-3 font-bold">NFT Marketplace</h2>
                                    <p className="text-[14px] pb-6">Native NFT <br /> marketplace that allows creators and pre-NFT right holders to create and sell licensed NFTs. </p>
                                    <button className="btn-card text-cyan">Beta Launch Dec 13</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Card;