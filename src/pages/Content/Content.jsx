import image1 from '../../assets/images/content/TGN_2.png'
import image2 from '../../assets/images/content/TGN_1.png'
import vector from '../../assets/vector/github.png';
const Content = () => {
    return (
        <div className="bg-as-background rounded-b-[100px] pb-[250px]">
            <div className="max-w-screen-lg mx-auto">
                <div className='lg:grid grid-cols-2 items-center gap-5 hidden'>
                    <div>
                        <img src={image1} alt="" srcSet="" />
                    </div>
                    <div>
                        <h6 className='uppercase pb-4 text-sm font-bold'>Tokenised Crowdfunding</h6>
                        <h3 className='pb-2 text-3xl font-bold text-sky-dark'>Create content. <br />
                            Make money for everybody.</h3>
                        <p className='pb-8 text-lg'>
                            With Fandora you can enable your loyal fanbase to bid for a share of the revenue from your next product or content offering to be launched over a stipulated time period. This leads to an audience base that is even more invested in you and your work, literally and figuratively.
                        </p>
                        <button className='uppercase btn-join flex items-center justify-center space-x-5'>
                            <span>Join the conversation</span> <img src={vector} alt="" srcSet="" />
                        </button>
                    </div>
                </div>
                <div className='lg:flex flex-row-reverse items-center gap-5 hidden'>
                    <div className='w-1/2'>
                        <img src={image2} alt="" srcSet="" className='w-full' />
                    </div>
                    <div className='w-1/2'>
                        <h6 className='uppercase pb-4 text-sm font-bold'>Talent content platform</h6>
                        <h3 className='pb-2 text-3xl font-bold text-sky-dark'>Build your custom <br />subscription platform</h3>
                        <p className='pb-8 text-lg justify-start'>
                            Build your custom subscription platform <br />
                            Create your own content and subscription engine and have direct control of audience revenues.Fandora gives you access to state-of-the-art No-Code content platform which enables you to raise subscriptions as well as mint NFTs
                        </p>
                        <button className='uppercase btn-join flex items-center justify-center space-x-5'>
                            <span>Join the conversation</span> <img src={vector} alt="" srcSet="" />
                        </button>
                    </div>
                </div>

                {/* mobile section */}
                <div className='grid grid-cols-1 text-center p-5 lg:hidden'>
                    <div>
                        <h6 className='uppercase pb-4 text-sm font-bold'>Tokenised Crowdfunding</h6>
                        <h3 className='pb-2 text-xl font-bold text-sky-dark'>Create content. <br />
                            Make money for everybody.</h3>
                        <img src={image1} alt="" srcSet="" className='w-[334px] h-[334px] mx-auto' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='pb-6 text-lg'>
                            With Fandora you can enable your loyal fanbase to bid for a share of the revenue from your next product or content offering to be launched over a stipulated time period. This leads to an audience base that is even more invested in you and your work, literally and figuratively.
                        </p>
                        <button className='uppercase btn-join-sm flex items-center justify-center space-x-3 ml-0'>
                            <span>Join the conversation</span> <img src={vector} alt="" srcSet="" />
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 text-center p-5 lg:hidden'>
                    <div>
                        <h6 className='uppercase pb-4 text-sm font-bold'>TALENT CONTENT PLATFORM</h6>
                        <h3 className='pb-2 text-xl font-bold text-sky-dark'>Build your custom<br />subscription platform</h3>
                        <img src={image2} alt="" srcSet="" className='w-[334px] h-[334px] mx-auto' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='pb-6 text-lg'>
                            Build your custom subscription platform. Create your own content and subscription engine and have direct control of audience revenues. Fandora gives you access to state-of-the-art No-Code content platform which enables you to raise subscriptions as well as mint NFTs
                        </p>
                        <button className='uppercase btn-join-sm flex items-center justify-center space-x-3 ml-0'>
                            <span>Join the conversation</span> <img src={vector} alt="" srcSet="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;