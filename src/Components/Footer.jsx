import { FaGreaterThan } from 'react-icons/fa';
import footerImage from '../assets/Screenshot_29-removebg-preview.png';
import footerImage2 from '../assets/footerImage.gif';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-[#EFEFEF] noto-sans-jp py-7 px-3 lg:px-0'>
            <div className='max-w-[1000px] mx-auto  flex justify-between items-start gap-8 my-5'>

                <div className='space-y-1'>
                    <Link to='/'>
                        <img className='w-56 mb-2' src={footerImage} alt="" />
                    </Link>
                    <p className='text-[12px] font-semibold'>World Navy Co.,Ltd.</p>
                    <p className='text-[12px] font-extralight'>4-27,MONGUCHI-CHO,HYOGO-KU</p>
                    <p className='text-[12px] font-extralight'>KOBE,JAPAN 652-0814</p>
                </div>

                <ul className='space-y-2'>

                    <li className='text-[12px] font-extralight flex items-center gap-1 hover:text-[#ED931F]'>
                        {'>'} <Link to="/" className='hover:underline'>Home</Link>
                    </li>

                    <li className='text-[12px] font-extralight flex items-center gap-1 hover:text-[#ED931F]'>
                        {'>'} <Link to="/company-profile" className='hover:underline'>Company Profile</Link>
                    </li>

                    <li className='text-[12px] font-extralight flex items-center gap-1 hover:text-[#ED931F]'>
                        {'>'} <Link to="/business-description" className='hover:underline'>Business Description</Link>
                    </li>

                    <li className='text-[12px] font-extralight flex items-center gap-1 hover:text-[#ED931F]'>
                        {'>'} <Link to="/contact" className='hover:underline'>Contact us</Link>
                    </li>

                    <li className='text-[12px] font-extralight flex items-center gap-1 hover:text-[#ED931F]'>
                        {'>'} <Link to="/gallery" className='hover:underline'>Gallery</Link>
                    </li>
                    <p className='text-center text-[12px] py-6'>
                        Copyright © WORLD NAVI CO.,LTD. All Rights Reserved.
                    </p>
                </ul>

                <div>
                    <img className='mx-auto' src={footerImage2} alt="" />
                    <p className='text-[10px] mt-3'>Japan used motor vehicle exporters <br /> association</p>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
