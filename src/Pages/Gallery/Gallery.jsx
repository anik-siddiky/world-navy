import { Link } from 'react-router';
import banner from '../../assets/aboutPhoto.jpg'
import gallery from '../../assets/gallery.jpg'
import { useEffect } from 'react';

import galleryImg1 from '../../assets/GalleryImgs/galleryImg1.jpg'
import galleryImg2 from '../../assets/GalleryImgs/galleryImg2.jpg'
import galleryImg3 from '../../assets/GalleryImgs/galleryImg3.jpg'
import galleryImg4 from '../../assets/GalleryImgs/galleryImg4.jpg'
import galleryImg5 from '../../assets/GalleryImgs/galleryImg4.1.jpg'
import galleryImg6 from '../../assets/GalleryImgs/galleryImg5.jpg'
import galleryImg7 from '../../assets/GalleryImgs/galleryImg6.jpg'
import galleryImg8 from '../../assets/GalleryImgs/galleryImg7.jpg'
import galleryImg9 from '../../assets/GalleryImgs/galleryImg8.jpg'

const Gallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='max-w-[1000px] mx-auto pt-5 pb-24 px-3 sm:px-5 lg:px-0'>
            <p className='text-[12px] pb-5 text-end'>
                <Link to="/" className='text-[#FF9600] hover:underline cursor-pointer'>WORLD NAVI TOP</Link> {">"} Gallery
            </p>

            <div className='flex flex-col lg:flex-row gap-6 lg:gap-10'>
                <img className='h-[200px] sm:h-[240px] lg:h-[270px] w-full lg:w-auto object-cover' src={banner} alt="" />

                <div className='space-y-10'>
                    <img src={gallery} alt="" />

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
                        {[galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg7, galleryImg8, galleryImg9].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[150px] lg:h-[150px] object-cover rounded-md border border-gray-200"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
