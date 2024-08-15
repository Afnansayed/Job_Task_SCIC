import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Products from '../Products/Products';

const Searching = () => {
      
      const { data: products = [] , refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
          const res = await axios.get(`http://localhost:5000/products`);
          return res.data;
        }
      })
      console.log(products)
    return (
      <>
           <div className='text-center bg-gradient-to-r from-purple-600 to-purple-300 p-12'>
                  <h3 className='text-4xl font-bold  text-gray-600 uppercase'> We are the best seller in the <span className='bg-gradient-to-r from-red-600  to-white bg-clip-text text-transparent'> industry</span> .</h3>
                  <p className='w-3/4 mx-auto text-gray-200 mt-6'>We are happy to help you to find the best product. You provide the best quality products . We are maintining our monopoly in the market since last 10 years . So you can trust our diginity and the best products.</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                {
                  products.map( product => <Products
                  key={product._id}
                  product={product}
                  ></Products>)
                }
           </div>
      </>
    );
};

export default Searching;