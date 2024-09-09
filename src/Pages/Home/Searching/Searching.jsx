import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Products from "../Products/Products";
import NestedSelection from "../../../components/NestedSelection/NestedSelection";
import { MdMenuOpen } from "react-icons/md";

const Searching = () => {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(12);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [searchVlaue, setSearchValue] = useState("");
  const [selctedPriceOrder, setSelectedPriceOrder] = useState("");
  //https://job-task-scic-server-alpha.vercel.app
  // fetch products count for pagination
  useEffect(() => {
    axios
      .get(
        `https://job-task-scic-server-alpha.vercel.app/productsCount?brand=${selectedBrand}&category=${selectedCategory}&priceRange=${selectedPriceRange}&search=${searchVlaue}&priceOrder=${selctedPriceOrder}`
      )
      .then((res) => setCount(res.data.count));
    setCurrentPage(0);
  }, [selectedBrand, selectedCategory, selectedPriceRange, searchVlaue,selctedPriceOrder]);

  const numOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numOfPages).keys()];

  //console.log(numOfPages)

  //console.log(count, pages);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `https://job-task-scic-server-alpha.vercel.app/products?page=${currentPage}&size=${itemPerPage}&brand=${selectedBrand}&category=${selectedCategory}&priceRange=${selectedPriceRange}&search=${searchVlaue}&priceOrder=${selctedPriceOrder}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [
    currentPage,
    itemPerPage,
    selectedBrand,
    selectedCategory,
    selectedPriceRange,
    searchVlaue,
    selctedPriceOrder,
  ]);

  // handle item per page
  // const handleItemsPerPage = (e) => {
  // setItemPerPage(e.target.value);
  // setCurrentPage(0);
  // };

  // handle curentpage
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };
  // handle prev
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  // handle next
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  //hand brand
  const handleBrand = (e) => {
    const value = e.target.value;

    // If the same checkbox is clicked, unselect it
    if (selectedBrand === value) {
      setSelectedBrand("");
    } else {
      setSelectedBrand(value);
    }
  };
  const handleCategory = (e) => {
    const value = e.target.value;

    // If the same checkbox is clicked, unselect it
    if (selectedCategory === value) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(value);
    }
  };
  const handlePriceRange = (e) => {
    const value = e.target.value;

    // If the same checkbox is clicked, unselect it
    if (selectedPriceRange === value) {
      setSelectedPriceRange("");
    } else {
      setSelectedPriceRange(value);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };9
  const handlePriceLowToHigh = (e) => {
    const value = e.target.value;
    setSelectedPriceOrder(value);
  }
 // console.log(selctedPriceOrder);
  return (
    <>
      <div className="text-center bg-gradient-to-r from-purple-600 to-purple-300 p-4 lg:p-12 rounded-sm">
        <h3 className="text-3xl md:text-4xl font-bold  text-gray-600 uppercase">
          {" "}
          We are the best seller in the{" "}
          <span className="bg-gradient-to-r from-red-600  to-white bg-clip-text text-transparent">
            {" "}
            industry
          </span>{" "}
          .
        </h3>
        <p className="w-full text-center lg:w-3/4 mx-auto text-gray-200 mt-3 lg:mt-6">
          We are happy to help you to find the best product. You provide the
          best quality products . We are maintining our monopoly in the market
          since last 10 years . So you can trust our diginity and the best
          products.
        </p>

        <div className="join my-6">
          <input
            type="text"
            placeholder="Search"
            className=" w-full  lg:w-72  p-2 join-item rounded-l-none"
            onChange={handleSearch}
          />
          <select
            className="p-2 w-full lg:w-64 jion-item"
            onChange={handlePriceLowToHigh}
          >
            <option value="">Price Order</option>
            <option value="asc">Low</option>
            <option value="dsc">High</option>
          </select>
        </div>
      </div>
      {/* A mumba ui components }*/}
      <div className="drawer lg:drawer-open pt-12">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {/* All Products Maping and rendering here */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {products.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn  bg-gradient-to-r from-purple-300 to-purple-600 m-2 drawer-button  lg:hidden absolute right-0 top-0"
          >
            <MdMenuOpen />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-gradient-to-b from-purple-300 to-purple-600 text-base-content min-h-full w-48 p-4">
            {/* Sidebar content here */}
            {/* handle brand */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">
                Brand
              </h3>
              <div className="flex flex-col space-y-2 justify-start items-start text-[15px]">
                <span>
                  <input
                    type="checkbox"
                    value="Addidas"
                    checked={selectedBrand === "Addidas"}
                    onChange={handleBrand}
                    // disabled={selectedBrand !== "" && selectedBrand !== "addidas"}
                  />{" "}
                  Addidas
                </span>
                <span>
                  <input
                    type="checkbox"
                    value="Puma"
                    checked={selectedBrand === "Puma"}
                    onChange={handleBrand}
                    // disabled={selectedBrand !== "" && selectedBrand !== "Puma"}
                  />{" "}
                  Puma
                </span>
                <span>
                  <input
                    type="checkbox"
                    value="Nike"
                    checked={selectedBrand === "Nike"}
                    onChange={handleBrand}
                    // disabled={selectedBrand !== "" && selectedBrand !== "Nike"}
                  />{" "}
                  Nike
                </span>
                <span>
                  <input
                    type="checkbox"
                    value="Gucci"
                    checked={selectedBrand === "Gucci"}
                    onChange={handleBrand}
                    // disabled={selectedBrand !== "" && selectedBrand !== "Gucci"}
                  />{" "}
                  Gucci
                </span>
              </div>
            </div>
            <div className="divider"></div>
            {/* handle dfjk */}
            {/* handle Category */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">
                Category
              </h3>
              <div className="flex flex-col space-y-2 justify-start items-start text-[15px]">
                <span>
                  <input
                    type="checkbox"
                    value="Men's Sneaker"
                    checked={selectedCategory === "Men's Sneaker"}
                    onChange={handleCategory}
                    // disabled={selectedBrand !== "" && selectedBrand !== "addidas"}
                  />{" "}
                  Men's Sneaker
                </span>
                <span>
                  <input
                    type="checkbox"
                    value="Men's Pants"
                    checked={selectedCategory === "Men's Pants"}
                    onChange={handleCategory}
                    // disabled={selectedBrand !== "" && selectedBrand !== "Men's Pants"}
                  />{" "}
                  Men's Pants
                </span>
                <span>
                  <input
                    type="checkbox"
                    value="Men's Boot"
                    checked={selectedCategory === "Men's Boot"}
                    onChange={handleCategory}
                    // disabled={selectedBrand !== "" && selectedBrand !== "Men's Boot"}
                  />{" "}
                  Men's Boot
                </span>
                <span>
                  <input
                    type="checkbox"
                    value="Bag"
                    checked={selectedCategory === "Bag"}
                    onChange={handleCategory}
                    // disabled={selectedBrand !== "" && selectedBrand !== "Bag"}
                  />{" "}
                  Bag
                </span>
              </div>
            </div>
            <div className="divider"></div>
            {/* ---------------0000------------- */}
            {/* handle Price range */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">
                Price Range{" "}
              </h3>
              <div className="flex flex-col space-y-2 justify-start items-start text-[15px]">
                <div className="flex gap-3">
                  <span>
                    <input
                      type="checkbox"
                      value="100"
                      checked={selectedPriceRange === "100"}
                      onChange={handlePriceRange}
                      // disabled={selectedBrand !== "" && selectedBrand !== "100"}
                    />{" "}
                    100
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      value="200"
                      checked={selectedPriceRange === "200"}
                      onChange={handlePriceRange}
                      // disabled={selectedBrand !== "" && selectedBrand !== "200"}
                    />{" "}
                    200
                  </span>
                </div>
                <div className="flex gap-3">
                  <span>
                    <input
                      type="checkbox"
                      value="300"
                      checked={selectedPriceRange === "300"}
                      onChange={handlePriceRange}
                      // disabled={selectedBrand !== "" && selectedBrand !== "300"}
                    />{" "}
                    300
                  </span>
                  <span>
                    <input
                      type="checkbox"
                      value="400"
                      checked={selectedPriceRange === "400"}
                      onChange={handlePriceRange}
                      // disabled={selectedBrand !== "" && selectedBrand !== "400"}
                    />{" "}
                    400
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 md:mt-12">
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
              className={
                currentPage === page
                  ? "inline-flex items-center bg-purple-600 text-white px-4 py-2 text-sm font-semibold border border-gray-300"
                  : "inlineflex items-center bg-white text-gray-800 px-4 py-2 text-sm font-semibold border border-gray-300"
              }
              onClick={() => handleCurrentPage(page)}
            >
              {page + 1}
            </button>
          ))}
          <button
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md border-gray-300 mr-6"
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
        {/* <select */}
        {/* value={itemPerPage} */}
        {/* onChange={handleItemsPerPage} */}
        {/* className="bg-purple-600 mt-4 px-2 py-2 text-sm font-semibold border rounded-md border-gray-300 ml-6 mb-4" */}
        {/* > */}
        {/* <option value="5">5</option> */}
        {/* <option value="10">10</option> */}
        {/* <option value="20">20</option> */}
        {/* </select> */}
      </div>
    </>
  );
};

export default Searching;
