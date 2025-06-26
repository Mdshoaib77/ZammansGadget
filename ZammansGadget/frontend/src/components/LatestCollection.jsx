// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';
// import { motion } from 'framer-motion';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10));
//   }, [products]);

//   return (
//     <div className="my-10">
//       <motion.div 
//         className="py-8 text-center"
//         initial={{ opacity: 0, y: 30 }} 
//         whileInView={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 1 }}
//       >
//         <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//         <p className="w-3/4 m-auto text-sm italic font-extrabold leading-relaxed tracking-widest text-pink-600 uppercase sm:text-base md:text-lg">
//           Discover our latest collection of sleek phone gadgets and trendy accessories. Elevate your mobile experience with innovative style and premium quality.
//         </p>
//       </motion.div>

//       {/* Rendering Products */}
//       <motion.div 
//         className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6"
//         initial={{ opacity: 0 }} 
//         whileInView={{ opacity: 1 }} 
//         transition={{ duration: 1.5 }}
//       >
//         {latestProducts.map((item, index) => (
//           <ProductItem 
//             key={index} 
//             id={item._id} 
//             image={item.image} 
//             name={item.name} 
//             price={item.price} 
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default LatestCollection;



import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <motion.div 
        className="py-8 text-center"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <Title text1={'LATEST'} text2={'HIGHLIGHTS'} />
        {/* <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'> */}
        <p className="w-3/4 m-auto text-sm italic font-bold leading-relaxed tracking-wider text-black-700 sm:text-base md:text-lg">
           Style meets technology—perfect for enhancing your mobile lifestyle.
        </p>
      </motion.div>

      {/* Rendering Products */}
      <motion.div 
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        {latestProducts.map((item, index) => (
          <ProductItem 
            key={index} 
            id={item._id} 
            image={item.image} 
            name={item.name} 
            price={item.price} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LatestCollection;



// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';
// import { motion } from 'framer-motion';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10));
//   }, [products]);

//   return (
//     <div className="my-10">
//       <motion.div 
//         className="py-8 text-center"
//         initial={{ opacity: 0, y: 30 }} 
//         whileInView={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 1 }}
//       >
//         <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//         <p className="w-3/4 m-auto text-sm italic font-extrabold leading-relaxed tracking-widest text-pink-600 uppercase sm:text-base md:text-lg">
//   Explore our premium selection of cutting-edge phone gadgets and must-have accessories. Style meets technology—perfect for enhancing your mobile lifestyle.
//         </p>
//       </motion.div>

//       {/* Rendering Products */}
//       <motion.div 
//         className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6"
//         initial={{ opacity: 0 }} 
//         whileInView={{ opacity: 1 }} 
//         transition={{ duration: 1.5 }}
//       >
//         {latestProducts.map((item, index) => (
//           <ProductItem 
//             key={index} 
//             id={item._id} 
//             image={item.image} 
//             name={item.name} 
//             price={item.price} 
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default LatestCollection;




// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {

//     const { products } = useContext(ShopContext);
//     const [latestProducts,setLatestProducts] = useState([]);

//     useEffect(()=>{
//         setLatestProducts(products.slice(0,10));
//     },[products])

//   return (
//     <div className='my-10'>
//       <div className='py-8 text-3xl text-center'>
//           <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//           <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
//           Explore the latest collection of innovative phone gadgets and essential accessories. From cutting-edge tech to stylish add-ons — everything you need to upgrade your mobile experience in one place.
//           </p>
//       </div>

//       {/* Rendering Products */}
//       <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
//         {
//           latestProducts.map((item,index)=>(
//             <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default LatestCollection
