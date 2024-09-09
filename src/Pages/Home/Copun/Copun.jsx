import React, { useEffect } from 'react';
import {handleCouponCopy} from  './index'

const Copun = () => {
     useEffect(() => {
        handleCouponCopy()
     },[])
    return (
        <div className='my-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* -------------0000------------- */}
            <div className='flex flex-col md:flex-row  bg-gradient-to-r max-w-96 gap-2 from-purple-700 to-purple-300 p-8 md:p-4 relative'>
               <div>
               <h3 className='text-2xl font-bold text-center uppercase'>Discount <br /> <span className="bg-gradient-to-r from-red-600  to-white bg-clip-text text-transparent ml-6">Coupon</span></h3>
                <div className='flex justify-center items-center gap-4'>
                    <p className='text-lg font-bold'>50% <span className='bg-gradient-to-r
                    from-red-600 to-white bg-clip-text text-transparent'>OFF</span></p>
                    <p className='text-2xl font-serif text-[#fff] w-14 bg-[#000000] rounded-full p-3'>F</p>
                </div>
               </div>
               <div className='flex justify-center items-center'>
                <p className='couponCode bg-[#fff] text-gray-400 p-1 font-semibold border-dotted border-2 border-r-0'>NewYear2024</p>
                <p className='couponBtn h-9  flex items-center  p-1 uppercase text-sm border-dotted border-2 border-l-dashed '>copy code</p>
               </div>
               <div className='bg-[#fff] w-12 rounded-full h-12 absolute -top-6 right-1/3'></div>
               <div className='bg-[#fff] w-12 rounded-full h-12 absolute -bottom-6 right-1/3'></div>
            </div>
            {/* -------------0001------------- */}
            <div className='flex flex-col md:flex-row  bg-gradient-to-r max-w-96 gap-2 from-purple-700 to-purple-300 p-8 md:p-4 relative'>
               <div>
               <h3 className='text-2xl font-bold text-center uppercase'>Discount <br /> <span className="bg-gradient-to-r from-red-600  to-white bg-clip-text text-transparent ml-6">Coupon</span></h3>
                <div className='flex justify-center items-center gap-4'>
                    <p className='text-lg font-bold'>30% <span className='bg-gradient-to-r
                    from-red-600 to-white bg-clip-text text-transparent'>OFF</span></p>
                    <p className='text-2xl font-serif text-[#fff] w-14 bg-[#000000] rounded-full p-3'>F</p>
                </div>
               </div>
               <div className='flex justify-center items-center'>
                <p className='couponCode bg-[#fff] text-gray-400 p-1 font-semibold border-dotted border-2 border-r-0'>Zen-Z2024</p>
                <p className='couponBtn h-9  flex items-center  p-1 uppercase text-sm border-dotted border-2 border-l-dashed '>copy code</p>
               </div>
               <div className='bg-[#fff] w-12 rounded-full h-12 absolute -top-6 right-1/3'></div>
               <div className='bg-[#fff] w-12 rounded-full h-12 absolute -bottom-6 right-1/3'></div>
            </div>
            {/* -------------0000------------- */}
            <div className='flex flex-col md:flex-row  bg-gradient-to-r max-w-96 gap-2 from-purple-700 to-purple-300 p-8 md:p-4 relative'>
               <div>
               <h3 className='text-2xl font-bold text-center uppercase'>Discount <br /> <span className="bg-gradient-to-r from-red-600  to-white bg-clip-text text-transparent ml-6">Coupon</span></h3>
                <div className='flex justify-center items-center gap-4'>
                    <p className='text-lg font-bold'>50% <span className='bg-gradient-to-r
                    from-red-600 to-white bg-clip-text text-transparent'>OFF</span></p>
                    <p className='text-2xl font-serif text-[#fff] w-14 bg-[#000000] rounded-full p-3'>F</p>
                </div>
               </div>
               <div className='flex justify-center items-center'>
                <p className='couponCode bg-[#fff] text-gray-400 p-1 font-semibold border-dotted border-2 border-r-0'>Eid-2024</p>
                <p className='couponBtn h-9  flex items-center  p-1 uppercase text-sm border-dotted border-2 border-l-dashed '>copy code</p>
               </div>
               <div className='bg-[#fff] w-12 rounded-full h-12 absolute -top-6 right-1/3'></div>
               <div className='bg-[#fff] w-12 rounded-full h-12 absolute -bottom-6 right-1/3'></div>
            </div>
        </div>
    );
};

export default Copun;