import medal from '../../assets/logo/Medal.png'
import like from '../../assets/logo/Like.png'
import token from '../../assets/logo/Token.png'
import shopping from '../../assets/logo/Shopping_bag.png'
import wallet from '../../assets/logo/Wallet.png'
import Carousel from 'react-grid-carousel'
const Card = () => {
    const string = '>>>';
    return (
        <div className="max-w-screen-lg mx-auto pt-10">
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
                    <div className='pt-20'>
                        <h2 className="text-[28px] pb-3">Pre-NFT Rights</h2>
                        <p className="text-sm pb-11">NFT rights enable your audience to build content around you and pay you as well as share royalties.</p>
                        <button className="font-semibold bg-grey px-4 py-2 rounded-full text-cyan text-sm">Beta Launch Dec 13</button>
                    </div>
                </div>
                {/* single Card-2 */}
                <div className="w-72 h-96 rounded-3xl bg-gray text-center p-8 relative">
                    <img src={token} alt="" srcSet="" className='absolute bottom-[330px] left-[80px]' />
                    <div className='pt-20'>
                        <h2 className="text-[28px] pb-3">Talent Tokens</h2>
                        <p className="text-sm pb-11">Talent Token are tied to creator’s growth. Creators can reward supporters that want to join on their journey.</p>
                        <button className="font-semibold bg-grey px-4 py-2 rounded-full text-indigo text-sm">Coming Soon</button>
                    </div>
                </div>
                {/* single Card-3 */}
                <div className="w-72 h-96 rounded-3xl bg-gray text-center p-8 relative">
                    <img src={wallet} alt="" srcSet="" className='absolute bottom-[330px] left-[80px]' />
                    <div className='pt-20'>
                        <h2 className="text-[28px] pb-2">Tokenised
                            Crowdfunding</h2>
                        <p className="text-sm pb-2">Tokenised crowdfunding allows creators to raise capital to improve the quality of their content.</p>
                        <button className="font-semibold bg-grey px-4 py-2 rounded-full text-indigo text-sm">Coming Soon</button>
                    </div>
                </div>
            </div>
            {/* card section 2 */}
            <div className='lg:flex justify-center mt-32 gap-7 hidden'>
                {/* single Card-4 */}
                <div className="w-72 h-96 rounded-3xl bg-gray text-center p-8 relative">
                    <img src={like} alt="" srcSet="" className='absolute bottom-72 left-[80px]' />
                    <div className='pt-20'>
                        <h2 className="text-[28px] pb-3">Talent Content
                            Platform</h2>
                        <p className="text-sm pb-7">A platform that allows creators to create and have direct control of audience revenues.</p>
                        <button className="font-semibold bg-grey px-4 py-2 rounded-full text-indigo text-sm">Coming Soon</button>
                    </div>
                </div>
                {/* single Card-5 */}
                <div className="w-72 h-96 rounded-3xl bg-gray text-center p-8 relative">
                    <img src={shopping} alt="" srcSet="" className='absolute bottom-72 left-[80px]' />
                    <div className='pt-20'>
                        <h2 className="text-[28px] pb-3">NFT
                            Marketplace</h2>
                        <p className="text-sm pb-11">NFT rights enable your audience to build content around you and pay you as well as share royalties.</p>
                        <button className="font-semibold bg-grey px-4 py-2 rounded-full text-cyan text-sm">Beta Launch Dec 13</button>
                    </div>
                </div>
            </div>

            {/* card carousel for mobile version */}
            <div className='block lg:hidden'>
                <Carousel cols={1} rows={1} gap={5} loop>
                    <Carousel.Item className="">
                        {/* single Card-1 */}
                        <div className='pt-24'>
                            <div className="w-60 h-96 rounded-2xl bg-gray text-center p-5">
                                <img src={medal} alt="" srcSet="" className='absolute w-28 h-32 bottom-72 left-[70px] z-auto' />
                                <div className='pt-20'>
                                    <h2 className="text-[18px] pb-3">Pre-NFT Rights</h2>
                                    <p className="text-sm pb-11">NFT rights enable your audience to build content around you and pay you as well as share royalties.</p>
                                    <button className="font-semibold bg-grey px-4 py-2 rounded-full text-cyan text-sm">Beta Launch Dec 13</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* single Card-2 */}
                        <div className='pt-24'>
                            <div className="w-60 h-96 rounded-3xl bg-gray text-center p-8 relative">
                                <img src={token} alt="" srcSet="" className='absolute w-28 h-32 bottom-[330px] left-[70px]' />
                                <div className='pt-20'>
                                    <h2 className="text-[18px] pb-3">Talent Tokens</h2>
                                    <p className="text-sm pb-5">Talent Token are tied to creator’s growth. Creators can reward supporters that want to join on their journey.</p>
                                    <button className="font-semibold bg-grey px-4 py-2 rounded-full text-indigo text-sm">Coming Soon</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* single Card-3 */}
                        <div className='pt-24'>
                            <div className="w-60 h-96 rounded-3xl bg-gray text-center p-8 relative">
                                <img src={wallet} alt="" srcSet="" className='w-28 h-32 absolute bottom-[330px] left-[70px]' />
                                <div className='pt-20'>
                                    <h2 className="text-[18px] pb-3">Tokenised
                                        Crowdfunding</h2>
                                    <p className="text-sm pb-7">Tokenised crowdfunding allows creators to raise capital to improve the quality of their content.</p>
                                    <button className="font-semibold bg-grey px-4 py-2 rounded-full text-indigo text-sm">Coming Soon</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* single Card-4 */}
                        <div className='pt-24'>
                            <div className="w-60 h-96 rounded-3xl bg-gray text-center p-8 relative">
                                <img src={like} alt="" srcSet="" className='w-28 h-32 absolute bottom-72 left-[70px]' />
                                <div className='pt-20'>
                                    <h2 className="text-[18px] pb-3">Talent Content
                                        Platform</h2>
                                    <p className="text-sm pb-7">A platform that allows creators to create and have direct control of audience revenues.</p>
                                    <button className="font-semibold bg-grey px-4 py-2 rounded-full text-indigo text-sm">Coming Soon</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* single Card-5 */}
                        <div className='pt-24'>
                            <div className="w-60 h-96 rounded-3xl bg-gray text-center p-8 relative">
                                <img src={shopping} alt="" srcSet="" className='w-28 h-32 absolute bottom-72 left-[70px]' />
                                <div className='pt-20'>
                                    <h2 className="text-[18px] pb-3">NFT
                                        Marketplace</h2>
                                    <p className="text-sm pb-11">NFT rights enable your audience to build content around you and pay you as well as share royalties.</p>
                                    <button className="font-semibold bg-grey px-4 py-2 rounded-full text-cyan text-sm">Beta Launch Dec 13</button>
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