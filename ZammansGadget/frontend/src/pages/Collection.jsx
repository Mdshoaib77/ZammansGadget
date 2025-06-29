// // import React, { useContext, useEffect, useState } from 'react'
// // import { ShopContext } from '../context/ShopContext'
// // import { assets } from '../assets/assets';
// // import Title from '../components/Title';
// // import ProductItem from '../components/ProductItem';

// // const Collection = () => {
// //   const { products , search , showSearch } = useContext(ShopContext);
// //   const [showFilter,setShowFilter] = useState(false);
// //   const [filterProducts,setFilterProducts] = useState([]);
// //   const [category,setCategory] = useState([]);
// //   const [subCategory,setSubCategory] = useState([]);
// //   const [sortType,setSortType] = useState('relavent')

// //   const toggleCategory = (e) => {
// //     if (category.includes(e.target.value)) {
// //         setCategory(prev=> prev.filter(item => item !== e.target.value))
// //     }
// //     else{
// //       setCategory(prev => [...prev,e.target.value])
// //     }
// //   }

// //   const toggleSubCategory = (e) => {
// //     if (subCategory.includes(e.target.value)) {
// //       setSubCategory(prev=> prev.filter(item => item !== e.target.value))
// //     }
// //     else{
// //       setSubCategory(prev => [...prev,e.target.value])
// //     }
// //   }

// //   const applyFilter = () => {
// //     let productsCopy = products.slice();

// //     if (showSearch && search) {
// //       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
// //     }

// //     if (category.length > 0) {
// //       productsCopy = productsCopy.filter(item => category.includes(item.category));
// //     }

// //     if (subCategory.length > 0 ) {
// //       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
// //     }

// //     setFilterProducts(productsCopy)
// //   }

// //   const sortProduct = () => {
// //     let fpCopy = filterProducts.slice();

// //     switch (sortType) {
// //       case 'low-high':
// //         setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
// //         break;

// //       case 'high-low':
// //         setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
// //         break;

// //       default:
// //         applyFilter();
// //         break;
// //     }
// //   }

// //   useEffect(()=>{
// //       applyFilter();
// //   },[category,subCategory,search,showSearch,products])

// //   useEffect(()=>{
// //     sortProduct();
// //   },[sortType])

// //   return (
// //     <div className='flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10'>
      
// //       {/* Filter Options */}
// //       <div className='min-w-60'>
// //         <p onClick={()=>setShowFilter(!showFilter)} className='flex items-center gap-2 my-2 text-xl cursor-pointer'>
// //           FILTERS
// //           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
// //         </p>

// //         {/* Category Filter */}
// //         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
// //           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
// //           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
// //             <p className='flex gap-2'>
// //               <input className='w-3' type="checkbox" value={'Mobile Phone'} onChange={toggleCategory}/> Mobile Phone
// //             </p>
// //             <p className='flex gap-2'>
// //               <input className='w-3' type="checkbox" value={'Accessories'} onChange={toggleCategory}/> Accessories
// //             </p>
// //             <p className='flex gap-2'>
// //               <input className='w-3' type="checkbox" value={'Gadgets'} onChange={toggleCategory}/> Gadgets
// //             </p>
// //           </div>
// //         </div>

// //         {/* SubCategory Filter */}
// //         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
// //           <p className='mb-3 text-sm font-medium'>TYPE</p>
// //           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
// //             <p className='flex gap-2'>
// //               <input className='w-3' type="checkbox" value={'Used Phones'} onChange={toggleSubCategory}/> Used Phones
// //             </p>
// //             <p className='flex gap-2'>
// //               <input className='w-3' type="checkbox" value={'Stickers'} onChange={toggleSubCategory}/> Stickers
// //             </p>
// //             <p className='flex gap-2'>
// //               <input className='w-3' type="checkbox" value={'Electronics'} onChange={toggleSubCategory}/> Electronics
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Right Side */}
// //       <div className='flex-1'>
// //         <div className='flex justify-between mb-4 text-base sm:text-2xl'>
// //             <Title text1={'ALL'} text2={'COLLECTIONS'} />
// //             <select onChange={(e)=>setSortType(e.target.value)} className='px-2 text-sm border-2 border-gray-300'>
// //               <option value="relavent">Sort by: Relavent</option>
// //               <option value="low-high">Sort by: Low to High</option>
// //               <option value="high-low">Sort by: High to Low</option>
// //             </select>
// //         </div>

// //         {/* Map Products */}
// //         <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
// //           {
// //             filterProducts.map((item,index)=>(
// //               <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
// //             ))
// //           }
// //         </div>
// //       </div>

// //     </div>
// //   )
// // }

// // export default Collection




// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [sortType, setSortType] = useState('relavent');

//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(prev => prev.filter(item => item !== e.target.value));
//     } else {
//       setCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   const applyFilter = () => {
//     let productsCopy = products.slice();

//     if (showSearch && search) {
//       productsCopy = productsCopy.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         category.includes(item.category)
//       );
//     }

//     setFilterProducts(productsCopy);
//   };

//   const sortProduct = () => {
//     let fpCopy = filterProducts.slice();
//     switch (sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
//         break;
//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
//         break;
//       default:
//         applyFilter();
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [category, search, showSearch, products]);

//   useEffect(() => {
//     sortProduct();
//   }, [sortType]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('http://localhost:4000/api/product/categories');
//         const data = await res.json();
//         if (data.success) {
//           setAllCategories(data.categories);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   return (
//     <div className='flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10'>

//       <div className='min-w-60'>
//         <p
//           onClick={() => setShowFilter(!showFilter)}
//           className='flex items-center gap-2 my-2 text-xl cursor-pointer'
//         >
//           FILTERS
//           <img
//             className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
//             src={assets.dropdown_icon}
//             alt=""
//           />
//         </p>

//         <div
//           className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
//         >
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             {allCategories.map((cat, index) => (
//               <p className='flex gap-2' key={index}>
//                 <input
//                   className='w-3'
//                   type="checkbox"
//                   value={cat}
//                   onChange={toggleCategory}
//                 />{' '}
//                 {cat}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className='flex-1'>
//         <div className='flex justify-between mb-4 text-base sm:text-2xl'>
//           <Title text1={'ALL'} text2={'COLLECTIONS'} />
//           <select
//             onChange={(e) => setSortType(e.target.value)}
//             className='px-2 text-sm border-2 border-gray-300'
//           >
//             <option value="relavent">Sort by: Relavent</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
//           {filterProducts.map((item, index) => (
//             <ProductItem
//               key={index}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;

// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('ALL'); // Active category, default ALL
//   const [sortType, setSortType] = useState('relavent');

//   // Fetch categories on mount
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('http://localhost:4000/api/product/categories');
//         const data = await res.json();
//         if (data.success) {
//           setAllCategories(data.categories);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Filter products whenever products, activeCategory, search or showSearch changes
//   useEffect(() => {
//     let filtered = products;

//     // Filter by search
//     if (showSearch && search) {
//       filtered = filtered.filter(p =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // Filter by category if not ALL
//     if (activeCategory !== 'ALL') {
//       filtered = filtered.filter(p => p.category === activeCategory);
//     }

//     setFilterProducts(filtered);
//   }, [products, activeCategory, search, showSearch]);

//   // Sort products on sortType change
//   useEffect(() => {
//     let sortedProducts = [...filterProducts];
//     switch (sortType) {
//       case 'low-high':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;
//       case 'high-low':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         // 'relavent' or others — no sorting or default sorting
//         break;
//     }
//     setFilterProducts(sortedProducts);
//   }, [sortType]);

//   return (
//     <div className="px-4 pt-10 sm:px-6 lg:px-8">
//       {/* Filter Buttons */}
//       <div className="mb-6">
//         <div className="flex flex-wrap justify-center gap-3 overflow-x-auto sm:justify-start no-scrollbar">
//           {/* ALL button */}
//           <button
//             onClick={() => setActiveCategory('ALL')}
//             className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//               ${
//                 activeCategory === 'ALL'
//                   ? 'bg-blue-600 text-white border-blue-600'
//                   : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//               } transition-colors duration-300`}
//           >
//             ALL
//           </button>

//           {/* Category buttons */}
//           {allCategories.map((cat, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//                 ${
//                   activeCategory === cat
//                     ? 'bg-blue-600 text-white border-blue-600'
//                     : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//                 } transition-colors duration-300`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Title */}
//       <div className="mb-6 text-center sm:text-left">
//         <Title text1="ALL" text2="COLLECTIONS" />
//       </div>

//       {/* Sort Select */}
//       <div className="flex justify-center mb-6 sm:justify-end">
//         <select
//           value={sortType}
//           onChange={(e) => setSortType(e.target.value)}
//           className="px-3 py-2 text-sm border border-gray-300 rounded-md"
//         >
//           <option value="relavent">Sort by: Relevant</option>
//           <option value="low-high">Sort by: Low to High</option>
//           <option value="high-low">Sort by: High to Low</option>
//         </select>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//         {filterProducts.length > 0 ? (
//           filterProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No products found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;



// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('ALL');
//   const [sortType, setSortType] = useState('relavent');

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Read category from URL query param
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const categoryFromUrl = params.get('category');
//     if (categoryFromUrl) {
//       setActiveCategory(categoryFromUrl);
//     } else {
//       setActiveCategory('ALL');
//     }
//   }, [location.search]);

//   // Fetch all categories for buttons
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('http://localhost:4000/api/product/categories');
//         const data = await res.json();
//         if (data.success) {
//           setAllCategories(data.categories);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Filter products by activeCategory, search & showSearch
//   useEffect(() => {
//     let filtered = products;

//     if (showSearch && search) {
//       filtered = filtered.filter(p =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (activeCategory !== 'ALL') {
//       filtered = filtered.filter(p => p.category === activeCategory);
//     }

//     setFilterProducts(filtered);
//   }, [products, activeCategory, search, showSearch]);

//   // Sort products on sortType change
//   useEffect(() => {
//     let sortedProducts = [...filterProducts];
//     switch (sortType) {
//       case 'low-high':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;
//       case 'high-low':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         break;
//     }
//     setFilterProducts(sortedProducts);
//   }, [sortType]);

//   return (
//     <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
//       {/* Category Filter Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 py-1 mb-6 overflow-x-auto sm:justify-start no-scrollbar">
//         <button
//           onClick={() => {
//             setActiveCategory('ALL');
//             navigate('/collection');
//           }}
//           className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//             ${
//               activeCategory === 'ALL'
//                 ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                 : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//             } transition-colors duration-300`}
//         >
//           ALL
//         </button>

//         {allCategories.map((cat, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setActiveCategory(cat);
//               navigate(`/collection?category=${encodeURIComponent(cat)}`);
//             }}
//             className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//               ${
//                 activeCategory === cat
//                   ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                   : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//               } transition-colors duration-300`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Title */}
//       <div className="mb-6 text-center sm:text-left">
//         <Title text1="ALL" text2="COLLECTIONS" />
//       </div>

//       {/* Sort Select */}
//       <div className="flex justify-center mb-6 sm:justify-end">
//         <select
//           value={sortType}
//           onChange={(e) => setSortType(e.target.value)}
//           className="px-3 py-2 text-sm border border-gray-300 rounded-md"
//         >
//           <option value="relavent">Sort by: Relevant</option>
//           <option value="low-high">Sort by: Low to High</option>
//           <option value="high-low">Sort by: High to Low</option>
//         </select>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//         {filterProducts.length > 0 ? (
//           filterProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No products found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { useLocation, useNavigate } from 'react-router-dom';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [sortType, setSortType] = useState('relavent');

  const location = useLocation();
  const navigate = useNavigate();

  // Category load from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/product/categories');
        const data = await res.json();
        if (data.success) {
          setAllCategories(data.categories);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  // URL Param handle
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get('category');

    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    } else {
      setActiveCategory(null);
    }
  }, [location.search]);

  // Filter Products
  useEffect(() => {
    let filtered = products;

    if (showSearch && search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (activeCategory) {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    setFilterProducts(filtered);
  }, [products, activeCategory, search, showSearch]);

  // Sorting Logic
  useEffect(() => {
    let sortedProducts = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilterProducts(sortedProducts);
  }, [sortType]);

  return (
    <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
      
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 py-1 mb-6 overflow-x-auto sm:justify-start no-scrollbar">
        {allCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveCategory(cat);
              navigate(`/collection?category=${encodeURIComponent(cat)}`);
            }}
            className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
              ${activeCategory === cat
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}
              transition-colors duration-300`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Title */}
      <div className="mb-6 text-center sm:text-left">
        <Title text1="ALL" text2="COLLECTIONS" />
      </div>

      {/* Sort Select */}
      <div className="flex justify-center mb-6 sm:justify-end">
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-300 rounded-md"
        >
          <option value="relavent">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {filterProducts.length > 0 ? (
          filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          !activeCategory ? (
            products.map((item) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Collection;







// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(null); // By default no category filter
//   const [sortType, setSortType] = useState('relavent');

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Load category buttons from server
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('http://localhost:4000/api/product/categories');
//         const data = await res.json();
//         if (data.success) {
//           setAllCategories(data.categories);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Filter logic
//   useEffect(() => {
//     let filtered = products;

//     if (showSearch && search) {
//       filtered = filtered.filter(p =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (activeCategory) {
//       filtered = filtered.filter(p => p.category === activeCategory);
//     }

//     setFilterProducts(filtered);
//   }, [products, activeCategory, search, showSearch]);

//   // Sort logic
//   useEffect(() => {
//     let sortedProducts = [...filterProducts];
//     switch (sortType) {
//       case 'low-high':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;
//       case 'high-low':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         break;
//     }
//     setFilterProducts(sortedProducts);
//   }, [sortType]);

//   return (
//     <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">

//       {/* Category Filter Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 py-1 mb-6 overflow-x-auto sm:justify-start no-scrollbar">
//         {allCategories.map((cat, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setActiveCategory(cat);
//               navigate(`/collection?category=${encodeURIComponent(cat)}`);
//             }}
//             className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//               ${activeCategory === cat
//                 ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                 : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}
//               transition-colors duration-300`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Title */}
//       <div className="mb-6 text-center sm:text-left">
//         <Title text1="ALL" text2="COLLECTIONS" />
//       </div>

//       {/* Sort Select */}
//       <div className="flex justify-center mb-6 sm:justify-end">
//         <select
//           value={sortType}
//           onChange={(e) => setSortType(e.target.value)}
//           className="px-3 py-2 text-sm border border-gray-300 rounded-md"
//         >
//           <option value="relavent">Sort by: Relevant</option>
//           <option value="low-high">Sort by: Low to High</option>
//           <option value="high-low">Sort by: High to Low</option>
//         </select>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//         {filterProducts.length > 0 ? (
//           filterProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))
//         ) : (
//           products.length > 0 && !activeCategory ? (
//             products.map((item) => (
//               <ProductItem
//                 key={item._id}
//                 name={item.name}
//                 id={item._id}
//                 price={item.price}
//                 image={item.image}
//               />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               No products found.
//             </p>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;



// see more

// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const MOBILE_VISIBLE_CATEGORIES = [
//   'ALL',
//   'Official Phones',
//   'Unofficial Phones',
//   'Used Phones',
//   'Adapter and Power cable',
// ];

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('ALL');
//   const [sortType, setSortType] = useState('relavent');
//   const [showMoreCategories, setShowMoreCategories] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen size for mobile or desktop
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 640); // sm breakpoint Tailwind ~640px
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Fetch categories on mount
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch('http://localhost:4000/api/product/categories');
//         const data = await res.json();
//         if (data.success) {
//           setAllCategories(data.categories);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Filter products on dependency change
//   useEffect(() => {
//     let filtered = products;

//     if (showSearch && search) {
//       filtered = filtered.filter(p =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (activeCategory !== 'ALL') {
//       filtered = filtered.filter(p => p.category === activeCategory);
//     }

//     setFilterProducts(filtered);
//   }, [products, activeCategory, search, showSearch]);

//   // Sort products
//   useEffect(() => {
//     let sortedProducts = [...filterProducts];
//     switch (sortType) {
//       case 'low-high':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;
//       case 'high-low':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         break;
//     }
//     setFilterProducts(sortedProducts);
//   }, [sortType]);

//   // Determine which categories to show based on device and showMoreCategories state
//   const categoriesToShow = isMobile
//     ? showMoreCategories
//       ? ['ALL', ...allCategories]
//       : MOBILE_VISIBLE_CATEGORIES
//     : ['ALL', ...allCategories];

//   return (
//     <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
//       {/* Filter Buttons */}
//       <div className="mb-6">
//         <div className="flex flex-wrap justify-center gap-3 py-1 overflow-x-auto sm:justify-start no-scrollbar">
//           {categoriesToShow.map((cat, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap
//                 ${
//                   activeCategory === cat
//                     ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                     : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//                 } transition-colors duration-300`}
//             >
//               {cat}
//             </button>
//           ))}

//           {/* Show More / Show Less button only on mobile and only if categories exceed visible */}
//           {isMobile && allCategories.length > MOBILE_VISIBLE_CATEGORIES.length - 1 && (
//             <button
//               onClick={() => setShowMoreCategories(!showMoreCategories)}
//               className="px-4 py-2 font-medium text-gray-700 transition-colors duration-300 bg-white border border-gray-300 rounded-md hover:bg-gray-100 whitespace-nowrap"
//             >
//               {showMoreCategories ? 'Show Less' : 'See More'}
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Title */}
//       <div className="mb-6 text-center sm:text-left">
//         <Title text1="ALL" text2="COLLECTIONS" />
//       </div>

//       {/* Sort Select */}
//       <div className="flex justify-center mb-6 sm:justify-end">
//         <select
//           value={sortType}
//           onChange={(e) => setSortType(e.target.value)}
//           className="px-3 py-2 text-sm border border-gray-300 rounded-md"
//         >
//           <option value="relavent">Sort by: Relevant</option>
//           <option value="low-high">Sort by: Low to High</option>
//           <option value="high-low">Sort by: High to Low</option>
//         </select>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//         {filterProducts.length > 0 ? (
//           filterProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No products found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;
