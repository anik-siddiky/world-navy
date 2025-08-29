import { Link } from 'react-router';
import newsBanner from '../../assets/newsBanner.jpg';
import newsBanner2 from '../../assets/newsBanner2.jpg';
import { useEffect } from 'react';

const NoticeOfOfficeClosure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto mb-10 px-3 lg:px-0">
      {/* Breadcrumb */}
      <p className="text-[12px] py-5 text-end">
        <Link to="/" className="text-[#FF9600] hover:underline cursor-pointer">
          World Navi
        </Link>{" "}
        {">"} news {">"} Notice of office closure
      </p>

      {/* Responsive wrapper: stack on small screens */}
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
            <h3 className="text-xl font-normal mb-2">Notice of office closure</h3>
            <hr className="border-b-2 border-gray-300" />
          </div>

          <div>
            <p className="text-[13px] leading-[1.9] px-2 lg:px-0">
              To all our business partners,
              <br />
              <br />
              we would like to express our sincere gratitude for your continued patronage.
              Our company will be closed for the summer holidays from Wednesday, August 13th to Sunday, August 17th.
              We apologize for any inconvenience this may cause and appreciate your understanding.
              <br />
              <br />
              World Navi Co., Ltd.
              <br />
              <br />
              <br />
              To whom it may concern, please be
              informed of our office closure for the 2025 summer holiday.
              Our head office will be temporarily closed from Wednesday, August 13th to Sunday, August 17th.
              We will operate from Monday, August 18th.
              We apologize for any inconvenience and ask for your kind understanding.
              Thank you,
              <br />
              <br />
              <br />
              World Navi Co., Ltd.
              <br />
              <br />
              <br />
              <Link to="/" className="text-[#FF9600] hover:underline">
                Back to home page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeOfOfficeClosure;
