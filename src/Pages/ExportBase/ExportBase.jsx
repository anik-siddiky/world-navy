import { Link } from 'react-router';
import banner from '../../assets/aboutPhoto.jpg'
import companyPro from '../../assets/company_title.jpg'
import exportPointImg from '../../assets/companyProfileCTA.gif'
import advancingGlobally from '../../assets/advancingGlobally.gif'
import allPorts from '../../assets/allPorts.jpg'
import extraFeatures from '../../assets/extraFeatures.jpg'
import { useEffect } from 'react';

const ExportBase = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='max-w-[1000px] mx-auto pt-5 pb-10'>
            <p className='text-[12px] pb-5 text-end'> <Link to="/" className='text-[#FF9600] hover:underline cursor-pointer'>WORLD NAVI TOP</Link> {">"} Company Profile</p>
            <div className='flex gap-10'>
                <img className='h-[300px]' src={banner} alt="" />

                <div className='space-y-10'>
                    <img src={companyPro} alt="" />

                    <img src={advancingGlobally} alt="" />

                    <p className='text-center text-[13px] leading-[1.8]'>
                        World Navi Co.,Ltd chose Kobe for its place of founding; a city that has been developed with its historical port. <br />
                        The city has prospered since ancient times as the hub of logistic, culture and information. <br />
                        Now, our business is growing, based in international city of KOBE, the city full of the frontier.
                    </p>

                    <img src={allPorts} alt="" />

                    <img src={extraFeatures} alt="" />

                    <Link to="/company-profile" className='flex justify-center'>
                        <img src={exportPointImg} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExportBase;