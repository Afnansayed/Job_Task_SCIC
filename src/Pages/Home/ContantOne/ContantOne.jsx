import React from 'react';
import img from '../../../assets/images/imge-1.jpg';
import img2 from '../../../assets/images/image-2.jpg';

const ContantOne = () => {
    return (
        <div className='flex h-auto max-auto md:p-6 flex-col md:flex-row'>
            {/* Text Section */}
            <div className='w-full md:w-[60%]'>
                <h1 className='bg-gradient-to-r from-violet-800 to-red-600 bg-clip-text text-transparent text-2xl md:text-4xl font-bold text-cli text-ellipsis md:text-left'>
                Discover Your Perfect Product  with <br className='hidden md:block' />  Our Exclusive Selection 
                </h1>
                <p className='text-base md:text-lg mt-4  w-full md:w-[80%] text-gray-400  md:text-left'>
                Welcome to our store, where we offer a wide range of high-quality products tailored to your needs. From the latest electronics and fashion trends to unique home decor and gifts, we have something for everyone. Enjoy a seamless shopping experience with fast delivery and exceptional customer service. Explore our collection now and find exactly what you’re looking for!
                </p>
            </div>

            {/* Image Section */}
            <div className='relative flex w-full md:w-[40%] justify-center mt-12 md:mt-0'>
                <figure className='max-w-full max-h-72 absolute -left-6 md:-left-12 -top-8'>
                    <img src={img2} alt="" className='h-52 md:h-72 rounded-lg' />
                </figure>
                <figure className='max-w-full mx-auto'>
                    <img src={img} alt="" className='rounded-lg h-52 md:h-72' />
                </figure>
            </div>
        </div>
    );
};

export default ContantOne;
