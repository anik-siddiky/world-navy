import { Link } from 'react-router';
import banner from '../../assets/aboutPhoto.jpg'
import companyPro from '../../assets/company_title.jpg'
import banner2 from '../../assets/companyBanner.jpg'
import corporateBanner from '../../assets/corporateBanner.jpg'
import exportPointImg from '../../assets/exportPoint.gif'
import { useEffect } from 'react';

const CompanyProfile = () => {

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

                    <img src={banner2} alt="" />

                    <p className='text-center text-[12px] leading-[1.9]'>
                        Japanese cars enjoy immense popularity world wide with the nation’s cutting-edge technology. <br />
                        Since its founding, World Navi Co.,Ltd has been providing high-quality Japanese cars to our customers throughout the world with care. <br />
                        From purchase to shipment, our staff with high professional skills is stationed at every phase of the process. Every staff is striving to fulfill customers’ various demands promptly. <br />
                        Sincerity, quality and speed; all for our customers. <br />
                        World Navi Co.,Ltd, the used car export specialists group, will respect relationships with our customers as we continually expand our business into the global market.
                    </p>

                    <img src={corporateBanner} alt="" />

                    <section>
                        <p className="text-xl mb-4">Company Description</p>

                        <table className="text-[13px] w-full border-collapse">
                            <tbody>

                                <tr className="border-b border-gray-300">
                                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top"> Name of the company</th>
                                    <td className="p-2.5 align-top">World Navi Co.,Ltd.</td>
                                </tr>

                                <tr className="border-b border-gray-300">
                                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">Headquarters</th>
                                    <td className="p-2.5 align-top">4-27, MONGUCHI-CHO, HYOGO-KU, KOBE, JAPAN 652-0814<br />TEL.078-686-0688</td>
                                </tr>

                                <tr className="border-b border-gray-300">
                                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">Date founded</th>
                                    <td className="p-2.5 align-top">January, 2001</td>
                                </tr>

                                <tr className="border-b border-gray-300">
                                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">Capital</th>
                                    <td className="p-2.5 align-top">JPY 84,020,000</td>
                                </tr>

                                <tr className="border-b border-gray-300">
                                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">Managing <br /> Director</th>
                                    <td className="p-2.5 align-top">Yoshifumi Sawada</td>
                                </tr>

                                <tr className="border-b border-gray-300">
                                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">Number of employees</th>
                                    <td className="p-2.5 align-top">110 <br /> as including staffs in overseas bases</td>
                                </tr>

                                <tr className="border-b border-gray-300">
                                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-middle">Bank accounts</th>
                                    <td className="p-2.5 align-top leading-[1.8]">
                                        MUFG Bank,Ltd. <br />
                                        Resona Bank Limited. <br />
                                        Sumitomo Mitsui Banking Corporation. <br />
                                        Mizuho Bank, Ltd. <br />
                                        The Shoko Chukin Bank，Ltd. <br />
                                        The Hyakujushi Bank, Ltd. <br />
                                        The Minato Bank, Ltd.
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-middle">Business description</th>
                                    <td className="p-2.5 align-top leading-[1.8]">
                                        Import & export and sales of used cars <br />
                                        Import & export and sales of auto parts and equipment <br />
                                        Import & export and sales of used construction machines <br />
                                        Certified Automobile Wrecking and Maintenance Businesses authorized by Kinki District Transport Bureau. (Ministry of Land、Infrastructure and Transport) <br />
                                        License number: 7666 KDTB Hyogo <br />
                                        License date: May 7th 2019
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <p className='text-[12px] leading-[1.9]'>
                        Member of Japan used motor vehicle exporters association <br />
                        Member of Kobe Chamber of Commerce <br />
                        Licensed secondhand dealer authorized by Hyogo Public Safety Commission <br />
                        License No.631140100003
                    </p>

                    <div className="w-full max-w-[660px] h-[300px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6562.615746807411!2d135.1696540477719!3d34.67217844605716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008fa056fd2ef3%3A0x2c8ae4f8e63585e8!2z44CSNjUyLTA4MTQg5YW15bqr55yM56We5oi45biC5YW15bqr5Yy66ZaA5Y-j55S677yU4oiS77yS77yX!5e0!3m2!1sja!2sjp!4v1425556618836"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <Link to="/export-base" className='flex justify-center'>
                        <img src={exportPointImg} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;