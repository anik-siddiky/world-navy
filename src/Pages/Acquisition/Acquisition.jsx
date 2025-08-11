import btn1 from '../../assets/businessDescriptionBtn.gif'
import btn2 from '../../assets/salesBtn.gif'
import btn3 from '../../assets/acquisitionBtn.gif'
import banner from '../../assets/aboutPhoto.jpg'
import businessDesImg from '../../assets/en_business_title.jpg'
import buy1 from '../../assets/buy01.jpg'
import img2 from '../../assets/en_buy02.gif'
import { Link } from 'react-router'
import acquiImg1 from '../../assets/acquiImg1.jpg'
import acquiImg2 from '../../assets/acquiImg2.jpg'
import acquiImg3 from '../../assets/acquiImg3.jpg'
import acquiImg4 from '../../assets/acquiImg4.jpg'
import acquisition from '../../assets/acquistion_1.png'

const Acquisition = () => {

    const cardData = [
        { image: acquiImg1, title: 'We buy various types of cars.', description: 'We buy all types of vehicles, such as cars for private or business use, cars used at a driving school, or even a bus. We also buy special vehicles such as construction machineries. Our direct sales network around the world enables us to buy your car at a high price.' },
        { image: acquiImg2, title: 'Transactions can be done in cash.', description: 'We are flexible about terms of payment.' },
        { image: acquiImg3, title: 'Any signs or marks on the car body will be erased.', description: 'Company names and/or telephone numbers imprinted on the car will completely be erased before shipment so that private information will be protected.' },
        { image: acquiImg4, title: 'We will do all the complicated procedures.', description: 'We will handle all the procedures necessary for the cancellation of each car’s Vehicle Safety Inspection Certificate registration or the actual export. You will not have to deal with them.' },
    ]

    return (
        <div className='max-w-[1000px] mx-auto pt-5 pb-10'>
            <p className='text-[12px] pb-5 text-end'> <Link to="/" className='text-[#FF9600] hover:underline cursor-pointer'>WORLD NAVI TOP</Link> {">"} <Link to="/acquisition" className='text-[#FF9600] hover:underline cursor-pointer'>Acquisition</Link> {">"} Sales</p>
            <div className='flex gap-10'>
                <img className='h-[270px]' src={banner} alt="" />

                <div className='space-y-10'>
                    <img src={businessDesImg} alt="" />

                    <img className='w-full' src={acquisition} alt="" />

                    <img src={buy1} alt="" />

                    <img src={img2} alt="" />

                    <p className='text-[13px] leading-[1.9] text-center'>
                        World Navi Co.,Ltd is also willing to buy cars from corporations and individuals. <br />
                        We handle complicated processes that accompany buying and selling. <br />
                        Even old models can be sold to those who want them. So, please do not hesitate to inquire with us.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-5">
                        {cardData.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md  border-3 border-[#FE9900]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 h-52">
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

export default Acquisition;