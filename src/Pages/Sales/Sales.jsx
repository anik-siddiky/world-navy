import { Link } from 'react-router';
import banner from '../../assets/aboutPhoto.jpg'
import businessDesImg from '../../assets/en_business_title.jpg'
import salesImg from '../../assets/salesImg.png'
import shipAndCarImg from '../../assets/shipAndCarImg.jpg'
import trustToSpeed from '../../assets/trustToSpeed.gif'
import salesImg1 from '../../assets/salesImg1.jpg'
import salesImg2 from '../../assets/salesImg2.jpg'
import salesImg3 from '../../assets/salesImg3.jpg'
import salesImg4 from '../../assets/salesImg4.jpg'
import salesImg5 from '../../assets/salesImg5.jpg'
import salesImg6 from '../../assets/salesImg6.jpg'
import salesImg7 from '../../assets/salesImg7.jpg'
import salesImg8 from '../../assets/salesImg8.jpg'
import btn1 from '../../assets/businessDescriptionBtn.gif'
import btn2 from '../../assets/salesBtn.gif'
import btn3 from '../../assets/acquisitionBtn.gif'
import { useEffect } from 'react';

const Sales = () => {

    const salesCardData = [
        { image: salesImg1, title: "Receiving orders from customers", description: "We receive inquiries from customers all over the world regarding type, grade, model, mileage, and body color. We respond to either a detailed inquiry, or an inquiry simply referring to the type or the grade of a car." },
        { image: salesImg2, title: "Searching the Right Vehicles", description: "We search the vehicle from the updated database. We will make a list of the candidate cars from the main auction houses or our own dealers’ network throughout Japan to satisfy your needs." },
        { image: salesImg3, title: "Assessment", description: "Each car goes through a careful assessment process after being purchased. We have our automobile mechanics with national license stationed throughout the country. They examine each of the candidate cars carefully, and choose ones with high quality." },
        { image: salesImg4, title: "Purchase", description: "Our purchasing staff will examine the condition of each candidate car at the site. The car will be purchased at an appropriate price." },
        { image: salesImg5, title: "Service / Maintenance", description: "After the purchased car is assessed by our staff, it is washed and maintained, if necessary, it will be repaired at our own workshop, and the car will be thoroughly conditioned." },
        { image: salesImg6, title: "Paperwork / Formalities", description: "All the complicated procedures such as cancellation of each car’s Vehicle Safety Inspection Certificate registration and custom procedures will be taken care of by our experts." },
        { image: salesImg7, title: "Shipment", description: "The cars will be shipped from Kobe and other 5 Japanese ports at anytime. We have speedy service for shipment, making full use of our domestic operation network." },
        { image: salesImg8, title: "After Service", description: "We will provide you with a high-quality after service. Setting up our branches in different countries enables us to serve each customer, as well as provide the necessary auto parts. We have a system to ship your order quickly." },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='max-w-[1000px] mx-auto pt-5 pb-10'>
            <p className='text-[12px] pb-5 text-end'> <Link to="/" className='text-[#FF9600] hover:underline cursor-pointer'>WORLD NAVI TOP</Link> {">"} <Link to="/business-description" className='text-[#FF9600] hover:underline cursor-pointer'>Business Description</Link> {">"} Sales</p>
            <div className='flex gap-10'>
                <img className='h-[270px]' src={banner} alt="" />

                <div className='space-y-10'>
                    <img src={businessDesImg} alt="" />

                    <img src={salesImg} alt="" />

                    <img src={shipAndCarImg} alt="" />

                    <img src={trustToSpeed} alt="" />

                    <p className='text-[13px] leading-[1.9] text-center'>
                        World Navi Co.,Ltd pursues both speed and quality. <br />
                        Our business policy is to make every single transaction of the car a satisfactory experience for both the seller and the buyer.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        {salesCardData.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />

                                <div className="p-3 border-3 border-t-0 border-[#FE9900] h-52">
                                    <h3 className="text-lg text-[#FE9900] font-medium">{item.title}</h3>
                                    <p className="text-[13px] leading-[1.8] text-gray-700 mt-2">
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='flex gap-9'>
                        <Link to="/business-description"><img src={btn1} alt="" /></Link>
                        <Link to="/sales"><img src={btn2} alt="" /></Link>
                        <Link to="/acquisition"><img src={btn3} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sales;