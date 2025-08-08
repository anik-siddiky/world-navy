import aboutBanner from '../../assets/aboutPhoto.jpg'
import aboutImg from '../../assets/aboutUsImage.gif'
import infoImg from '../../assets/informationImg.gif'

const AboutUsSection = () => {
    return (
        <div className='flex gap-10 pt-3 mb-10'>
            <div>
                <img className='w-[850px]' src={aboutBanner} alt="" />
            </div>

            <div>
                <img className='pb-4' src={aboutImg} alt="" />
                <p className='text-[13px] font-extralight leading-[1.8]'>From Japan to the world, the number of cars that go over the sea is increasing each year. We, World Navi, strive to continue as a leading company in the pre owned auto export business.</p>
                <p className='text-[13px] font-extralight leading-[1.8]'>What we value the most is the trust from the customers. We built the trust over the years by rapid service of locating, purchasing, servicing, processing and exporting the cars, as well as by our system to immediately respond to customers’ needs. We export Japanese cars daily to customers throughout the world with satisfaction.</p>
                <img className='pt-4' src={infoImg} alt="" />

                <div className='bg-[#F4F4F4] text-[13px] noto-sans-jp py-5'>
                    <div className='flex gap-8 p-2'>
                        <dt>2025/07/15</dt>
                        <p className='text-[#FF9600] hover:underline cursor-pointer pb-1'>夏期休業のお知らせ Notice of office Closure</p>
                    </div>
                    <div className='border-b border-gray-300'></div>
                    <div className='flex gap-8 p-2'>
                        <dt>2025/04/08</dt>
                        <p className='text-[#FF9600] hover:underline cursor-pointer pb-1'>GW休業のお知らせ Notice of office closure</p>
                    </div>
                    <div className='border-b border-gray-300'></div>
                    <div className='flex gap-8 p-2'>
                        <dt>2024/11/27</dt>
                        <p className='text-[#FF9600] hover:underline cursor-pointer pb-1'>年末年始のお知らせ Winter holiday</p>
                    </div>
                    <div className='border-b border-gray-300'></div>

                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;