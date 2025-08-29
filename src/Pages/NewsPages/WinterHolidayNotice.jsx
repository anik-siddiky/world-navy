import { Link } from 'react-router';
import newsBanner from '../../assets/newsBanner.jpg';
import newsBanner2 from '../../assets/newsBanner2.jpg';
import { useEffect } from 'react';

const WinterHolidayNotice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto min-h-screen px-3 lg:px-0">
      {/* Breadcrumb */}
      <p className="text-[12px] py-5 text-end">
        <Link to="/" className="text-[#FF9600] hover:underline cursor-pointer">
          World Navi
        </Link>{" "}
        {">"} news {">"} New Year's holiday announcement Winter holiday
      </p>

      {/* Responsive wrapper */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Left image */}
        <img
          className="w-full lg:w-auto h-auto lg:h-[300px] object-cover"
          src={newsBanner}
          alt=""
        />

        {/* Right content */}
        <div className="space-y-8 lg:space-y-10">
          <img className="w-full lg:w-auto" src={newsBanner2} alt="" />

          <div>
            <h3 className="text-xl font-normal mb-2">Winter holiday notice</h3>
            <hr className="border-b-2 border-gray-300" />
          </div>

          <div>
            <p className="text-[13px] leading-[1.9] px-2 lg:px-0">
              We would like to express our sincere gratitude for your continued patronage. We will be closed from Saturday,
              <br />
              <br />
              December 28, 2024 to Sunday, January 5, 2025. We apologize for any inconvenience this may cause and ask for your kind understanding.
              <br />
              <br />
              World Navi Co., Ltd.
              <br />
              <br />
              <Link to="/" className="text-[#FF9600] hover:underline">Back to home page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterHolidayNotice;
