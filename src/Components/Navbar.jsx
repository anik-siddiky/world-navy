import { useState } from 'react';
import { Link } from 'react-router';
import logo from '../assets/webLogo.gif';
import navPhoto1 from '../assets/home.gif';
import navPhoto1Hover from '../assets/home-hover.gif';
import navPhoto2 from '../assets/companyProfile.gif';
import navPhoto2Hover from '../assets/companyProfile-hover.gif';
import navPhoto3 from '../assets/businessDescription.gif';
import navPhoto3Hover from '../assets/businessDescription-hover.gif';
import navPhoto4 from '../assets/contactUs.gif';
import navPhoto4Hover from '../assets/contactUs-hover.gif';
import navPhoto5 from '../assets/gallery.gif';
import navPhoto5Hover from '../assets/gallery-hover.gif';
import bg from '../assets/bg.gif';

const navImages = [
    { default: navPhoto1, hover: navPhoto1Hover, url: '/' },
    { default: navPhoto2, hover: navPhoto2Hover, url: '/company-profile' },
    { default: navPhoto3, hover: navPhoto3Hover, url: '/business-description' },
    { default: navPhoto4, hover: navPhoto4Hover, url: '/contact' },
    { default: navPhoto5, hover: navPhoto5Hover, url: '/gallery' },
];

const Navbar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <nav>
            <div className='flex items-start py-3 justify-between max-w-[1000px] mx-auto'>
                <Link to="/">
                    <img src={logo} />
                </Link>
                <div className='flex gap-1'>
                    <button className='text-white bg-black py-0.5 px-2.5 text-sm cursor-pointer hover:bg-black/75'>JAPANESE</button>
                    <button className='text-white bg-black py-0.5 px-2.5 text-sm cursor-pointer hover:bg-black/75'>ENGLISH</button>
                    <button className='text-white bg-black py-0.5 px-2.5 text-sm cursor-pointer hover:bg-black/75'>SPANISH</button>
                    <button className='text-white bg-black py-0.5 px-2.5 text-sm cursor-pointer hover:bg-black/75'>RUSSIAN</button>
                </div>
            </div>

            <div className="bg-center" style={{ backgroundImage: `url(${bg})` }}>
                <div className='flex justify-center'>
                    {navImages.map((img, index) => (
                        <Link to={img.url} key={index}>
                            <img
                                src={hoveredIndex === index ? img.hover : img.default}
                                alt=""
                                className='cursor-pointer'
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
