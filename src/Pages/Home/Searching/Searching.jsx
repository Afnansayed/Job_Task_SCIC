import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Products from "../Products/Products";

const Searching = () => {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(10);

  // fetch products count for pagination
  useEffect(() => {
    axios
      .get(`http://localhost:5000/productsCount`)
      .then((res) => setCount(res.data.count));
  }, []);

  const numOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numOfPages).keys()];

  //console.log(numOfPages)

  console.log(count, pages);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/products?page=${currentPage}&size=${itemPerPage}`);
      return res.data;
    },
  });

  useEffect(() => {
    refetch()
  },[currentPage,itemPerPage])

  // handle curentpage 
  const handleCurrentPage = (page) => {
    setCurrentPage(page)
  }
  // handle prev
  const handlePrev = () => {
    if(currentPage > 0){
      setCurrentPage(currentPage - 1)
    }
  }
  // handle next 
  const handleNext = () => {
    if (currentPage < pages.length - 1){
         setCurrentPage(currentPage + 1)
    }
  }
  //console.log(products)
  return (
    <>
      <div className="text-center bg-gradient-to-r from-purple-600 to-purple-300 p-12">
        <h3 className="text-4xl font-bold  text-gray-600 uppercase">
          {" "}
          We are the best seller in the{" "}
          <span className="bg-gradient-to-r from-red-600  to-white bg-clip-text text-transparent">
            {" "}
            industry
          </span>{" "}
          .
        </h3>
        <p className="w-3/4 mx-auto text-gray-200 mt-6">
          We are happy to help you to find the best product. You provide the
          best quality products . We are maintining our monopoly in the market
          since last 10 years . So you can trust our diginity and the best
          products.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
      <div>
        <nav
          aria-label="Pagination"
          className="inline-flex -space-x-px rounded-md shadow-sm bg-gray-100 text-gray-800"
        >
          <button
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md border-gray-300"
            onClick={handlePrev}
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {pages.map((page) => (
            <button
              key={page}
              type="button"
              aria-current="page"
              className={currentPage === page ? 'inline-flex items-center bg-purple-600 text-white px-4 py-2 text-sm font-semibold border border-gray-300' :  'inlineflex items-center bg-white text-gray-800 px-4 py-2 text-sm font-semibold border border-gray-300'}
              onClick={() => handleCurrentPage(page)}
            >
              {page + 1}
            </button>
          ))}
          <button
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md border-gray-300"
            onClick={handleNext}
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Searching;
