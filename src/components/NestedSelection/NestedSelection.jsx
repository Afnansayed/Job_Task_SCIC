import React, { useState } from "react";

const NestedSelection = () => {
  const categories = {
    Electronics: ["Mobile Phones", "Laptops", "Cameras"],
    Clothing: ["Men", "Women", "Kids"],
    Home: ["Furniture", "Decor", "Kitchen"],
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory(''); // Reset subcategory when category changes
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto space-y-4">
        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Subcategory Dropdown */}
        <select
          value={selectedSubcategory}
          onChange={handleSubcategoryChange}
          disabled={!selectedCategory} // Disable if no category selected
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            !selectedCategory ? "bg-gray-200 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Select Subcategory</option>
          {selectedCategory &&
            categories[selectedCategory].map((subcategory, index) => (
              <option key={index} value={subcategory}>
                {subcategory}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default NestedSelection;
