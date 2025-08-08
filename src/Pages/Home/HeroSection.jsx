import carouselImg1 from '../../assets/HeroImages/firstImg.jpg'
import carouselImg2 from '../../assets/HeroImages/secondImg.jpg'
import carouselImg3 from '../../assets/HeroImages/thirdImg.jpg'
import carouselImg4 from '../../assets/HeroImages/fourthImg.jpg'
import carouselImg5 from '../../assets/HeroImages/fifthImg.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const HeroSection = () => {
    return (
        <div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                showThumbs={false}
                showStatus={false}
                stopOnHover={true}
                dynamicHeight={false}
                showIndicators={false}
            >
                <img src={carouselImg1} alt="" />
                <img src={carouselImg2} alt="" />
                <img src={carouselImg3} alt="" />
                <img src={carouselImg4} alt="" />
                <img src={carouselImg5} alt="" />
            </Carousel>
        </div>
    );
};

export default HeroSection;