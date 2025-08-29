import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className='max-w-[1000px] mx-auto lg:px-0 px-2'>
            <div className='my-6'>
                <HeroSection></HeroSection>
            </div>

            <div>
                <AboutUsSection></AboutUsSection>
            </div>
        </div>

    );
};

export default Home;