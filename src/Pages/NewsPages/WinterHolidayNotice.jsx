import { Link } from 'react-router';
import newsBanner from '../../assets/newsBanner.jpg'
import newsBanner2 from '../../assets/newsBanner2.jpg'
import { useEffect } from 'react';

const WinterHolidayNotice = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='max-w-[1000px] mx-auto min-h-screen'>
            <p className='text-[12px] py-5 text-end'> <Link to="/" className='text-[#FF9600] hover:underline cursor-pointer'>
                World Navi</Link> {">"} news {">"} New Year's holiday announcement Winter holiday
            </p>

            <div className='flex gap-10'>
                <img className='h-[300px]' src={newsBanner} alt="" />

                <div className='space-y-10'>
                    <img src={newsBanner2} alt="" />


                    <div>
                        <h3 className='text-xl font-normal mb-2'>Winter holiday notice</h3>
                        <p className='border-b-3'></p>
                    </div>
                    <div>
                        <p className='text-[13px] leading-[1.9]'>
                            We would like to express our sincere gratitude for your continued patronage. We will be closed from Saturday,
                            <br />
                            <br />
                            December 28, 2024 to Sunday, January 5, 2025. We
                            apologize for any inconvenience this may cause and ask for your kind understanding .
                            <br />
                            <br />
                            World Navi Co. , Ltd.
                            <br />
                            <br />
                            <Link to='/' className='text-[#FF9600] hover:underline'>Back to home page</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WinterHolidayNotice;