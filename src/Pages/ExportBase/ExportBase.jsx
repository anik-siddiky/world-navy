import { Link } from 'react-router';
import banner from '../../assets/aboutPhoto.jpg';
import companyPro from '../../assets/company_title.jpg';
import exportPointImg from '../../assets/companyProfileCTA.gif';
import advancingGlobally from '../../assets/advancingGlobally.gif';
import allPorts from '../../assets/allPorts.jpg';
import extraFeatures from '../../assets/extraFeatures.jpg';
import { useEffect } from 'react';

const ExportBase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto pt-5 pb-10 px-3 lg:px-0">
      {/* Breadcrumb */}
      <p className="text-[12px] pb-5 text-end">
        <Link to="/" className="text-[#FF9600] hover:underline cursor-pointer">
          WORLD NAVI TOP
        </Link>{" "}
        {">"} Company Profile
      </p>

      {/* Responsive wrapper */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Left image (keeps fixed height on lg, auto on sm) */}
        <img
          className="w-full lg:w-auto h-auto lg:h-[300px] object-cover"
          src={banner}
          alt=""
        />

        {/* Right side content */}
        <div className="space-y-8 lg:space-y-10">
          <img className="w-full lg:w-auto" src={companyPro} alt="" />

          <img className="w-full lg:w-auto" src={advancingGlobally} alt="" />

          <p className="text-center text-[13px] leading-[1.8] px-2 lg:px-0">
            World Navi Co.,Ltd chose Kobe for its place of founding; a city that
            has been developed with its historical port. <br />
            The city has prospered since ancient times as the hub of logistic,
            culture and information. <br />
            Now, our business is growing, based in international city of KOBE,
            the city full of the frontier.
          </p>

          <img className="w-full lg:w-auto" src={allPorts} alt="" />

          <img className="w-full lg:w-auto" src={extraFeatures} alt="" />

          <Link to="/company-profile" className="flex justify-center">
            <img className="w-full lg:w-auto" src={exportPointImg} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExportBase;
