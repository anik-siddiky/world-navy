import { Link } from 'react-router';
import newsBanner from '../../assets/newsBanner.jpg'
import newsBanner2 from '../../assets/newsBanner2.jpg'
import { useEffect } from 'react';

const NoticeOfGoldenWeek = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='max-w-[1000px] mx-auto'>
            <p className='text-[12px] py-5 text-end'> <Link to="/" className='text-[#FF9600] hover:underline cursor-pointer'>
                World Navi</Link> {">"} news {">"} Notice of office closure during Golden Week
            </p>

            <div className='flex gap-10'>
                <img src={newsBanner} alt="" />

                <div>
                    <img src={newsBanner2} alt="" />
                </div>
            </div>

            <p className='text-3xl'>Notice of office closure during Golden Week</p>
        </div>
    );
};

export default NoticeOfGoldenWeek;