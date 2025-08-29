import { Link } from 'react-router';
import banner from '../../assets/aboutPhoto.jpg';
import businessDesImg from '../../assets/en_business_title.jpg';
import teamOfPro from '../../assets/teamOfPro.gif';
import bdImg from '../../assets/bdimg.png';
import salesImg from '../../assets/salesNavImg.gif';
import aquiImg from '../../assets/adquisitionImg.gif';
import { useEffect } from 'react';

const BusinessDescription = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-[1000px] mx-auto pt-5 pb-10 px-3 lg:px-0">
            <p className="text-[12px] pb-5 text-end">
                <Link to="/" className="text-[#FF9600] hover:underline cursor-pointer">
                    WORLD NAVI TOP
                </Link>{" "}
                {">"} Business Description
            </p>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <img
                    className="w-full lg:w-auto h-auto lg:h-[300px] object-cover"
                    src={banner}
                    alt="" />

                <div className="space-y-8 lg:space-y-10">
                    <img className="w-full lg:w-auto" src={businessDesImg} alt="" />

                    <img className="w-full lg:w-auto" src={teamOfPro} alt="" />

                    <p className="text-[13px] leading-[1.9] text-center px-2 lg:px-0">
                        World Navi staff at each department, young and passionate, are proud
                        to work as specialists with professional knowledge. <br />
                        The accumulated efforts on a daily basis to meet various demands
                        from our customers have become the compelling force of our rapid
                        growth.
                        <br />
                        <br />
                        We are confident in our capability to consistently satisfy our
                        customers.
                    </p>

                    <img className="w-full lg:w-auto" src={bdImg} alt="" />

                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                        <Link to="/sales">
                            <img className="w-full sm:w-auto" src={salesImg} alt="" />
                        </Link>
                        <Link to="/acquisition">
                            <img className="w-full sm:w-auto" src={aquiImg} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessDescription;