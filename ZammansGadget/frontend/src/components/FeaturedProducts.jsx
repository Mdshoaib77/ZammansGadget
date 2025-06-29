import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const FeaturedProducts = () => {
  const { products } = useContext(ShopContext);

  // State to track which tab is active (phones or bestseller)
  const [activeTab, setActiveTab] = useState('phones');

  // Phones filtered products
  const phones = products.filter((p) => p.category === 'official phones');

  // Best seller filtered products
  const bestSellers = products.filter((p) => p.bestseller);

  // Decide which products to show based on active tab
  const displayedProducts = activeTab === 'phones' ? phones : bestSellers;

  return (
    <div className="flex flex-col gap-8 px-4 py-10 mx-auto max-w-7xl md:flex-row">
      
      {/* Left side - Tabs */}
      <div className="flex flex-col space-y-6 md:w-1/4">
        <button
          onClick={() => setActiveTab('phones')}
          className={`text-xl font-bold p-3 rounded ${
            activeTab === 'phones' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}
        >
          Phones
        </button>

        <button
          onClick={() => setActiveTab('bestseller')}
          className={`text-xl font-bold p-3 rounded ${
            activeTab === 'bestseller' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
          }`}
        >
          Best Selling
        </button>
      </div>

      {/* Right side - Products Grid */}
      <div className="grid grid-cols-2 gap-6 md:w-3/4 sm:grid-cols-3 md:grid-cols-4">
        {displayedProducts.length === 0 && <p>No products found.</p>}

        {displayedProducts.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
