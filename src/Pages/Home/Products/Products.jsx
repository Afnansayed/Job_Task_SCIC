import React from 'react';

const Products = ({ product}) => {
    return (
        <>
            <section className='bg-base-100 w-64 mx-auto p-2 shadow-2xl mb-2'>
                     <div>
                        <img src={product.img} alt="Product picture" />
                     </div>
                     <div className='text-left'>
                     <h1 className='text-left'><span className='text-lg font-semibold'>Name: </span> {product.name}</h1>
                     <h1><span className='text-lg font-semibold'>Category : </span> {product?.category}</h1>
                     <h1><span className='text-lg font-semibold'>Brand: </span> {product?.seller}</h1>
                     </div>
                     <div className='flex gap-4'>
                        <h3><span className='text-lg font-semibold w-1/2'>Price: </span> ${product?.price}</h3>
                        <h3><span className='text-lg font-semibold w-1/2'>Rating: </span>: {product?.ratings}</h3>
                     </div>
            </section>
        </>
    );
};

export default Products;