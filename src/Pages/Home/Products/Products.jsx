import React from 'react';

const Products = ({ product}) => {
    return (
        <>
            <section className='bg-base-100 w-36 lg:w-48 mx-auto p-2 shadow-2xl mb-2 text-sm'>
                     <div>
                        <img src={product.img} alt="Product picture" />
                     </div>
                     <div className='text-left'>
                     <h1 className='text-left'><span className='text-[15px] font-bold'>Name: </span> {product.name}</h1>
                     <h1><span className='text-[15px] font-bold'>Category : </span> {product?.category}</h1>
                     <h1><span className='text-[15px] font-bold'>Brand: </span> {product?.seller}</h1>
                     </div>
                     <div className='gap-4 hidden lg:block  lg:flex'>
                        <h3><span className='text-[15px] font-bold w-1/2'>Price: </span> ${product?.price}</h3>
                        <h3><span className='text-[15px] font-bold w-1/2'>Rating: </span>: {product?.ratings}</h3>
                     </div>
            </section>
        </>
    );
};

export default Products;